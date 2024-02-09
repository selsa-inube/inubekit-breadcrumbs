import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { IRoute } from "../props";
import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";

export const BreadcrumbMenuLink = (props: IRoute) => {
  const { label, path, id, size = "large" } = props;

  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Stack alignItems="center">
          <Text
            type="label"
            size={size}
            appearance="gray"
            padding="8px 12px"
            textAlign={"center"}
          >
            {label}
          </Text>
        </Stack>
      </StyledContainerLink>
    </StyledBreadcrumbMenuLink>
  );
};
