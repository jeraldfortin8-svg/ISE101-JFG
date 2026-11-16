import type { Announcement } from '../types/announcement';

export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter((item) => !item.read);
}

export function formatStudentName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

export function getAnnouncementTitles(items: Announcement[]): string[] {
  return items.map((item) => item.title);
}

export function totalNumbers(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}

export type ApiAnnouncement = Pick<Announcement, 'id' | 'title'>;

export async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid announcement payload received from the API.');
    }

    return data
      .filter(
        (item): item is ApiAnnouncement =>
          typeof item === 'object' &&
          item !== null &&
          'id' in item &&
          'title' in item &&
          typeof item.id !== 'undefined' &&
          typeof item.title === 'string'
      )
      .map((item) => ({
        id: String(item.id),
        title: item.title,
      }));
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}
