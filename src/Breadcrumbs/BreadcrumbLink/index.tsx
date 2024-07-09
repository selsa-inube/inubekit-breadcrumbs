import { ITextAppearance, Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import { IBreadcrumbLinkSize } from "./props";
import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface IBreadcrumbLink {
  label: string;
  path: string;
  id: string;
  size?: IBreadcrumbLinkSize;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const BreadcrumbLink = (props: IBreadcrumbLink) => {
  const { label, path, id, size = "large", active = false, onClick } = props;
  const theme: typeof inube = useContext(ThemeContext);

  const activeTextAppearance = (theme?.breadcrumbs?.content?.active ||
    inube.breadcrumbs.content.active) as ITextAppearance;

  const interceptOnClick = (e: React.MouseEvent) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <StyledContainerLink id={id} onClick={interceptOnClick}>
      <StyledBreadcrumbLink to={path} $size={size} $active={active}>
        <Text
          type="label"
          size={size}
          appearance={active ? activeTextAppearance : "gray"}
          textAlign="start"
          weight="bold"
        >
          {label}
        </Text>
      </StyledBreadcrumbLink>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
export type { IBreadcrumbLink };
