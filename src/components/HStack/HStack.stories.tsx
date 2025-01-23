import { type Meta, type StoryObj } from '@storybook/react';
import HStack from '.';

const meta: Meta = {
  title: 'Foundations/HStack',
};

type HStackStory = StoryObj<typeof HStack>;

export const Default: HStackStory = {
  render: (props) => (
    <HStack {...props}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </HStack>
  ),
  argTypes: {
    padding: {
      control: { type: 'number' },
    },
    spacing: {
      control: { type: 'number' },
    },
  },
  args: {
    padding: 0,
    spacing: 0,
  },
};

export default meta;
