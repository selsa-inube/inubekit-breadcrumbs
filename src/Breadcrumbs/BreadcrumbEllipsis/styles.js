import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainerEllipsis = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbEllipsis = styled.span`
  user-select: none;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) =>
      theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  }
`;

const StyledRelativeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
};
