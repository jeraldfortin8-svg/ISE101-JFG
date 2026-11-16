import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AnnouncementCard from './AnnouncementCard';

type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

const initialAnnouncements: AnnouncementItem[] = [
  { id: 'ANN-001', title: 'Enrollment Reminder', category: 'Academic', read: false },
  { id: 'ANN-002', title: 'Sports Festival Announcement', category: 'Events', read: false },
  { id: 'ANN-003', title: 'Campus Clean-up Drive', category: 'Community', read: true },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(initialAnnouncements);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const unreadCount = announcements.filter((announcement) => !announcement.read).length;

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: !announcement.read } : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>Unread announcements: {unreadCount}</Text>
      <Text style={styles.status}>Status: {isReady ? 'Ready for updates' : 'Syncing updates...'}</Text>

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => handleMarkRead(announcement.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 4,
  },
  status: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 12,
  },
  list: {
    width: '100%',
  },
  listContent: {
    paddingBottom: 12,
  },
});
