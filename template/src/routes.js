
const routes = [
  {
    path: '/home',
    exact: true,
    // component:  import(`./scenes/publicFlow/swipeCard`),
    component:  import(`./scenes/riskAssessment`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/evaluate',
    exact: true,
    component:  import(`./scenes/riskAssessment/evaluate`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/enterPsd',
    exact: true,
    component:  import(`./scenes/publicFlow/enterPsd`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/promptFirst',
    exact: true,
    component:  import(`./scenes/riskAssessment/promptFirst`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/verifyID',
    exact: true,
    component:  import(`./scenes/publicFlow/verifyID`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/problems',
    exact: true,
    component:  import(`./scenes/riskAssessment/problems`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/resultEval',
    exact: true,
    component:  import(`./scenes/riskAssessment/resultEval`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/removeCard',
    exact: true,
    component:  import(`./scenes/publicFlow/removeCard`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/evalFair',
    exact: true,
    component:  import(`./scenes/riskAssessment/evalFair`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/repealEval',
    exact: true,
    component:  import(`./scenes/riskAssessment/repealEval`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/concatLong',
    exact: true,
    component:  import(`./scenes/riskAssessment/concatLong`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/uploadImg',
    exact: true,
    component:  import(`./scenes/publicFlow/uploadImg`),
    requiresAuth: false,
    authorization: false,
  },
  {
    path: '/uploadCamera',
    exact: true,
    component:  import(`./scenes/publicFlow/uploadCamera`),
    requiresAuth: false,
    authorization: false,
  }
]

export default routes;