import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { countWords } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const createAvatarRecord = async (profileId: string, imageKey: string, position: number) => {
  const { data: storagePublicUrlData, error: storagePublicUrlError } =
    await supabaseInstance.storage.from('avatars').getPublicUrl(imageKey);

  if (storagePublicUrlError || !storagePublicUrlData) {
    return null;
  }

  const bucketNamesCount = countWords(storagePublicUrlData.publicURL, 'avatars');
  const parsedPublicUrl =
    bucketNamesCount >= 2
      ? storagePublicUrlData.publicURL.replace('/avatars', '')
      : storagePublicUrlData.publicURL;

  return supabaseInstance.from('avatars').insert({
    position,
    avatar_key: imageKey,
    profile_id: profileId,
    avatar_public_url: parsedPublicUrl,
  });
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const userData = request.body;

  // process image keys
  if (userData.imageKeys) {
    const { data: avatars } = await supabaseInstance
      .from('avatars')
      .select('*')
      .eq('profile_id', user.id);

    const avatarsToRemove = avatars?.reduce((_accumulator, _avatar) => {
      if (!userData.imageKeys.includes(_avatar.avatar_public_url)) {
        return [..._accumulator, _avatar];
      }

      return _accumulator;
    }, []);

    let i = 0;

    // upload new avatars
    for (const _imageKey of userData.imageKeys) {
      if (_imageKey.startsWith('avatars/')) {
        // eslint-disable-next-line no-await-in-loop
        await createAvatarRecord(user.id, _imageKey, i);
      }

      i += 1;
    }

    // remove old avatars
    for (const _avatar of avatarsToRemove) {
      // eslint-disable-next-line no-await-in-loop
      await supabaseInstance.from('avatars').delete().eq('id', _avatar.id);

      // eslint-disable-next-line no-await-in-loop
      await supabaseInstance.storage
        .from('avatars')
        .remove([_avatar.avatar_key.replace('avatars/', '')]);
    }
  }

  response.send({ status: 'success' });
};

export default handler;
