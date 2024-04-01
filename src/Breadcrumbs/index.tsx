import { useMediaQuery } from "@inubekit/hooks";

import { BreadcrumbLink } from "./BreadcrumbLink";
import { BreadcrumbEllipsis } from "./BreadcrumbEllipsis";
import { IBreadcrumbsRoute } from "./props";
import { StyledBreadcrumbs } from "./styles";

interface IBreadcrumbs {
  crumbs: IBreadcrumbsRoute[];
}

function capitalizeString(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Breadcrumbs = (props: IBreadcrumbs) => {
  const { crumbs } = props;

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const maxCrumbs = isDesktop ? 5 : 3;

  if (crumbs.length > maxCrumbs) {
    const lastCrumb = crumbs[crumbs.length - 1];
    return (
      <StyledBreadcrumbs>
        <BreadcrumbLink
          key={crumbs[0].path}
          path={crumbs[0].path}
          id={crumbs[0].path}
          label={capitalizeString(crumbs[0].label)}
        />
        <BreadcrumbEllipsis
          key={`breadcrumb-ellipsis`}
          size={isDesktop ? "large" : "small"}
          routes={crumbs.slice(1, -1)}
        />
        <BreadcrumbLink
          key={lastCrumb.path}
          path={lastCrumb.path}
          id={lastCrumb.path}
          label={capitalizeString(lastCrumb.label)}
          active
        />
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs>
      {crumbs.map(({ path, label }, index) => (
        <BreadcrumbLink
          key={path}
          path={path}
          id={path}
          label={capitalizeString(label)}
          active={index === crumbs.length - 1}
        />
      ))}
    </StyledBreadcrumbs>
  );
};

export { Breadcrumbs };
export type { IBreadcrumbs };
