import { LocaleProvider } from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children }: IAppProviderProps): JSX.Element => (
  <LocaleProvider>{children}</LocaleProvider>
);
