import { BrowserRouter } from "react-router-dom";

import { IBreadcrumbsRoutes } from "../../props";
import { props } from "../props";
import { BreadcrumbMenu } from "..";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbMenu",
  components: [BreadcrumbMenu],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbsRoutes) => (
  <div style={{ height: "100px", transform: "translateZ(0)" }}>
    <BreadcrumbMenu {...args} />
  </div>
);
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
};

export { Default };
export default story;
