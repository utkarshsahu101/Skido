import {
  ANNOUNCEMENT_LIST_REQUEST,
  ANNOUNCEMENT_LIST_SUCCESS,
  ANNOUNCEMENT_LIST_FAIL,
  ANNOUNCEMENT_CREATE_REQUEST,
  ANNOUNCEMENT_CREATE_SUCCESS,
  ANNOUNCEMENT_CREATE_FAIL,
} from "../constants/announcementsConstants";

export const announcementListReducer = (
  state = { announcements: [] },
  action
) => {
  switch (action.type) {
    case ANNOUNCEMENT_LIST_REQUEST:
      return { loading: true };
    case ANNOUNCEMENT_LIST_SUCCESS:
      return { loading: false, announcements: action.payload };
    case ANNOUNCEMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const announcementCreateReducer = (
  state = { announcements: [] },
  action
) => {
  switch (action.type) {
    case ANNOUNCEMENT_CREATE_REQUEST:
      return { loading: true };
    case ANNOUNCEMENT_CREATE_SUCCESS:
      return { loading: false, announcements: action.payload, success: true };
    case ANNOUNCEMENT_CREATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
