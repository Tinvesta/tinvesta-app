import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const getRecordsAction = async () => nextAxiosInstance.get(EApiEndpoint.GET_RECORDS);
