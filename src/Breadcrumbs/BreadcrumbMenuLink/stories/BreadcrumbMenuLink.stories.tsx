import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";

import { IRoute } from "../../props";
import { props } from "../props";
import { BreadcrumbMenuLink } from "..";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbMenuLink",
  components: [BreadcrumbMenuLink],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IRoute) => <BreadcrumbMenuLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
};

const theme = structuredClone(presente);

const Themed = (args: IRoute) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export { Default, Themed };
export default story;
