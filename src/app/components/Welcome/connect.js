import { albuminfofetch, albuminforeset } from '../../reducers/albumInfoDetailsReducer'

export const mapStateToProps = ({
  albumInfo = {},
}) => ({
  albumInfo,
})

export const mapDispatchToProps = (dispatch) => (
  {
    getAlbumInfo: () => {
      dispatch(albuminfofetch())
    },
    resetAlbumInfo: () => {
      dispatch(albuminforeset())
    },
  }
)
