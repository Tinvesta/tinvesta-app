import { createContext } from 'react';

import { IConfirmationModalContextValue } from './confirmation-modal.types';

export const ConfirmationModalContext = createContext<IConfirmationModalContextValue | null>(null);
