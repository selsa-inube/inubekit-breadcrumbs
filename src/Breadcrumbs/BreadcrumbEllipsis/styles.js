import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainerEllipsis = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbEllipsis = styled.span`
  user-select: none;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.text?.gray?.content?.color?.regular ||
    inube.text.gray.content.color.regular};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) =>
      theme?.text?.gray?.content?.color?.hover ||
      inube.text.gray.content.color.hover};
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
