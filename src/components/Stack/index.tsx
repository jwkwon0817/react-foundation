import * as s from './style.css';

import cn from 'classnames';
import { Direction } from '~/lib/enums/stack-direction';
import { ChildrenProps } from '~/lib/types/children-props';
import { Padding } from '~/lib/types/padding';
import { getPaddingString } from '~/lib/utils/padding';

export interface StackProps {
  direction: Direction;
  spacing?: number;
  children: ChildrenProps;
  padding?: Padding;
  className?: string;
}

export default function Stack(props: StackProps) {
  const { direction, spacing = 0, children, padding = 0, className } = props;

  const baseClassNames = cn(s.base, s[direction], className);

  return (
    <div
      className={baseClassNames}
      style={{
        gap: spacing,
        padding: getPaddingString(padding),
      }}>
      {children}
    </div>
  );
}
