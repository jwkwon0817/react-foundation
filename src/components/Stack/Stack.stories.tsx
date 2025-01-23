import { type Meta, type StoryObj } from '@storybook/react';
import { Direction } from '~/lib/enums/stack-direction';
import Stack from '.';

const meta: Meta = {
  title: 'Foundations/Stack',
};

type StackStory = StoryObj<typeof Stack>;

export const Default: StackStory = {
  render: (props) => (
    <Stack {...props}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Stack>
  ),
  argTypes: {
    direction: {
      options: Object.values(Direction),
      control: { type: 'radio' },
    },
    padding: {
      control: { type: 'number' },
    },
    spacing: {
      control: { type: 'number' },
    },
  },
  args: {
    direction: Direction.VERTICAL,
    padding: 0,
    spacing: 0,
  },
};

export default meta;
