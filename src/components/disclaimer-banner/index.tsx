import React from 'react';
import { View } from 'react-native';

import { Text } from '../ui';

interface IDisclaimerBanner {
  className?: string;
}

const DisclaimerBanner = ({ className }: IDisclaimerBanner) => {
  return (
    <View className={` bg-amber-50 p-4 dark:bg-amber-400 ${className}`}>
      <View className="gap-2">
        <Text className="font-medium-poppins text-sm text-amber-900 dark:text-black">
          This app never provides medical related data, health related
          measurements, diagnoses or treatment advice. Always consult a licensed
          veterinarian for any medical concerns.
        </Text>
      </View>
    </View>
  );
};

export default DisclaimerBanner;
