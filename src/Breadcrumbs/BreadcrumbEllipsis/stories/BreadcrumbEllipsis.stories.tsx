import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";

import { props } from "../props";
import { BreadcrumbEllipsis, IBreadcrumbEllipsis } from "../index";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbEllipsis",
  components: [BreadcrumbEllipsis],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbEllipsis) => <BreadcrumbEllipsis {...args} />;
Default.args = {
  routes: [
    {
      label: "Privileges",
      path: "/privileges",
      id: "privileges",
    },
    { label: "Users", path: "/users", id: "users" },
    {
      label: "User edition",
      path: "users/edition",
      id: "usersEdition",
    },
  ],
  size: "large",
};

const theme = structuredClone(presente);

const Themed = (args: IBreadcrumbEllipsis) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export { Default, Themed };
export default story;
