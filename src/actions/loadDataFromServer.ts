import { Dispatch } from "redux";
import { ActionType } from "./types";

export const loadData = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(dataLoading(true));

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(dataLoadSucces(data.results));
        dispatch(dataLoading(false));
        dispatch(setPagesCount(data.info.pages));
      });
  };
};

const dataLoading = (loading: boolean) => ({
  type: ActionType.SET_DATA_LOADING_STATUS,
  payload: loading,
});

const dataLoadSucces = (data: []) => ({
  type: ActionType.SET_DATA,
  payload: data,
});

const setPagesCount = (pages: number) => ({
  type: ActionType.SET_PAGES_COUNT,
  payload: pages,
});

const dataLoadError = (error: string) => ({
  type: ActionType.SET_LOADING_ERROR,
  payload: error,
});

export const setCurrentPage = (page: number) => ({
  type: ActionType.SET_CURRENT_PAGE,
  payload: page,
});

export const setFilter = (filter: string) => ({
  type: ActionType.SET_CURRENT_PAGE,
  payload: filter,
});
