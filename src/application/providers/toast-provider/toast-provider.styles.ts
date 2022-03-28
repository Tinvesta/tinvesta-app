import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

import { color } from '@infrastructure/styles/variables';

const StyledToastContainer = styled(ToastContainer)`
  width: 400px;
  font-family: Montserrat, sans-serif;

  .Toastify__toast--error {
    background-color: ${color.gray[200]};

    .Toastify__progress-bar {
      background-color: ${color.red[700]};
    }

    .Toastify__toast-icon > svg {
      fill: ${color.red[700]};
    }
  }

  .Toastify__toast--info {
    background-color: ${color.gray[200]};

    .Toastify__progress-bar {
      background-color: ${color.blue[900]};
    }

    .Toastify__toast-icon > svg {
      fill: ${color.blue[900]};
    }
  }

  .Toastify__toast--warning {
    background-color: ${color.gray[200]};

    .Toastify__progress-bar {
      background-color: ${color.yellow[700]};
    }

    .Toastify__toast-icon > svg {
      fill: ${color.yellow[700]};
    }
  }

  .Toastify__toast--success {
    background-color: ${color.gray[200]};

    .Toastify__progress-bar {
      background-color: ${color.green[600]};
    }

    .Toastify__toast-icon > svg {
      fill: ${color.green[600]};
    }
  }
`;

const S = {
  StyledToastContainer,
};

export default S;
