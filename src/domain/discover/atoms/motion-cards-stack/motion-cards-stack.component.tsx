import { Children, ReactChild, ReactFragment, ReactPortal, useState } from 'react';

import { hasOwnProperty } from '@utils';

import { MotionCardWrapper } from '..';
import S from './motion-cards-stack.styles';
import { IMotionCardsStackProps } from './motion-cards-stack.types';

// return new array with last item removed
const pop = (array: (ReactChild | ReactFragment | ReactPortal)[]) =>
  array.filter((_, index) => index < array.length - 1);

export const MotionCardsStack = ({
  children,
  ...restProps
}: IMotionCardsStackProps): JSX.Element => {
  const [stack, setStack] = useState(Children.toArray(children));

  const handleVote = () => {
    // update the stack
    const newStack = pop(stack);

    setStack(newStack);
  };

  return (
    <S.StyledWrapper {...restProps}>
      {stack.map((item, index) => {
        const isTop = index === stack.length - 1;
        const key = hasOwnProperty(item, 'key') ? (item.key as string) || index : index;

        return (
          <MotionCardWrapper key={key} drag={isTop} onVote={handleVote}>
            {item}
          </MotionCardWrapper>
        );
      })}
    </S.StyledWrapper>
  );
};
