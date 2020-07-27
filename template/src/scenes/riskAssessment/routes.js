const routes = [
  {
    path: '',
    exact: true,
    component:  import(`PublicFlow/swipeCard`),
    requiresAuth: false,
    authorization: false,
  },
]

export default routes