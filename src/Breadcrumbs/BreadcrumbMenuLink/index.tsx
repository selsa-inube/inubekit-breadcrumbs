import { Text } from "@inubekit/text";

import { IBreadcrumbsRoute } from "../props";
import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";

const BreadcrumbMenuLink = (props: IBreadcrumbsRoute) => {
  const { label, path, id, size = "large" } = props;

  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Text
          type="label"
          size={size}
          appearance="gray"
          padding="8px 12px"
          textAlign="start"
          weight="bold"
        >
          {label}
        </Text>
      </StyledContainerLink>
    </StyledBreadcrumbMenuLink>
  );
};

export { BreadcrumbMenuLink };
