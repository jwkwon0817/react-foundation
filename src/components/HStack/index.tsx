import { Direction } from '~/lib/enums/stack-direction';
import Stack, { StackProps } from '../Stack';

type HStackProps = Omit<StackProps, 'direction'>;

export default function HStack(props: HStackProps) {
  return <Stack {...props} direction={Direction.HORIZONTAL} />;
}
