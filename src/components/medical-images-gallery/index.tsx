import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { translate } from '@/lib';

import ImageCard, { type IMedicalImageCard } from '../image-card';
import { Text } from '../ui';

const MedicalImagesGallery = ({ className }: { className: string }) => {
  const handleSeeAll = () => {};

  const handleImagePress = (item: IMedicalImageCard) => {
    router.navigate({
      pathname: '/chat',
      params: { topic: item.title },
    });
  };

  return (
    <View className={className}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pb-3">
        <Text className="font-bold-poppins text-xl text-gray-800">
          {translate('components.MedicalCard.medicalImagesAnalyzer')}
        </Text>
        {/* <SeeAllButton onPress={handleSeeAll} /> */}
      </View>

      {/* Horizontal Scrollable Gallery */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4 py-2"
        contentContainerStyle={{ paddingRight: 16 }}
      >
        {medicalImagesData.map((item) => (
          <ImageCard
            key={item.id}
            item={item}
            onPress={() => handleImagePress(item)}
            compact
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MedicalImagesGallery;

// Comprehensive medical images data
const medicalImagesData: IMedicalImageCard[] = [
  {
    id: '1',
    title: translate('components.MedicalCard.imageTypes.xray'),
    image: require('../../assets/images/vet/xray.png'),
    description:
      'Radiographic imaging used to evaluate bones, lungs, and abdomen in animals.',
    category: 'Veterinary Radiology',
  },
  {
    id: '2',
    title: translate('components.MedicalCard.imageTypes.ct'),
    image: require('../../assets/images/vet/ct.png'),
    description:
      'Computed Tomography imaging for detailed 3D evaluation of internal structures.',
    category: 'Veterinary Radiology',
  },
  {
    id: '3',
    title: translate('components.MedicalCard.imageTypes.mri'),
    image: require('../../assets/images/vet/mri.png'),
    description:
      'Magnetic Resonance Imaging ideal for soft-tissue, neurological, and spinal evaluation.',
    category: 'Veterinary Radiology',
  },
  {
    id: '4',
    title: translate('components.MedicalCard.imageTypes.ultrasound'),
    image: require('../../assets/images/vet/ultrasound.jpg'),
    description:
      'Sonographic imaging for abdominal organs, pregnancy checks, and soft tissue.',
    category: 'Veterinary Radiology',
  },
  {
    id: '5',
    title: translate('components.MedicalCard.imageTypes.ecg'),
    image: require('../../assets/images/vet/ecg.png'),
    description: 'Electrocardiogram for monitoring cardiac rhythm in animals.',
    category: 'Veterinary Cardiology',
  },
  {
    id: '6',
    title: translate('components.MedicalCard.imageTypes.skinLesion'),
    image: require('../../assets/images/vet/skin.png'),
    description:
      'Images for evaluating skin lesions, parasites, allergies, or infections.',
    category: 'Veterinary Dermatology',
  },
  {
    id: '7',
    title: translate('components.MedicalCard.imageTypes.dental'),
    image: require('../../assets/images/vet/dental-xray.png'),
    description:
      'Oral and dental imaging used across species such as dogs, cats, horses, and exotics.',
    category: 'Veterinary Dentistry',
  },
  {
    id: '8',
    title: translate('components.MedicalCard.imageTypes.retinalScan'),
    image: require('../../assets/images/vet/eye-scan.png'),
    description:
      'Ophthalmic fundus imaging for diagnosing eye diseases in animals.',
    category: 'Veterinary Ophthalmology',
  },
  {
    id: '9',
    title: translate('components.MedicalCard.imageTypes.bloodSmear'),
    image: require('../../assets/images/vet/blood-smear.png'),
    description:
      'Microscopic examination for parasites, anemia, infections, and blood disorders.',
    category: 'Hematology',
  },
  {
    id: '10',
    title: translate('components.MedicalCard.imageTypes.fluoroscopy'),
    image: require('../../assets/images/vet/fluoroscopy.png'),
    description:
      'Real-time X-ray imaging for swallowing studies, tracheal collapse, or mobility exams.',
    category: 'Veterinary Radiology',
  },
  {
    id: '11',
    title: translate('components.MedicalCard.imageTypes.echo'),
    image: require('../../assets/images/vet/echo.png'),
    description:
      'Ultrasound imaging of the heart to evaluate function and structure.',
    category: 'Veterinary Cardiology',
  },
  {
    id: '12',
    title: translate('components.MedicalCard.imageTypes.pet'),
    image: require('../../assets/images/vet/pet-scan.png'),
    description:
      'Metabolic imaging used for oncology, organ function, and advanced diagnostics.',
    category: 'Veterinary Nuclear Medicine',
  },
];
