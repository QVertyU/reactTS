import {StoryObj, Meta} from "@storybook/react";
import {TestComponent} from "./index.ts";

type Story = StoryObj<typeof TestComponent>;

const meta: Meta<typeof TestComponent> = {
    title: 'Component/TestComponent',
    component: TestComponent,
}

export default meta;

export const Basic: Story = {
    args: {
        children: 'asd'
    }
}

export const Red: Story = {
    args: {
        headingType: 'h5',
        className: 'text-red-600',
        children: 'asd'
    }
}