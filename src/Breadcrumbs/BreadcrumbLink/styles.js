import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@inubekit/foundations";

export const StyledContainerLink = styled.li`
  display: inline-block;
`;

export const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ themed }) =>
      themed?.color?.text?.gray?.regular || inube.color.text.gray.regular};
  }
`;
