import { Children, ReactElement, useState } from 'react';

import { hasOwnProperty } from '@utils';

import { MotionCardWrapper } from '..';
import S from './motion-cards-stack.styles';
import { ICardProps, IMotionCardsStackProps } from './motion-cards-stack.types';

const pop = (array: ReactElement<ICardProps>[]) =>
  array.filter((_, index) => index < array.length - 1);

export const MotionCardsStack = ({
  children,
  drag,
  onVote,
  ...restProps
}: IMotionCardsStackProps): JSX.Element => {
  const [stack, setStack] = useState(Children.toArray(children) as ReactElement<ICardProps>[]);

  const handleVote = (item: ReactElement<ICardProps>) => (vote: boolean) => {
    onVote(item.props.record.id, vote);

    setStack(pop(stack));
  };

  return (
    <S.StyledWrapper {...restProps}>
      {stack.map((item, index) => {
        const key = hasOwnProperty(item, 'key') ? (item.key as string) || index : index;

        return (
          <MotionCardWrapper key={key} drag={drag} zIndex={index + 2} onVote={handleVote(item)}>
            {item}
          </MotionCardWrapper>
        );
      })}
    </S.StyledWrapper>
  );
};
