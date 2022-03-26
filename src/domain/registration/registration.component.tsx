import { useState } from 'react';

import { LocationAutocomplete } from './atoms';
import S from './registration.styles';

export const Registration = (): JSX.Element => {
  const [location, setLocation] = useState('');

  return (
    <S.StyledWrapper>
      Registration
      <LocationAutocomplete
        inputValue={location}
        onInputChange={(_, newValue) => setLocation(newValue)}
      />
    </S.StyledWrapper>
  );
};
