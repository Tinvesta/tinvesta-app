import { Children, ReactElement, useEffect, useState } from 'react';
import { hasOwnProperty } from 'ts-has-own-property';

import { MotionCardWrapper } from '..';
import S from './motion-cards-stack.styles';
import { ICardProps, IMotionCardsStackProps } from './motion-cards-stack.types';

const pop = (array: ReactElement<ICardProps>[]) =>
  array.filter((_, index) => index < array.length - 1);

export const MotionCardsStack = ({
  children,
  drag,
  isLoading,
  isProfilePreviewMode,
  onVote,
  ...restProps
}: IMotionCardsStackProps): JSX.Element => {
  const [stack, setStack] = useState(Children.toArray(children) as ReactElement<ICardProps>[]);

  const handleVote = (item: ReactElement<ICardProps>) => (vote: boolean) => {
    onVote(item.props.record.id, vote);

    setStack(pop(stack));
  };

  useEffect(() => {
    if (!isLoading) {
      setStack(Children.toArray(children) as ReactElement<ICardProps>[]);
    }
  }, [isLoading]);

  return (
    <S.StyledWrapper {...restProps}>
      {stack.map((item, index) => {
        const currentIndex = index + 2;
        const isTopCard = stack.length + 1 === currentIndex;
        const key = hasOwnProperty(item, 'key') ? (item.key as string) || index : index;

        return (
          <MotionCardWrapper
            key={key}
            drag={isTopCard && drag}
            isProfilePreviewMode={isTopCard && isProfilePreviewMode}
            zIndex={currentIndex}
            onVote={handleVote(item)}
          >
            {item}
          </MotionCardWrapper>
        );
      })}
    </S.StyledWrapper>
  );
};
