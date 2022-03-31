import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import {
  LocationAutocompleteWithController,
  SelectWithController,
  TextFieldWithController,
  UploadImageWithPreviewWithController,
} from '@ui';

import S from './registration.styles';

export const Registration = (): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      selectedValue: '',
      description: '',
      location: '',
      representativeImage: '',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  if (process.env.NEXT_PUBLIC_ENABLE_HOME_PAGE !== 'true') {
    return <S.StyledWrapper>Registration</S.StyledWrapper>;
  }

  return (
    <S.StyledWrapper>
      Registration
      <form
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          margin: '0 auto',
        }}
        onSubmit={onSubmit}
      >
        <UploadImageWithPreviewWithController
          controllerProps={{
            control,
            name: 'representativeImage',
            rules: {
              required: {
                value: true,
                message: 'Test error message for upload image component',
              },
            },
          }}
        />
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'name',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            autoComplete: 'general.phoneNumber',
            label: 'Name',
          }}
        />
        <SelectWithController
          controllerProps={{
            control,
            name: 'selectedValue',
            rules: {
              required: true,
            },
          }}
          selectProps={{
            options: [
              {
                label: 'Test 1',
                value: 'test-1',
              },
              {
                label: 'Test 2',
                value: 'test-2',
              },
            ],
            labelId: 'customers-dropdown-label',
            label: 'Test Label',
          }}
        />
        <LocationAutocompleteWithController
          controllerProps={{
            control,
            name: 'location',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            label: 'Location',
          }}
        />
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'description',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            autoComplete: 'general.phoneNumber',
            label: 'Description',
          }}
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </S.StyledWrapper>
  );
};
