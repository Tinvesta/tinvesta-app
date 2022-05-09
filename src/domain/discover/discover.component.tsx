import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Loading, useModal } from '@ui';

import { IProfileDetails } from '@interfaces';

import { discoverRecordsAction, likeProfileAction } from './api';
import { MotionCardsStack } from './atoms';
import { Card, MatchModalContent } from './molecules';

export const Discover = (): JSX.Element => {
  const { mutateAsync } = useMutation(likeProfileAction);
  const { data, isLoading, mutate } = useMutation(discoverRecordsAction);

  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const { hide, Modal, show } = useModal({ withCloseIcon: false });

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (likedProfileDetails) {
      show();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  if (isLoading) {
    return <Loading />;
  }

  const onVote = (profileId: string, vote: boolean) => {
    console.log(data?.data.find((_profile) => _profile.id === profileId));

    mutateAsync({ profileId, vote }).then(({ data }) => {
      if (!loggedProfileDetails && data.loggedProfileDetails) {
        setLoggedProfileDetails(data.loggedProfileDetails);
      }

      setLikedProfileDetails(data.likedProfileDetails);

      // TODO - remove later after testing
      mutate();
    });
  };

  const onModalClose = () => {
    hide();
    setLikedProfileDetails(undefined);
  };

  return (
    <>
      <Modal onClose={onModalClose}>
        <MatchModalContent onClose={onModalClose} />
      </Modal>
      <CenterBlockLayout>
        <MotionCardsStack onVote={onVote}>
          {data?.data.map((_record) => <Card key={_record.id} record={_record} />) || []}
        </MotionCardsStack>
      </CenterBlockLayout>
    </>
  );
};
