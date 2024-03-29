import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@inubekit/foundations";

const StyledContainerLink = styled.li`
  display: inline-block;
  align-items: center;
`;

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme, $active }) =>
      $active
        ? theme?.text?.dark?.content?.color?.regular ||
          inube.text.dark.content.color.regular
        : theme?.text?.gray?.content?.color?.regular ||
          inube.text.gray.content.color.regular};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
