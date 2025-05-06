import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function StandardsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MSZ HD 60364 szabvány értelmezések</Text>

      <Text style={styles.paragraph}>
        A szabvány célja az alacsony feszültségű villamos berendezések tervezése, létesítése és ellenőrzése.
        A főbb részek közé tartozik:
      </Text>

      <Text style={styles.bullet}>• Általános követelmények</Text>
      <Text style={styles.bullet}>• Védelmi módok (érintésvédelem, túláram, szigetelés)</Text>
      <Text style={styles.bullet}>• Vizsgálati és ellenőrzési eljárások</Text>
      <Text style={styles.bullet}>• Különleges helyiségek (pl. fürdőszobák, kültér, orvosi terek)</Text>

      <Text style={styles.paragraph}>
        A szabvány frissítéseit a Magyar Szabványügyi Testület követi nyomon, és időszakos revíziókkal egészíti ki.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  paragraph: { fontSize: 16, marginBottom: 12 },
  bullet: { fontSize: 16, marginLeft: 10, marginBottom: 6 }
});
