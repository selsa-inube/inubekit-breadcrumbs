import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledBreadcrumbs = styled.ul`
  padding: ${({ theme }) => `${theme?.spacing?.s0 || inube.spacing.s0} `};
  margin: ${({ theme }) => `${theme?.spacing?.s0 || inube.spacing.s0} `};
  & > li {
    display: inline-flex;
  }
  & > li:not(:last-child)::after,
  & > div:not(:last-child)::after {
    pointer-events: none;
    content: "/";
    margin: ${({ theme }) =>
      `${theme?.spacing?.s0 || inube.spacing.s0} ${
        theme?.spacing?.s100 || inube.spacing.s100
      }`};
  }
  & li > p {
    display: inherit;
  }
`;
