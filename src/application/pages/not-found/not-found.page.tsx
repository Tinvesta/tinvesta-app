import { Button } from '@mui/material';

import { Error } from '@domain';

export const NotFoundPage = (): JSX.Element => (
  <Error code="404" message="Not found">
    <Button>Go to home page</Button>
  </Error>
);
