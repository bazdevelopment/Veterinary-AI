import React from 'react';
import { ScrollView } from 'react-native';

import MedicalCard, { type IMedicalCardItem } from '../medical-card';
import { BotAssistant } from '../ui/icons/bot-assistent';
import { GalleyIcon } from '../ui/icons/gallery';
import { router } from 'expo-router';
import { Env } from 'env';
import icon from '../icon';

const cardData: IMedicalCardItem[] = [
  {
    id: '1',
    title: 'Medical Images\nAnalyzer',
    icon: <GalleyIcon />,
    bgColor: 'bg-primary-900',
    onPress: () =>
      router.navigate({
        pathname: '/chat',
        params: { topic: 'Medical Images Analyzer' },
      }),
  },
  {
    id: '2',
    title: 'Ask Medical\nAI Assistant',
    icon: <BotAssistant />,
    bgColor: 'bg-secondary-900',
    onPress: () =>
      router.navigate({
        pathname: '/chat',
        params: { topic: 'Medical Assistant' },
      }),
  },
];

const MedicalCardsList = ({ className }: { className: string }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      horizontal
      contentContainerClassName={`flex-1 ${className} gap-1`}
    >
      {cardData.map((item) => (
        <MedicalCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default MedicalCardsList;
