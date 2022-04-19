import { useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import S from './motion-card-wrapper.styles';
import { IMotionCardWrapperProps } from './motion-card-wrapper.types';

export const MotionCardWrapper = ({
  children,
  id,
  onVote,
  ...restProps
}: IMotionCardWrapperProps): JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [velocity, setVelocity] = useState(0);
  const [constrained, setConstrained] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>();

  const flyAwayDistance = (direction: 'left' | 'right') => {
    if (!cardRef.current) {
      return 0;
    }

    // @ts-expect-error
    const parentWidth = cardRef.current.parentNode.getBoundingClientRect().width;
    const childWidth = cardRef.current.getBoundingClientRect().width;

    return direction === 'left'
      ? -parentWidth / 2 - childWidth / 2
      : parentWidth / 2 + childWidth / 2;
  };

  const getVote = (childNode: HTMLDivElement, parentNode: ParentNode | null) => {
    if (!parentNode) {
      return undefined;
    }

    const childRect = childNode.getBoundingClientRect();
    // @ts-expect-error
    const parentRect = parentNode.getBoundingClientRect();

    const result =
      parentRect.left >= childRect.right
        ? false
        : (parentRect.right <= childRect.left
        ? true
        : undefined);

    return result;
  };

  const getDirection = () => (velocity >= 1 ? 'right' : (velocity <= -1 ? 'left' : undefined));

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  const flyAway = (min: number) => {
    if (direction && Math.abs(velocity) > min) {
      setConstrained(false);

      controls.start({
        x: flyAwayDistance(direction),
      });
    }
  };

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      const childNode = cardRef.current;

      if (!childNode) {
        return;
      }

      const { parentNode } = childNode;
      const result = getVote(childNode, parentNode);

      if (result !== undefined) {
        onVote(result);
      }
    });

    return () => unsubscribeX();
  });

  return (
    <S.StyledWrapper
      ref={cardRef}
      animate={controls}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      style={{ x }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(500)}
      {...restProps}
    >
      {children}
    </S.StyledWrapper>
  );
};
