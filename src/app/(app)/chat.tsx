import { generateUniqueId } from '@/utilities/generate-unique-id';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

const Chat = () => {
  const { topic = '' } = useLocalSearchParams();

  useEffect(() => {
    router.navigate({
      pathname: '/chat-screen',
      params: {
        conversationId: generateUniqueId(),
        mediaSource: '',
        mimeType: '',
        topic,
      },
    });
  }, []);
  return null;
};

export default Chat;
