import React from "react";
import { connect } from "react-redux";

import ColorsPalette from "../containers/ColorsPalette";
import Board from "../containers/Board";
import ResetButton from "../buttons/ResetButton";
import Canvas from "./Canvas";
import DownloadButton from "../buttons/DownloadButton";
import { mouseUp } from "../../actions";
import MultipleItems from "../containers/Carousel";
import AddAfterButton from "../buttons/AddAfterButton";
import ChangeSize from "../buttons/ChangeSize";

const ColoredBoard = ({ mouseUp }) => {
    return (
        <div>
            <div className="brd" onMouseLeave={mouseUp}>
                <div className="ui raised segment" id="gridOne">
                    <Board />
                </div>
                <div id="gridTwo">
                    <div id="gridThree">
                        <ColorsPalette />
                    </div>

                    <div id="gridFour">
                        <div>
                            <div className="ui raised segment vertical buttons">
                                <DownloadButton />
                                <ResetButton />
                                <AddAfterButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MultipleItems />
            </div>
            <Canvas />
            <ChangeSize />
        </div>
    );
};

export default connect(
    null,
    { mouseUp }
)(ColoredBoard);
