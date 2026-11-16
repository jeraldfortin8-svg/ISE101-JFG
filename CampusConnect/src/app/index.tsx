
import { ScrollView, StyleSheet, Text } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>Your campus updates, all in one place.</Text>

      <AnnouncementPanel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 6,
  },
});
