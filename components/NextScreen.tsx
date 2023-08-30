import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-svg-charts';

const NextScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graph 1</Text>
      <BarChart
        style={styles.chart}
        data={barChartData[0].values}
        svg={{fill: 'rgba(134, 65, 244, 0.8)'}}
        contentInset={{top: 20, bottom: 20}}
      />
      <Text style={styles.title}>Graph 2</Text>
      <BarChart
        style={styles.chart}
        data={barChartData[1].values}
        svg={{fill: 'rgb(33, 150, 243)'}}
        contentInset={{top: 20, bottom: 20}}
      />
    </View>
  );
};

export const barChartData = [
  {label: 'Dataset 1', values: [12, 15, 10, 20, 25]},
  {label: 'Dataset 2', values: [5, 8, 15, 10, 7]},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    height: 200,
    width: 300,
  },
});

export default NextScreen;
