import React from "react";
import { Statistic } from "semantic-ui-react";
const DisplayBalance = (props) => {
  return (
    <Statistic size={props.size} color={props.color}>
      <Statistic.Label style={{ textAlign: "left" }}>
        {props.title}
      </Statistic.Label>
      <Statistic.Value>{props.value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
