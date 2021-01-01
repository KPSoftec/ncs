import PropTypes from 'prop-types'

export const defaultProps = {
  albumInfo: {
    data: {},
    inProgress: false,
    error: {},
  },
}

export const propTypes = {
  getAlbumInfo: PropTypes.func.isRequired,
  albumInfo: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.shape({}),
    ]),
    error: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.shape({}),
    ]),
  }),
}
