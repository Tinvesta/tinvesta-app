import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Loading, useModal } from '@ui';

import { likeProfileAction } from '@infrastructure';

import { IProfileDetails } from '@interfaces';

import { discoverRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import { IDiscoverProps } from './discover.types';
import { Card, MatchModalContent } from './molecules';

export const Discover = (props: IDiscoverProps): JSX.Element => {
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
        <MatchModalContent
          likedProfileDetails={likedProfileDetails}
          loggedProfileDetails={loggedProfileDetails}
          onClose={onModalClose}
        />
      </Modal>
      <CenterBlockLayout>
        <MotionCardsStack onVote={onVote}>
          {data?.data.map((_record) => <Card key={_record.id} record={_record} {...props} />) || []}
        </MotionCardsStack>
      </CenterBlockLayout>
    </>
  );
};
