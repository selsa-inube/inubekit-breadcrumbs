import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledBreadcrumbMenu = styled.div`
  position: absolute;
  width: max-content;
  max-width: 160px;
  min-width: 100px;
  box-shadow: 0px 2px 4px
    ${({ theme }) => theme?.palette?.neutral?.N70 || inube.palette.neutral.N70};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  border-radius: 4px;
`;

export { StyledBreadcrumbMenu };
