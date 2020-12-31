import PropTypes from 'prop-types'

export const propTypes = {
  logOut: PropTypes.func,
  noLogOut: PropTypes.bool,
  onUnChecked: PropTypes.func,
  onChecked: PropTypes.func,
  showThemeSwitch: PropTypes.bool,
  theme: PropTypes.shape({
    mode: PropTypes.string,
  }).isRequired,
}

export const defaultProps = {
  logOut: () => null,
  noLogOut: false,
  onUnChecked: () => null,
  onChecked: () => null,
  showThemeSwitch: false,
}
