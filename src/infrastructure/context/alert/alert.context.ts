import { createContext } from 'react';

import { IAlertContextValue } from './alert.types';

export const AlertContext = createContext<IAlertContextValue | null>(null);
