import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledContainerEllipsis = styled.li`
  display: inline-block;
`;

export const StyledBreadcrumbEllipsis = styled.span`
  user-select: none;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) =>
      theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
  }
`;

export const StyledRelativeContainer = styled.div`
  position: relative;
  display: inline-block;
`;
