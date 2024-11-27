import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function Ice_CreamContainer(props){
  return (
      <div>
        <h1>Number Of IceCream - {props.numberOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ice_CreamContainer)
