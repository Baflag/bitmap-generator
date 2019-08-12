import React from 'react';
import { connect } from 'react-redux';

import { changeSize } from '../../actions';

const ChangeSize = ({ changeSize, index }) => {
  const handleClick = () => {
    changeSize(index);
  };
  return (
    <div className="ui buttons">
      <button className="ui button" onClick={handleClick}>
        4:4
      </button>
      <button className="ui button">8:8</button>
      <button className="ui button">16:16</button>
    </div>
  );
};

export default connect(
  null,
  { changeSize }
)(ChangeSize);
