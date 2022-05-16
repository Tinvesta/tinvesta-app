import { useMutation } from 'react-query';

import { getHealthCheckAction } from '@infrastructure';

export const useHealthCheckActionQuery = () => useMutation(getHealthCheckAction);
