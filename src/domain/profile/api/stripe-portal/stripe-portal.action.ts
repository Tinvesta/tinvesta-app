import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const stripePortalAction = async () => nextAxiosInstance.get(EApiEndpoint.STRIPE_PORTAL);
