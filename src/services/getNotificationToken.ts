import * as Notifications from 'expo-notifications';

export async function getPusherNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();

  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log('Push token' + pushToken.data);

    return pushToken.data;
  }
}