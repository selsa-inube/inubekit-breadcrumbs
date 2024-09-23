import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ITextAppearance, Text } from "@inubekit/text";
import { BreadcrumbMenu } from "../BreadcrumbMenu";

import { IBreadcrumbsRoutes } from "../props";

import { IBreadcrumbEllipsisSize } from "./props";
import {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
} from "./styles";
import { tokens } from "../Tokens/tokens";

interface IBreadcrumbEllipsis extends IBreadcrumbsRoutes {
  size?: IBreadcrumbEllipsisSize;
}

const BreadcrumbEllipsis = (props: IBreadcrumbEllipsis) => {
  const { size = "large", routes } = props;
  const [showMenu, setShowMenu] = useState(false);
  const theme = useContext(ThemeContext) as { breadcrumbs: typeof tokens };
  const containerRef = useRef<HTMLDivElement | null>(null);

  const closeEllipsisMenu = (event: globalThis.MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeEllipsisMenu);

    return () => {
      document.removeEventListener("click", closeEllipsisMenu);
    };
  }, [containerRef]);

  const toggleEllipsisMenu = () => {
    setShowMenu(!showMenu);
  };

  const textAppearance = (theme?.breadcrumbs?.content?.active ||
    tokens.content.active) as ITextAppearance;

  return (
    <StyledRelativeContainer ref={containerRef} onClick={toggleEllipsisMenu}>
      <StyledContainerEllipsis>
        <Text
          type="label"
          size={size}
          appearance={textAppearance}
          textAlign="start"
          weight="bold"
        >
          <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
        </Text>
      </StyledContainerEllipsis>
      {showMenu && <BreadcrumbMenu routes={routes} />}
    </StyledRelativeContainer>
  );
};

export { BreadcrumbEllipsis };
export type { IBreadcrumbEllipsis };
