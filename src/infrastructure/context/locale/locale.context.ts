import { createContext } from 'react';

import { ILocaleContextValue } from './locale.types';

export const LocaleContext = createContext<ILocaleContextValue | null>(null);
