import {
  ASSIGN_COLOR,
  RESET_BOARD,
  DELETE_FRAME,
  DOWNLOAD_BOARD,
  CHOOSE_COLOR,
  MOUSE_DOWN,
  MOUSE_UP,
  ADD_AFTER,
  ADD_BEFORE,
  ADD_COPY,
  CHOOSE_FRAME,
  MODAL_SWITCH,
  PLAY_ANIMATION,
  PAUSE_ANIMATION,
  STOP_ANIMATION,
  CHANGE_SIZE_16,
  CHANGE_SIZE_64,
  CHANGE_SIZE_144
} from './actionTypes';

export const assignColor = index => ({
  type: ASSIGN_COLOR,
  index
});

export const resetBoard = () => ({
  type: RESET_BOARD
});

export const deleteFrame = index => ({
  type: DELETE_FRAME,
  index
});

export const downloadBoard = () => ({
  type: DOWNLOAD_BOARD
});

export const chooseColor = ({ rgb }) => ({
  type: CHOOSE_COLOR,
  color: [rgb.r, rgb.g, rgb.b]
});

export const mouseDown = () => ({
  type: MOUSE_DOWN
});

export const mouseUp = () => ({
  type: MOUSE_UP
});

export const addBefore = () => ({
  type: ADD_BEFORE
});

export const addAfter = () => ({
  type: ADD_AFTER
});

export const addCopy = () => ({
  type: ADD_COPY
});

export const chooseFrame = activeFrameIndex => ({
  type: CHOOSE_FRAME,
  activeFrameIndex
});

export const changeSize16 = index => ({
  type: CHANGE_SIZE_16,
  index
});

export const changeSize64 = index => ({
  type: CHANGE_SIZE_64,
  index
});

export const changeSize144 = index => ({
  type: CHANGE_SIZE_144,
  index
});

export const modalSwitch = () => ({
  type: MODAL_SWITCH
});

export const playAnimation = () => ({
  type: PLAY_ANIMATION
});

export const pauseAnimation = () => ({
  type: PAUSE_ANIMATION
});

export const stopAnimation = () => ({
  type: STOP_ANIMATION
});
