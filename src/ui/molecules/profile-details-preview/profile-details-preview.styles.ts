import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div<{ swiperPaginationBullets: number }>`
  width: 100%;
  overflow: auto;
  max-width: 100%;
  overflow-y: scroll;
  position: relative;
  pointer-events: all;
  height: calc(100% - 100px);

  ${respondToMax.mobile`
    height: calc(100% - 90px);
  `}

  ${respondToMax.xmobile`
    height: calc(100% - 80px);
  `}

  .swiper {
    z-index: 0;

    .swiper-pagination {
      bottom: 0;
      display: flex;

      &-bullet {
        margin: 0;
        opacity: 1;
        border-radius: 0;
        background-color: ${({ theme }) => theme.palette.primary.main};
        width: calc(100% / ${({ swiperPaginationBullets }) => swiperPaginationBullets});

        &-active {
          background-color: ${({ theme }) => theme.palette.primary.light};
        }
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

const S = {
  StyledWrapper,
  StyledImageWrapper,
  StyledContentWrapper,
};

export default S;
