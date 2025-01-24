import { Direction } from '@/lib/enums/stack-direction';
import Stack, { StackProps } from '../Stack';

type VStackProps = Omit<StackProps, 'direction'>;

export default function VStack(props: VStackProps) {
  const { children, ...restProps } = props;

  return (
    <Stack {...restProps} direction={Direction.VERTICAL}>
      {children}
    </Stack>
  );
}
