import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@inubekit/foundations";

export const StyledContainerLink = styled.li`
  display: inline-block;
  > * {
    height: 32px;
    > label {
      color: ${({ theme }) =>
        theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
      cursor: pointer;
      padding: ${({ theme }) =>
        `${theme?.spacing?.s100 || inube.spacing.s100} ${
          theme?.spacing?.s150 || inube.spacing.s150
        }`};
    }
  }
`;

export const StyledBreadcrumbMenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
`;
