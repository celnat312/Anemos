import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { Button } from 'react-native-paper';

import * as shape from 'd3-shape';

import { LineChart, BarChart } from "react-native-gifted-charts";


const CO2Data = [
  { value: 354828.198697, label: 'Sat' },
  { value: 311096.897512, label: 'Sun' },
  { value: 429870.53072, label: 'Mon' },
  { value: 533729.886134, label: 'Tue' },
  { value: 357912.545853, label: 'Wed' },
  { value: 389858.12286, label: 'Thu' },
  { value: 513876.449428, label: 'Fri' },
];

const WaterData = [
  {value: 1800, label: 'S'},
  {value: 2100, label: 'S'},
  {value: 2300, label: 'M', frontColor: '#177AD5'},
  {value: 2200, label: 'T', frontColor: '#177AD5'},
  {value: 1800, label: 'W'},
  {value: 2500, label: 'T', frontColor: '#177AD5'},
  {value: 2100, label: 'F'},
]


const App = ({ navigation }) => {

  return (
    <Background> 
      <ScrollView style={styles.container}
      contentContainerStyle={{ width: "100%" }}>

      <BackButton
        goBack={() => {
          navigation.dispatch(CommonActions.goBack());
        }}
      />

    <View style={styles.header}>
        <Text style={styles.headerText}>Your Analytics</Text>
    </View>

    {/* <View style={styles.buttonGroup}>
        <Button mode="contained" style={styles.button}>This Week</Button>
        <Button mode="contained" style={styles.button}>This Month</Button>
        <Button mode="contained" style={styles.button}>This Year</Button>
    </View> */}

    <View style={styles.card}>
        <Text style={styles.cardTitle}>CO2</Text>
        <Text style={styles.cardValue}>798 tons/year</Text>
        <LineChart
          data={CO2Data}
          color={'#177AD5'}
          isAnimated
          thickness={4}
          hideDataPoints
          hideYAxisText
        />
        <Text style={styles.cardFooter}>                        </Text>
        <Text style={styles.cardFooter}>Updated 2h ago</Text>
        <Text style={styles.cardDescription}>Lorem ipsum dolor insert the AI's bitesized explanation for the CO2 estimation here</Text>
        </View>

    <View style={styles.card1}>
        <Text style={styles.cardTitle}>Water Usage</Text>
        <Text style={styles.cardValue}>900 litres/year</Text>
        <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                isAnimated
                data={WaterData}
                yAxisThickness={0}
                xAxisThickness={0}
                hideYAxisText
            />
        <Text style={styles.cardFooter}>Updated 2h ago</Text>
        <Text style={styles.cardDescription}>Lorem ipsum dolor insert the AI's bitesized explanation for the water usage estimation here</Text>
      </View>


    </ScrollView>
    </Background>
  );
};













// Stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#006400',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#00b140',
  },
  card: {
    backgroundColor: '#FFA07A',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },

  card1: {
    backgroundColor: '#F6AB53',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  cardValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  cardFooter: {
    fontSize: 14,
    color: 'white',
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
});







export default App;
