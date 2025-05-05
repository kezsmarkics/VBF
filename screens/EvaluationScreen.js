import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function EvaluationScreen() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const evaluate = (input) => {
    const num = parseFloat(input);
    if (isNaN(num)) {
      setResult('Nem értelmezhető');
    } else if (num <= 1.0) {
      setResult('Megfelelő');
    } else {
      setResult('Nem megfelelő');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Számítás értékelése</Text>
      <TextInput
        style={styles.input}
        placeholder="Írd be az eredményt"
        keyboardType="numeric"
        value={value}
        onChangeText={(text) => {
          setValue(text);
          evaluate(text);
        }}
      />
      <Text style={styles.result}>{result}</Text>
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
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});
