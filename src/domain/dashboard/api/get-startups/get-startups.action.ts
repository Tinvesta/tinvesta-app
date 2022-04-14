import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const getStartupsAction = async () => nextAxiosInstance.get(EApiEndpoint.GET_STARTUPS);
