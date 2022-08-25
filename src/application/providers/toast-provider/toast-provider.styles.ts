import styled from '@emotion/styled';
import { blue, green, red, yellow } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';

import { darkTheme, respondToMax } from '@infrastructure';
import { color } from '@infrastructure/styles/variables';

const StyledToastContainer = styled(ToastContainer)`
  width: 400px;
  font-family: Montserrat, sans-serif;

  .Toastify__toast {
    border-radius: ${darkTheme.shape.borderRadius}px;

    &-icon {
      width: 24px;
      margin-top: 2px;

      ${respondToMax.sm`
        width: 22px;
        margin-top: 3px;
      `}

      ${respondToMax.xs`
        width: 20px;
        margin-top: 2px;
      `}
    }

    &-body {
      align-items: flex-start;
    }

    &-body > :last-child {
      -webkit-box-orient: vertical;
      display: box;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      margin: 0;
      overflow: hidden;
      padding: 0;
      word-break: break-word;
      font-size: 1.1428571428571428rem;
      font-weight: 700;
      color: ${color.gray[800]};

      ${respondToMax.xs`
        font-size: 1rem;
      `};
    }

    &--error {
      background-color: ${color.gray[200]};

      .Toastify__progress-bar {
        background-color: ${red[700]};
      }

      .Toastify__toast-icon > svg {
        fill: ${red[700]};
      }
    }

    &--info {
      background-color: ${color.gray[200]};

      .Toastify__progress-bar {
        background-color: ${blue[700]};
      }

      .Toastify__toast-icon > svg {
        fill: ${blue[700]};
      }
    }

    &--warning {
      background-color: ${color.gray[200]};

      .Toastify__progress-bar {
        background-color: ${yellow[700]};
      }

      .Toastify__toast-icon > svg {
        fill: ${yellow[700]};
      }
    }

    &--success {
      background-color: ${color.gray[200]};

      .Toastify__progress-bar {
        background-color: ${green[700]};
      }

      .Toastify__toast-icon > svg {
        fill: ${green[700]};
      }
    }

    ${respondToMax.xs`
      border-radius: 0;
    `}
  }

  ${respondToMax.sm`
    width: 300px;
  `}

  ${respondToMax.xs`
    width: 100%;
  `}
`;

const S = {
  StyledToastContainer,
};

export default S;
