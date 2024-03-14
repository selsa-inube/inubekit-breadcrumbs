import { Text } from "@inubekit/text";

import { IRoute } from "../props";
import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";

const BreadcrumbMenuLink = (props: IRoute) => {
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
        >
          {label}
        </Text>
      </StyledContainerLink>
    </StyledBreadcrumbMenuLink>
  );
};

export { BreadcrumbMenuLink };
