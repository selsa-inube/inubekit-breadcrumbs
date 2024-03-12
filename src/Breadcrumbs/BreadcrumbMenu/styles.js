import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledBreadcrumbMenu = styled.div`
  position: absolute;
  width: max-content;
  max-width: 160px;
  min-width: 100px;
  box-shadow: 0px 2px 4px
    ${({ theme }) =>
      `${
        theme?.text?.light?.content?.color?.disabled ||
        inube.text.light.content.color.disabled
      }`};
  background-color: ${({ theme }) =>
    theme?.text?.light?.content?.color?.hover ||
    inube.text.light.content.color.hover};
  border-radius: 4px;
  a {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme?.text?.light?.content?.color?.regular ||
        inube.text.light.content.color.regular};
    }
  }
`;

export { StyledBreadcrumbMenu };
