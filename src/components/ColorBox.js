import React from "react";
import { PropTypes } from "prop-types";

function ColorBox(prop) {
    const color = prop;

    return <div className="Box" style={{ backgroundColor: color }}></div>;

}
ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool
}
ColorBox.defaultProps = {
    rounded: true
}

export default ColorBox;