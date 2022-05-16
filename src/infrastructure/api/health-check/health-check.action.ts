import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

// eslint-disable-next-line unicorn/consistent-function-scoping
export const getHealthCheckAction = () => nextAxiosInstance.get(EApiEndpoint.HEALTH_CHECK);
