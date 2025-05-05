import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

export default function VisualLightningInspectionScreen() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Villámvédelmi ellenőrzés (vizuális)</Text>

      <Text style={styles.label}>Helyszín</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} />

      <Text style={styles.label}>Eredmény</Text>
      <TextInput style={styles.input} value={result} onChangeText={setResult} />
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
