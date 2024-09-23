import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";

const StyledContainerLink = styled.li`
  display: inline-block;
  > * {
    > label {
      padding: 8px 12px;
    }
  }
`;

const StyledBreadcrumbMenuLink = styled(Link)`
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
  }
`;

export { StyledContainerLink, StyledBreadcrumbMenuLink };
