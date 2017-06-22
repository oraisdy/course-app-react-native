import React from "react";
import { StyleSheet, View } from "react-native";
import Chart from "react-native-chart";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  chart: {
    width: 380,
    height: 200
  }
});

const xAxis = [0, 20, 40, 60, 80];
const yAxis = [0, 0, 0, 0, 0];

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data || []
    });
  }
  transform(scores) {
    scores.forEach(data => {
      yAxis[data.score / 20]++;
    });
    var data = [];
    xAxis.map((x, index) => {
      data.push([x, yAxis[index]]);
    });
    return data;
  }
  render() {
    return (
      <View style={styles.container}>
        <Chart
          style={styles.chart}
          data={this.transform(this.state.data)}
          verticalGridStep={5}
          type="bar"
        />
      </View>
    );
  }
}
