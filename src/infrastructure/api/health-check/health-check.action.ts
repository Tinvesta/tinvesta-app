import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const getHealthCheckAction = () => nextAxiosInstance.get(EApiEndpoint.HEALTH_CHECK);
