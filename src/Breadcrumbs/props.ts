const sizes = ["large", "small"] as const;
type IBreadcrumbsSize = (typeof sizes)[number];

interface IBreadcrumbsRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: IBreadcrumbsSize;
}

interface IBreadcrumbsRoutes {
  routes: IBreadcrumbsRoute[];
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
export type { IBreadcrumbsRoutes, IBreadcrumbsRoute, IBreadcrumbsSize };
