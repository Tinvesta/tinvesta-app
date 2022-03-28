import S from './toast-provider.styles';
import { IToastProviderProps } from './toast-provider.types';

import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider = ({ children }: IToastProviderProps): JSX.Element => (
  <>
    {children}
    <S.StyledToastContainer
      closeOnClick
      newestOnTop
      autoClose={5000}
      closeButton={false}
      draggable={false}
      limit={5}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
    />
  </>
);
