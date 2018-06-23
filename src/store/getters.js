const getters = {
  sidebar: state => state.app.sidebar,
  menuRoles: state => state.user.menuRoles,
  funRoles: state => state.user.funRoles,
  menuRouters: state => state.user.menuRouters,
  currentApp: state => state.user.currentApp
}
export default getters
