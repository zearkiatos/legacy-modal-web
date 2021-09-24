import React from "react";
import { connect } from "react-redux";
import { colorActions } from "../../actions";
const Colors = (props) => {
  const renderColors = (colors) =>
    colors.map((color) => (
      <h2 key={color} style={{ color }}>
        {color}
      </h2>
    ));
  return <div>{renderColors(props.colors)}</div>;
};

function mapStateToProps({ colors }) {
  console.log(colors);
  return { colors };
}

function mapDispatchToProps() {
  const colors = colorActions.fetchColors();
  return {
    colors: colors.payload,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
