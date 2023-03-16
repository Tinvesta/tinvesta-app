import useOnlineState from 'beautiful-react-hooks/useOnlineState';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useTranslation } from '@utils';

import { translationStrings } from './offline-provider.defaults';
import { IOfflineProviderProps } from './offline-provider.types';

export const OfflineProvider = ({ children }: IOfflineProviderProps): JSX.Element => {
  const isOnline = useOnlineState();
  const prevIsOnline = usePreviousValue(isOnline);

  const translations = useTranslation(translationStrings);

  useEffect(() => {
    if (prevIsOnline === undefined || isOnline === prevIsOnline) {
      return;
    }

    if (isOnline) {
      toast.success(translations.commonOnlineNotification);
    } else {
      toast.error(translations.commonOfflineNotification);
    }
  }, [isOnline, prevIsOnline]);

  return <>{children}</>;
};
