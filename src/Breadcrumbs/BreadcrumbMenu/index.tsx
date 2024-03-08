import { Stack } from "@inubekit/stack";

import { BreadcrumbMenuLink } from "../BreadcrumbMenuLink";
import { StyledBreadcrumbMenu } from "./styles";

interface IBreadcrumbRoute {
  id: string;
  path: string;
  label: string;
}

interface IBreadcrumbMenu {
  routes: IBreadcrumbRoute[];
}

const BreadcrumbMenu = (props: IBreadcrumbMenu) => {
  const { routes } = props;

  return (
    <StyledBreadcrumbMenu>
      <Stack direction="column" justifyContent="space-between">
        {routes.map((route) => (
          <BreadcrumbMenuLink
            key={route.id}
            id={route.id}
            path={route.path}
            label={route.label}
          />
        ))}
      </Stack>
    </StyledBreadcrumbMenu>
  );
};

export { BreadcrumbMenu };
export type { IBreadcrumbMenu };
