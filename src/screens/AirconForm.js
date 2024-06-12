import React, { useState, useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { FormDataContext } from "../helpers/FormDataContext";

export default function Airconforms({ navigation }) {
  const { setFormData } = useContext(FormDataContext);
  const [officeSpace, setOfficeSpace] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [daysInOffice, setDaysInOffice] = useState("");
  const [greenPractices, setGreenPractices] = useState("");
  const [airconMaintenance, setAirconMaintenance] = useState("");
  const [electricityData, setElectricityData] = useState([
    { kwh: "", cost: "" },
    { kwh: "", cost: "" },
    { kwh: "", cost: "" },
    { kwh: "", cost: "" },
    { kwh: "", cost: "" },
    { kwh: "", cost: "" },
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
      electricityData,
    };
    console.log("Form Data:", formData);
    setFormData(formData);
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  return (
    <Background>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ width: "100%" }}
      >
        <View style={{ marginBottom: 24, marginTop: 64 }}>
          <Header>
            Please complete this form so that we are able to cater suggestions
            based on your own office.
          </Header>
        </View>
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
            <View style={{ flex: 1 }}>
              <TextInput
                style={[
                  styles.electricityInput,
                  { justifyContent: "flex-start" },
                ]}
                value={monthData.kwh}
                onChangeText={(value) =>
                  handleElectricityChange(index, "kwh", value)
                }
                placeholder="kWh"
                keyboardType="numeric"
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={[
                  styles.electricityInput,
                  { justifyContent: "flex-end" },
                ]}
                value={monthData.cost}
                onChangeText={(value) =>
                  handleElectricityChange(index, "cost", value)
                }
                placeholder="Cost ($)"
                keyboardType="numeric"
              />
            </View>
          </View>
        ))}

        <View style={{ marginBottom: 64 }}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            Save
          </Button>
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 24,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  electricityRow: {
    width: "100%",
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  electricityInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
  },
  submitButton: {
    marginTop: 16,
  },
});
