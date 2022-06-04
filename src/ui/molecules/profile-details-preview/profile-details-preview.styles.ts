import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div<{ swiperPaginationBullets: number }>`
  width: 100%;
  max-width: 100%;
  position: relative;
  pointer-events: all;
  height: calc(100% - 100px);
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${respondToMax.mobile`
    height: calc(100% - 90px);
  `}

  ${respondToMax.xmobile`
    height: calc(100% - 80px);
  `}

  .swiper {
    z-index: 0;

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.palette.secondary.main};

      &::after {
        font-size: 40px;

        ${respondToMax.mobile`
          font-size: 36px;
        `}

        ${respondToMax.xmobile`
          font-size: 30px;
        `}
      }
    }
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 650px;

  ${respondToMax.xmobile`
    height: 450px;
  `}
`;

const StyledContentWrapper = styled.div`
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => respondToMax.mobile`
    padding: ${theme.spacing(4)};
  `}

  ${({ theme }) => respondToMax.xmobile`
    padding: ${theme.spacing(3)};
  `}

  > div:last-child {
    padding-bottom: 0;
  }
`;

const StyledButtonEllipsis = styled.span`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
  StyledButtonEllipsis,
  StyledContentWrapper,
};

export default S;
