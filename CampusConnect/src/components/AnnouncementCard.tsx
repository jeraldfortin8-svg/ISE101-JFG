import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>

      <Pressable
        accessibilityRole="button"
        onPress={onMarkRead}
        style={[styles.button, read && styles.buttonSecondary]}
      >
        <Text style={styles.buttonText}>{read ? 'Mark as Unread' : 'Mark as Read'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D9E2EC',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  category: {
    fontSize: 14,
    color: '#475569',
  },
  status: {
    fontSize: 14,
    color: '#334155',
    marginTop: 6,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#475569',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
