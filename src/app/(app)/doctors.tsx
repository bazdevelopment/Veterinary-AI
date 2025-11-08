/* eslint-disable max-lines-per-function */
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import { medicalSpecializationsData } from '@/components/medical-specialization-preview';
import SearchBar from '@/components/search-bar';
import SpecializationCard, {
  type MedicalSpecialization,
} from '@/components/specialization-card';
import { Button, colors, Text } from '@/components/ui';
import { router } from 'expo-router';
import { translate } from '@/lib';
import { ArrowRightSharp } from '@/components/ui/icons/arrow-right-sharp';
import { useColorScheme } from 'nativewind';
import UpgradeBanner from '@/components/upgrade-banner';
import useSubscriptionAlert from '@/lib/hooks/use-subscription-banner';

// Full Screen All Specializations
const DoctorsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(
    medicalSpecializationsData
  );
  const { isUpgradeRequired } = useSubscriptionAlert();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleSpecializationPress = (item: MedicalSpecialization) => {
    router.navigate({
      pathname: '/chat',
      params: { topic: item.title },
    });
  };

  // Search functionality
  const handleSearch = (text: string) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setFilteredData(medicalSpecializationsData);
    } else {
      const filtered = medicalSpecializationsData.filter(
        (item) =>
          item.title.toLowerCase().includes(text.trim().toLowerCase()) ||
          item.subtitle?.toLowerCase().includes(text.trim().toLowerCase()) ||
          item.description.toLowerCase().includes(text.trim().toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="border-b border-primary-900 bg-white p-4 dark:bg-transparent">
        <View className="flex-row items-center justify-center">
          {/* <TouchableOpacity onPress={handleBack} className="mr-3">
            <Ionicons name="arrow-back" size={24} color="#1F2937" />
          </TouchableOpacity> */}
          <Text className="font-bold-poppins text-xl text-gray-800">
            {translate('general.medicalAssistants')}
          </Text>
        </View>
      </View>
      {isUpgradeRequired && (
        <UpgradeBanner
          className="mx-4 mt-4"
          onUpgradePress={() => router.navigate('/paywall-new')}
        />
      )}
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder={translate('general.searchAssistant')}
      />

      {/* All Specializations List */}
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <SpecializationCard
              item={item}
              onPress={() => handleSpecializationPress(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center px-8">
            <Text className="mt-4 font-semibold-poppins text-lg text-gray-800">
              {translate(
                'rootLayout.screens.doctorsScreen.searchResults.notFoundTitle'
              )}
            </Text>
            <Text className="mt-2 text-center text-gray-500">
              {translate(
                'rootLayout.screens.doctorsScreen.searchResults.notFoundSubtitle'
              )}
            </Text>
          </View>
          <Button
            label={translate(
              'rootLayout.screens.doctorsScreen.searchResults.askAssistant'
            )}
            variant="ghost"
            icon={
              <ArrowRightSharp color={isDark ? colors.white : colors.black} />
            }
            className="self-center active:opacity-70 mt-4"
            textClassName="text-black text-lg dark:text-white font-semibold-poppins"
            onPress={() => router.navigate('/chat')}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default DoctorsScreen;
