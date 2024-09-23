import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTokens } from "@inubekit/text";

const StyledContainerLink = styled.li`
  display: inline-block;
  align-items: center;
`;

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme, $active }) =>
      $active
        ? theme?.text?.dark?.content?.color?.regular ||
          TextTokens.dark.content.color.regular
        : theme?.text?.gray?.content?.color?.regular ||
          TextTokens.gray.content.color.regular};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
