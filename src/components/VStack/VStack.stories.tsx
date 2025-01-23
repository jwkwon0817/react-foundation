import { type Meta, type StoryObj } from '@storybook/react';
import VStack from '.';

const meta: Meta = {
  title: 'Foundations/VStack',
};

type VStackStory = StoryObj<typeof VStack>;

export const Default: VStackStory = {
  render: (props) => (
    <VStack {...props}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </VStack>
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
