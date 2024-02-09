import { BrowserRouter } from "react-router-dom";
import { presente } from "@inubekit/foundations";
import { ThemeProvider } from "styled-components";
import { props } from "../props";
import { IRoute } from "../../props";
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

export const Default = (args: IRoute) => <BreadcrumbMenuLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
};

const theme = structuredClone(presente);

export const Themed = (args: IRoute) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
