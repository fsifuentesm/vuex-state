export const routes = [
  {
    name: 'inbox',
    path: 'inbox',
    redirect: () => (
      {
        name: 'dashboard',
        query: {
          feed: 'myOngoingTasks',
        },
      }
    ),
  },
  {
    name: 'inbox-item',
    path: 'inbox/:id',
    redirect: to => (
      {
        name: 'dashboard',
        query: {
          feed: 'general',
          executionId: to.params.id,
        },
      }
    ),
  },
  {
    name: 'inbox-item-pid',
    path: 'inbox/:id/:pid',
    redirect: to => (
      {
        name: 'dashboard',
        query: {
          feed: 'general',
          executionId: to.params.id,
          objType: 'pointer',
          searchText: to.params.pid,
        },
      }
    ),
  },
];

export const inboxRoutes = {
  routes,
};

export default inboxRoutes;
