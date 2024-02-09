import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledBreadcrumbMenu = styled.div`
  position: absolute;
  width: fit-content;
  max-width: 160px;
  min-width: 100px;
  box-shadow: ${({ theme }) =>
    `${theme?.spacing?.s0 || inube.spacing.s0} 
     ${theme?.spacing?.s025 || inube.spacing.s025} 
     ${theme?.spacing?.s050 || inube.spacing.s050} 
     ${
       theme?.color?.stroke?.light?.disabled ||
       inube.color.stroke.light.disabled
     }`};
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.hover || inube.color.stroke.light.hover};
  border-radius: ${({ theme }) =>
    `${theme?.spacing?.s050 || inube.spacing.s050}`};
  a {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
    }
  }
`;
