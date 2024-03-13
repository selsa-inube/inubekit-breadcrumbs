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
    text-decoration-color: ${({ theme }) =>
      theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
