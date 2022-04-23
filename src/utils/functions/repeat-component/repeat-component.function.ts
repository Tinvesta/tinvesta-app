import { Children, ReactNode } from 'react';

export const repeatComponent = (
  functionReturnsComponent: (index: number) => ReactNode,
  count: number,
) =>
  Children.toArray(
    Array.from({ length: Math.abs(count) })
      .fill(null)
      .map((_, index) => functionReturnsComponent(index)),
  );
