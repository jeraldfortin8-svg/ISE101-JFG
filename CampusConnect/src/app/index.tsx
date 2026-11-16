
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../types/announcement';
import { getAnnouncementTitles, getUnreadAnnouncements } from '../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library schedule', category: 'Notice', read: false },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);
  const titles = getAnnouncementTitles(sampleAnnouncements);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>Unread announcements: {unread.length}</Text>

      {sampleAnnouncements.map((announcement) => (
        <View key={announcement.id} style={styles.card}>
          <Text style={styles.cardTitle}>{announcement.title}</Text>
          <Text style={styles.cardMeta}>Category: {announcement.category}</Text>
          <Text style={styles.cardMeta}>{announcement.read ? 'Read' : 'Unread'}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Announcement titles</Text>
      {titles.map((title, index) => (
        <Text key={`${title}-${index}`} style={styles.listItem}>
          • {title}
        </Text>
      ))}
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
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1E293B',
  },
  badge: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '600',
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 18,
    color: '#0F172A',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
  },
  cardMeta: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 12,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 6,
  },
});
