const sizes = ["large", "small"] as const;
type Sizes = (typeof sizes)[number];

interface IRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: Sizes;
}

interface IBreadcrumbsRoutes {
  routes: IRoute[];
}

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
      },
    },
  },
  crumbs: {
    description:
      "An array of objects that contain the path, label, id, and isActive properties.",
  },
};

export { props, sizes };
export type { IBreadcrumbsRoutes, IRoute, Sizes };
