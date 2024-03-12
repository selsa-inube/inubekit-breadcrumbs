import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { props } from "../props";
import { BreadcrumbLink, IBreadcrumbLink } from "..";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbLink",
  components: [BreadcrumbLink],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbLink) => <BreadcrumbLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
  onClick: action("onClick"),
};

export { Default };
export default story;
