import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";
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

const theme = structuredClone(presente);

const Themed = (args: IBreadcrumbLink) => (
  <ThemeProvider theme={theme}>
    <BreadcrumbLink {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

export { Default, Themed };
export default story;
