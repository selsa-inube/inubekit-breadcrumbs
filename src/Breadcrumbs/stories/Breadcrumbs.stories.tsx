import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";

import { props } from "../props";
import { Breadcrumbs, IBreadcrumbs } from "..";

const story = {
  title: "navigation/Breadcrumbs",
  components: [Breadcrumbs],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = (args: IBreadcrumbs) => <Breadcrumbs {...args} />;
Default.args = {
  crumbs: [
    {
      path: "/home",
      label: "Inicio",
      id: "/home",
      isActive: false,
    },
    {
      path: "/home/users",
      label: "Usuarios",
      id: "/home/users",
      isActive: false,
    },
    {
      path: "/home/users/invitation",
      label: "Invitación",
      id: "/home/users/invitation",
      isActive: false,
    },
    {
      path: "/home/users/invitation/edition",
      label: "Edición",
      id: "/home/users/invitation/edition",
      isActive: false,
    },
    {
      path: "/home/users/invitation/branches",
      label: "Ramas",
      id: "/home/users/invitation/branches",
      isActive: false,
    },
    {
      path: "/home/users/invitation/Branches/city",
      label: "Ciudad",
      id: "/home/users/invitation/Branches/city",
      isActive: true,
    },
  ],
};

const theme = structuredClone(presente);

export const Themed = (args: IBreadcrumbs) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
