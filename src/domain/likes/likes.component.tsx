import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

// TODO - refactor later
import { MatchModalContent } from '@domain/discover/molecules';

import { Empty, Loading, useModal } from '@ui';

import { isStartupProfile, useDeviceDetect, useTranslation, useUser } from '@utils';

import { likeProfileAction } from '@infrastructure';

import { ERoutes } from '@enums';

import { IPair, IProfileDetails } from '@interfaces';

import { likesAction } from './api';
import { translationStrings } from './likes.defaults';
import S from './likes.styles';
import { ILikesProps } from './likes.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

export const Likes = ({ clientTypeId, ...restProps }: ILikesProps): JSX.Element => {
  const { user } = useUser();
  const {
    hide: hideProfileDetailsPreviewModalContent,
    Modal: ModalProfileDetailsPreviewModalContent,
    show: showProfileDetailsPreviewModalContent,
  } = useModal({
    withCloseIcon: false,
    withPadding: false,
    align: 'right',
    withBorderRadius: false,
  });
  const {
    hide: hideMatchModalContent,
    Modal: ModalMatchModalContent,
    show: showMatchModalContent,
  } = useModal({ withCloseIcon: false });

  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);
  const { data, isLoading, mutate } = useMutation(likesAction);

  const [selectedProfile, setSelectedProfile] = useState<IPair>();
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const { mutateAsync: mutateAsyncLikeProfileAction } = useMutation(likeProfileAction);

  const isStartup = isStartupProfile(clientTypeId);

  useEffect(() => {
    // TODO - fix after likes done
    if (!user?.is_subscribed) {
      mutate();
    }
  }, [user?.is_subscribed]);

  useEffect(() => {
    if (selectedProfile) {
      showProfileDetailsPreviewModalContent();
    }
  }, [selectedProfile]);

  useEffect(() => {
    if (likedProfileDetails) {
      hideProfileDetailsPreviewModalContent();
      showMatchModalContent();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  const onRecordClick = (record: IPair) => () => setSelectedProfile(record);

  const onProfileDetailsPreviewModalContentCloseIconClick = () => {
    hideProfileDetailsPreviewModalContent();
    setSelectedProfile(undefined);
  };

  const onModalMatchModalContentClose = () => {
    mutate();

    hideMatchModalContent();
    setLikedProfileDetails(undefined);
  };

  const onVote = (profileId: string, vote: boolean) => {
    mutateAsyncLikeProfileAction({ profileId, vote }).then(({ data }) => {
      if (!loggedProfileDetails && data.loggedProfileDetails) {
        setLoggedProfileDetails(data.loggedProfileDetails);
      }

      setLikedProfileDetails(data.likedProfileDetails);
    });
  };

  // TODO - fix after likes done
  if (user?.is_subscribed) {
    return (
      <Empty
        actionButtonProps={{
          linkTo: ERoutes.DASHBOARD_PROFILE,
          label: translations.componentDashboardLikesNoSubscriptionActionButton,
        }}
        imageSrc="/images/undraw-stripe-payments.svg"
        label={translations.componentDashboardLikesNoSubscriptionLabel}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <Empty
        actionButtonProps={{
          label: isStartup
            ? translations.componentDashboardLikesEmptyActionButtonInvestor
            : translations.componentDashboardLikesEmptyActionButtonStartup,
          linkTo: ERoutes.DASHBOARD_DISCOVER,
        }}
        label={translations.componentDashboardLikesEmptyLabel}
      />
    );
  }

  return (
    <S.StyledWrapper>
      <ModalProfileDetailsPreviewModalContent>
        <ProfileDetailsPreviewModalContent
          {...restProps}
          selectedProfile={selectedProfile}
          onCloseIconClick={onProfileDetailsPreviewModalContentCloseIconClick}
          onVote={onVote}
        />
      </ModalProfileDetailsPreviewModalContent>
      <ModalMatchModalContent onClose={onModalMatchModalContentClose}>
        <MatchModalContent
          likedProfileDetails={likedProfileDetails}
          loggedProfileDetails={loggedProfileDetails}
          onClose={onModalMatchModalContentClose}
        />
      </ModalMatchModalContent>
      {data?.data.map((_record) => (
        <S.StyledImageWrapper key={_record.avatars[0]} onClick={onRecordClick(_record)}>
          <Image
            alt={translations.commonDefaultImageAlt}
            height={600}
            layout="responsive"
            src={_record.avatars[0]}
            width={400}
          />
          <S.StyledTypography fontWeight={900} variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}>
            {_record.companyName}
          </S.StyledTypography>
        </S.StyledImageWrapper>
      ))}
    </S.StyledWrapper>
  );
};
