import { CenterBlockLayout, Loader } from '@ui';

import { useDeviceDetect } from '@utils';

import { ILoadingProps } from './loading.types';

export const Loading = ({ children }: ILoadingProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const size = deviceData.isSmallerThanXS ? 'small' : 'medium';

  return (
    <CenterBlockLayout>
      {children}
      <Loader size={size} />
    </CenterBlockLayout>
  );
};
