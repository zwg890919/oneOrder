const getters = {
  sidebar: state => state.app.sidebar,
  menuRoles: state => state.user.menuRoles,
  funRoles: state => state.user.funRoles,
  currentApp: state => state.user.currentApp,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  dictionary: state => state.dictionary.dictionary
}
export default getters
