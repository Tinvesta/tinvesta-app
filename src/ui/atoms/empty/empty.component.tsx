import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import { CenterBlockLayout } from '@ui';

import S from './empty.styles';
import { IEmptyProps } from './empty.types';

const EmptyComponent = ({ actionButtonProps, label }: IEmptyProps): JSX.Element => (
  <CenterBlockLayout>
    <S.StyledWrapper>
      <Image priority alt="Tinvesta" height={250} src="/images/undraw-empty.svg" width={250} />
      {label && <S.StyledTypography variant="h5">{label}</S.StyledTypography>}
      {actionButtonProps && (
        <Link passHref href={actionButtonProps.linkTo}>
          <S.StyledActionButton variant="contained">{actionButtonProps.label}</S.StyledActionButton>
        </Link>
      )}
    </S.StyledWrapper>
  </CenterBlockLayout>
);

export const Empty = memo(EmptyComponent);
