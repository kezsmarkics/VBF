import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const allMenuItems = [
  'Számítások', 'Jegyzőkönyvek', 'Szabványok', 'Beállítások',
  'Villámvédelem', 'Új mérés', 'Projekt mentés', 'PDF generálás'
];

export default function CustomMainMenuScreen() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    loadSelection();
  }, []);

  const loadSelection = async () => {
    const stored = await AsyncStorage.getItem('selectedMenu');
    if (stored) setSelectedItems(JSON.parse(stored));
  };

  const toggleItem = async (item) => {
    let updated = [...selectedItems];
    if (updated.includes(item)) {
      updated = updated.filter(i => i !== item);
    } else {
      if (updated.length < 3) updated.push(item);
    }
    setSelectedItems(updated);
    await AsyncStorage.setItem('selectedMenu', JSON.stringify(updated));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Testreszabható főmenü</Text>
      <Text style={styles.subtitle}>Max. 3 gyorsgomb választható:</Text>
      {allMenuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedItems.includes(item) && styles.selected
          ]}
          onPress={() => toggleItem(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.saved}>Aktív gyorsgombok: {selectedItems.join(', ')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { textAlign: 'center', marginBottom: 15 },
  button: { padding: 12, backgroundColor: '#ddd', borderRadius: 8, marginBottom: 8 },
  selected: { backgroundColor: '#90caf9' },
  buttonText: { fontSize: 16, textAlign: 'center' },
  saved: { marginTop: 20, textAlign: 'center', fontStyle: 'italic' }
});
