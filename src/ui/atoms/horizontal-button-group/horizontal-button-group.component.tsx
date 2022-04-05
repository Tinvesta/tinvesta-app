import { Button, ButtonGroup } from '@mui/material';
import { MouseEvent, memo } from 'react';

import { IHorizontalButtonGroupProps } from './horizontal-button-group.types';

const HorizontalButtonGroupComponent = ({
  activeItem,
  className,
  onOptionClick,
  options,
  ...restProps
}: IHorizontalButtonGroupProps): JSX.Element => {
  const handleOptionClick = (value: string | number) => (event: MouseEvent<HTMLButtonElement>) =>
    onOptionClick && onOptionClick(value, event);

  return (
    <ButtonGroup {...restProps} orientation="horizontal">
      {options.map((_option) => {
        const isActive = _option.value === activeItem;

        return (
          <Button
            key={_option.key || _option.value}
            variant={isActive ? 'contained' : 'outlined'}
            onClick={handleOptionClick(_option.value)}
          >
            {_option.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export const HorizontalButtonGroup = memo(HorizontalButtonGroupComponent);
