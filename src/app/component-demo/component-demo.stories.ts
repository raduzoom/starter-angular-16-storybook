import {ComponentDemoComponent} from "./component-demo.component";
import {Meta, Story} from "@storybook/angular";

export default {
  title: 'Demo Component',
  component: ComponentDemoComponent
} as Meta;

export const Primary: Story = () => ({
  props: {who: 'primary'},
})

export const Secondary: Story = () => ({
  props: {who: 'secondary'},
})
