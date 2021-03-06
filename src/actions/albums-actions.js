import * as service from "../services/albums-services";

export const FIND_HOME_ALBUMS = "FIND_HOME_ALBUMS";
export const FIND_SEARCH_ALBUMS = "FIND_SEARCH_ALBUMS";
export const FIND_ALBUM = "FIND_ALBUM";

export const findAlbum = async (dispatch, albumId) => {
  const album = await service.findAlbum(albumId);
  dispatch({
    type: FIND_ALBUM,
    album,
  });
};

export const findHomeAlbums = async (dispatch) => {
  const albums = await service.findHomeAlbums();
  dispatch({
    type: FIND_HOME_ALBUMS,
    albums,
  });
};

export const findSearchAlbums = async (dispatch, searchTerm) => {
  const albums = await service.findSearchAlbums(searchTerm);
  dispatch({
    type: FIND_SEARCH_ALBUMS,
    albums,
  });
};
