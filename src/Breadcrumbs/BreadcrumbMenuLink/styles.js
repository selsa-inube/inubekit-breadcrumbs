import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@inubekit/foundations";

const StyledContainerLink = styled.li`
  display: inline-block;
  > * {
    height: 32px;
    > label {
      color: ${({ theme }) =>
        theme?.text?.gray?.content?.color?.regular ||
        inube.text.gray.content.color.regular};
      cursor: pointer;
      padding: 8px 12px;
    }
  }
`;

const StyledBreadcrumbMenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.text?.gray?.content?.color?.regular ||
    inube.text.gray.content.color.regular};
`;

export { StyledContainerLink, StyledBreadcrumbMenuLink };
