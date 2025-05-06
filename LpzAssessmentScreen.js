import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function LpzAssessmentScreen() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LPZ zónák értékelése</Text>
      <TextInput
        style={styles.input}
        placeholder="Írd be az értéket"
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5
  }
});
