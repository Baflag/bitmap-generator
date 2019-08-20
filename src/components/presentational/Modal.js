/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  modalSwitch,
  playAnimation,
  pauseAnimation,
  stopAnimation,
  editFrame
} from '../../actions';

let interval;

const Modal = ({
  isModalOn,
  modalSwitch,
  background,
  frameIndexAnimation,
  playAnimation,
  pauseAnimation,
  stopAnimation,
  numberOfFrames,
  pixelSide,
  editFrame
}) => {
  //*************************************wrzucić style do odpowiedniego CSS @Mateusz!!!************************//
  const renderAnimation = () => {
    const frame = background[frameIndexAnimation];
    return (
      <div className="board" style={{ width: '400px', margin: '24px' }}>
        {frame.map((pixel, i) => (
          <div
            className="frame"
            key={i}
            style={{
              width: pixelSide,
              height: pixelSide,
              backgroundColor: `rgb(${pixel})`
            }}
          />
        ))}
      </div>
    );
  };

  const playAnimationHandler = () => {
    if (frameIndexAnimation !== numberOfFrames - 1) {
      interval = setInterval(playAnimation, 500);
    }
  };

  if (interval) {
    if (frameIndexAnimation === numberOfFrames - 1) {
      clearInterval(interval);
    }
  }

  const pauseAnimationHandler = () => {
    clearInterval(interval);
    pauseAnimation();
  };

  const stopAnimationHandler = () => {
    clearInterval(interval);
    stopAnimation();
  };

  return isModalOn ? (
    <div className="modal">
      <div className="container">
        <i className="close icon" onClick={modalSwitch} />
        {renderAnimation()}
        <button
          className="ui labeled icon button"
          onClick={playAnimationHandler}
        >
          <i className="play icon" />
          play
        </button>
        <button
          className="ui labeled icon button"
          onClick={stopAnimationHandler}
        >
          <i className="stop icon" />
          stop
        </button>
        <button
          className="ui labeled icon button"
          onClick={pauseAnimationHandler}
        >
          <i className="pause icon" />
          pause
        </button>
        <button className="ui labeled icon button" onClick={editFrame}>
          <i className="edit icon" />
          edit
        </button>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  isModalOn: PropTypes.bool,
  modalSwitch: PropTypes.func,
  background: PropTypes.array,
  frameIndexAnimation: PropTypes.number,
  playAnimation: PropTypes.func,
  pauseAnimation: PropTypes.func,
  stopAnimation: PropTypes.func,
  editFrame: PropTypes.func,
  numberOfFrames: PropTypes.number
};

const mapStateToProps = state => ({
  isModalOn: state.reducer.isModalOn,
  background: state.reducer.listOfFrames,
  frameIndexAnimation: state.reducer.frameIndexAnimation,
  numberOfFrames: state.reducer.listOfFrames.length,
  pixelSide: state.reducer.pixelSide
});

const mapDispatchToProps = {
  modalSwitch: modalSwitch,
  playAnimation: playAnimation,
  pauseAnimation: pauseAnimation,
  stopAnimation: stopAnimation,
  editFrame: editFrame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
