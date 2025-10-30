import { router } from 'expo-router';
import React from 'react';
import { Linking, ScrollView, TouchableOpacity, View } from 'react-native';

import Branding from '@/components/branding';
import { Button, SafeAreaView, Text } from '@/components/ui';
import { WelcomeIllustration } from '@/components/ui/illustrations/welcome';
import { translate } from '@/lib';
import getDeviceSizeCategory from '@/utilities/get-device-size-category';

const Welcome = () => {
  const { isVerySmallDevice, isLargeDevice } = getDeviceSizeCategory();

  return (
    <ScrollView
      contentContainerClassName="bg-white dark:bg-transparent"
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView>
        <View className="dark:bg-blackEerie items-center justify-center px-6 pb-32 pt-14">
          <Branding isLogoVisible invertedColors />
          <Text className="my-10 text-center font-bold-work-sans text-[30px] text-primary-900">
            {translate('rootLayout.screens.welcome.heading')}
          </Text>

          <WelcomeIllustration
            width={isVerySmallDevice ? 250 : 300}
            height={isVerySmallDevice ? 250 : 300}
          />
          <View
            className={`mt-16 ${isLargeDevice ? 'mt-20 w-[50%]' : 'w-full'}`}
          >
            <Button
              label={translate('rootLayout.screens.welcome.startButton')}
              variant="default"
              className="h-[55px] rounded-xl bg-primary-900 pl-5 dark:bg-primary-900"
              textClassName="font-semibold-work-sans text-lg dark:text-white "
              iconPosition="left"
              onPress={() => router.navigate('/anonymous-login')}
            />

            {/* TODO: add the button "Already have an account" */}
            {/* <Button
              label={translate('rootLayout.screens.welcome.accountButton')}
              variant="default"
              className="h-[55px] w-full rounded-xl border-2 border-primary-900 bg-white pl-5 dark:bg-primary-200"
              textClassName="text-lg text-center text-primary-900"
              iconPosition="left"
              onPress={() => router.navigate('/login')}
            /> */}
          </View>

          <View className="mt-6 w-full flex-row flex-wrap items-center justify-center px-12">
            <Text className="text-sm">
              {translate('general.agreeingMessage')}{' '}
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('')}>
              <Text className="text-sm text-primary-900 dark:text-primary-900">
                {translate('general.termsAndConditions')}
              </Text>
            </TouchableOpacity>
            <Text className="text-sm"> {translate('general.and')} </Text>
            <TouchableOpacity onPress={() => Linking.openURL('')}>
              <Text className="text-sm text-primary-900 dark:text-primary-900">
                {translate('general.privacyPolicy')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Welcome;
