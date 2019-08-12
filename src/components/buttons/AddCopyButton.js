import React from "react";
import { connect } from "react-redux";

import { addCopy } from "../../actions";

const AddCopyButton = ({ addCopy }) => {
    return (
        <button
            className="small ui grey button"
            onClick={addCopy}
        >
            COPY FRAME
        </button>
    );
};

export default connect(
    null,
    { addCopy }
)(AddCopyButton);