import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

export default function Airconforms ({ navigation }) {
  const [officeSpace, setOfficeSpace] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [daysInOffice, setDaysInOffice] = useState('');
  const [greenPractices, setGreenPractices] = useState('');
  const [airconMaintenance, setAirconMaintenance] = useState('');
  const [electricityData, setElectricityData] = useState([
    { kwh: '', cost: '' },
    { kwh: '', cost: '' },
    { kwh: '', cost: '' },
    { kwh: '', cost: '' },
    { kwh: '', cost: '' },
    { kwh: '', cost: '' }
  ]);

  const handleElectricityChange = (index, field, value) => {
    const updatedData = [...electricityData];
    updatedData[index][field] = value;
    setElectricityData(updatedData);
  };

  const handleSubmit = () => {
    const formData = {
      officeSpace,
      numberOfEmployees,
      workingHours,
      daysInOffice,
      greenPractices,
      airconMaintenance,
      electricityData
    };
    console.log('Form Data:', formData);
    navigation.reset({
      index: 0,
      routes: [{ name: "Chatbot"}],
    });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <ScrollView style={styles.container}>
      <Header>Please input this form so that we are able to catered suggestions based on your own office</Header>
        <Text style={styles.label}>Office Space (in square meters)</Text>
        <TextInput
          style={styles.input}
          value={officeSpace}
          onChangeText={setOfficeSpace}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Number of Employees</Text>
        <TextInput
          style={styles.input}
          value={numberOfEmployees}
          onChangeText={setNumberOfEmployees}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Office Working Hours</Text>
        <TextInput
          style={styles.input}
          value={workingHours}
          onChangeText={setWorkingHours}
        />

        <Text style={styles.label}>Days Employees in Office</Text>
        <TextInput
          style={styles.input}
          value={daysInOffice}
          onChangeText={setDaysInOffice}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Green Practices Implemented</Text>
        <TextInput
          style={styles.input}
          value={greenPractices}
          onChangeText={setGreenPractices}
        />

        <Text style={styles.label}>No. of Air Con Maintenance a Year</Text>
        <TextInput
          style={styles.input}
          value={airconMaintenance}
          onChangeText={setAirconMaintenance}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Electricity Bill for the Past 6 Months</Text>
        {electricityData.map((monthData, index) => (
          <View key={index} style={styles.electricityRow}>
            <TextInput
              style={styles.electricityInput}
              value={monthData.kwh}
              onChangeText={(value) => handleElectricityChange(index, 'kwh', value)}
              placeholder="kWh"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.electricityInput}
              value={monthData.cost}
              onChangeText={(value) => handleElectricityChange(index, 'cost', value)}
              placeholder="Cost ($)"
              keyboardType="numeric"
            />
          </View>
        ))}

        <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
          Submit
        </Button>
      </ScrollView>
      </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  electricityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  electricityInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
  },
  submitButton: {
    marginTop: 16,
  },
});

