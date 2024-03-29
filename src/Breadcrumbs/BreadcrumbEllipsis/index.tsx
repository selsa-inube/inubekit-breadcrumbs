import { useState, useEffect, useRef } from "react";

import { Text } from "@inubekit/text";
import { BreadcrumbMenu } from "../BreadcrumbMenu";

import { IBreadcrumbsRoutes } from "../props";

import { Size } from "./props";
import {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
} from "./styles";

interface IBreadcrumbEllipsis extends IBreadcrumbsRoutes {
  size?: Size;
}

const BreadcrumbEllipsis = (props: IBreadcrumbEllipsis) => {
  const { size = "large", routes } = props;
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <StyledRelativeContainer ref={containerRef} onClick={toggleEllipsisMenu}>
      <StyledContainerEllipsis>
        <Text type="label" size={size} appearance="dark" textAlign="start">
          <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
        </Text>
      </StyledContainerEllipsis>
      {showMenu && <BreadcrumbMenu routes={routes} />}
    </StyledRelativeContainer>
  );
};

export { BreadcrumbEllipsis };
export type { IBreadcrumbEllipsis };
