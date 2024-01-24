import {StoryObj, Meta} from "@storybook/react";
import {Loader} from "./index.ts";

type Story = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
    title: 'Component/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

        fill: {control: 'color'},
    }
}

export default meta;

export const Basic: Story = {
    args: {
        fill: 'blue',
    },
}

export const Red: Story = {
    args: {
        fill: 'red',
    },
}