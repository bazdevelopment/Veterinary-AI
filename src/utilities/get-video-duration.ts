import { Audio } from 'expo-av';

export const getVideoDuration = async (uri: string): Promise<number | null> => {
  try {
    const { status } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: false }
    );

    if (status.isLoaded) {
      return status.durationMillis || 0; // Return duration in milliseconds
    }
  } catch (error) {
    // Toast.warning(
    //   'Sorry, this video format isn’t supported yet. Could you upload an MP3 or MP4 file instead?'
    // );
    console.error('Error getting video duration:', error);
  }

  return null;
};
