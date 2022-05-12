import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div<{ swiperPaginationBullets: number }>`
  width: 100%;
  overflow: auto;
  overflow-y: scroll;
  max-width: 100%;
  pointer-events: all;
  position: relative;
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
        background-color: ${({ theme }) => theme.palette.primary.dark};
        width: calc(100% / ${({ swiperPaginationBullets }) => swiperPaginationBullets});

        &-active {
          background-color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 650px;
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
};

export default S;
