import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button, Alert } from 'react-native';

export default function DefectListScreen() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  const generatePdf = () => {
    Alert.alert('PDF generálás', 'A PDF sikeresen előállítva (szimuláció).');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hibajegyzék</Text>

      <Text style={styles.label}>Mező 1</Text>
      <TextInput style={styles.input} value={field1} onChangeText={setField1} />

      <Text style={styles.label}>Mező 2</Text>
      <TextInput style={styles.input} value={field2} onChangeText={setField2} />

      <Button title="PDF generálása" onPress={generatePdf} />
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
