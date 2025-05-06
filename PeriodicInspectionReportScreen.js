import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

export default function PeriodicInspectionReportScreen() {
  const [buildingName, setBuildingName] = useState('');
  const [inspector, setInspector] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Időszakos felülvizsgálati jegyzőkönyv</Text>

      <Text style={styles.label}>Épület neve</Text>
      <TextInput style={styles.input} value={buildingName} onChangeText={setBuildingName} />

      <Text style={styles.label}>Felülvizsgáló neve</Text>
      <TextInput style={styles.input} value={inspector} onChangeText={setInspector} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});
