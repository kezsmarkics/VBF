import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';

export default function ExtraFeaturesScreen() {
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [signature, setSignature] = useState('');
  const [offlineNote, setOfflineNote] = useState('');

  const saveProject = () => {
    Alert.alert('Projekt mentve', `Projekt neve: ${projectName}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Extra funkciók</Text>

      <Text style={styles.label}>Projekt neve</Text>
      <TextInput style={styles.input} value={projectName} onChangeText={setProjectName} />

      <Text style={styles.label}>GPS pozíció (fiktív)</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="pl. 47.4979, 19.0402" />

      <Text style={styles.label}>Aláírás (név)</Text>
      <TextInput style={styles.input} value={signature} onChangeText={setSignature} />

      <Text style={styles.label}>Offline megjegyzés</Text>
      <TextInput style={styles.input} value={offlineNote} onChangeText={setOfflineNote} multiline />

      <Button title="Projekt mentése" onPress={saveProject} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  label: { marginTop: 10, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8
  }
});
