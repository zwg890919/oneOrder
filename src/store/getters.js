const getters = {
  sidebar: state => state.app.sidebar,
  menuRoles: state => state.user.menuRoles,
  funRoles: state => state.user.funRoles,
  currentApp: state => state.user.currentApp
}
export default getters
