import { CenterBlockLayout, Loader } from '@ui';

import { ILoadingProps } from './loading.types';

export const Loading = ({ children }: ILoadingProps): JSX.Element => (
  <CenterBlockLayout>
    {children}
    <Loader size="small" />
  </CenterBlockLayout>
);
