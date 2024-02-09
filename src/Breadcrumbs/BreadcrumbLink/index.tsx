import { Text } from "@inubekit/text";

import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";
import { Appearance, Sizes } from "./props";

export interface IBreadcrumbLinkProps {
  label: string;
  path: string;
  id: string;
  size?: Sizes;
  appearance?: Appearance;
  onClick?: () => void;
}

export const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const {
    label,
    path,
    id,
    size = "large",
    appearance = "gray",
    onClick,
  } = props;

  return (
    <StyledContainerLink id={id} onClick={onClick}>
      <StyledBreadcrumbLink to={path}>
        <Text
          type="label"
          size={size}
          appearance={appearance}
          textAlign={"start"}
        >
          {label}
        </Text>
      </StyledBreadcrumbLink>
    </StyledContainerLink>
  );
};
