import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const healthCheckAction = () => nextAxiosInstance.get(EApiEndpoint.HEALTH_CHECK);
