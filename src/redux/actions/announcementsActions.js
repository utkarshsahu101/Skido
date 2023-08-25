import axios from "axios";
import {
  ANNOUNCEMENT_LIST_REQUEST,
  ANNOUNCEMENT_LIST_SUCCESS,
  ANNOUNCEMENT_LIST_FAIL,
  ANNOUNCEMENT_CREATE_REQUEST,
  ANNOUNCEMENT_CREATE_SUCCESS,
  ANNOUNCEMENT_CREATE_FAIL,
} from "../constants/announcementsConstants";

export const listAnnouncements = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ANNOUNCEMENT_LIST_REQUEST });

    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    dispatch({
      type: ANNOUNCEMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: ANNOUNCEMENT_LIST_FAIL, payload: message });
  }
};

export const createAnnouncement =
  (title, description, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: ANNOUNCEMENT_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      let { data } = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        { title, description, category, userId: userInfo.token },
        config
      );

      dispatch({
        type: ANNOUNCEMENT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ANNOUNCEMENT_CREATE_FAIL, payload: message });
    }
  };
