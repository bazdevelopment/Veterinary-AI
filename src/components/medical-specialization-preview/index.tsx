import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { translate } from '@/lib';

import SeeAllButton from '../see-all-button';
import SpecializationCard, {
  type MedicalSpecialization,
} from '../specialization-card';
import { Text } from '../ui';

// Main Specializations Component (Home Screen Preview)
const MedicalSpecializationsPreview: React.FC = () => {
  // Get top 7 most searched specializations
  const topSpecializations = medicalSpecializationsData
    .filter((item) => item.searchRank && item.searchRank <= 8)
    .sort((a, b) => (a.searchRank || 0) - (b.searchRank || 0));

  const handleSeeAll = () => {
    router.navigate('/doctors');
  };

  const handleSpecializationPress = (item: MedicalSpecialization) => {
    router.navigate({
      pathname: '/chat',
      params: { topic: item.title },
    });
  };

  return (
    <View className="bg-gray-50 pb-4 dark:bg-transparent">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pb-3 pt-6">
        <Text className="flex-1 font-bold-poppins text-xl text-gray-800">
          {translate('general.medicalAssistants')}
        </Text>

        <SeeAllButton onPress={handleSeeAll} />
      </View>

      {/* Top Specializations List */}
      <View className="px-4">
        {topSpecializations.map((item) => (
          <SpecializationCard
            key={item.id}
            item={item}
            onPress={() => handleSpecializationPress(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default MedicalSpecializationsPreview;

export const medicalSpecializationsData: MedicalSpecialization[] = [
  {
    id: '1',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryGeneralMedicine.title'
    ),
    subtitle: translate(
      'components.SpecializationCard.specialization.veterinaryGeneralMedicine.subtitle'
    ),
    icon: require('../../assets/images/specializations/vet-general.png'),
    color: '#4DD0E1',
    description: 'Primary veterinary care for animals of all ages and species.',
    searchRank: 1,
  },
  {
    id: '2',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryInternalMedicine.title'
    ),
    icon: require('../../assets/images/specializations/internal-medicine.png'),
    color: '#4FC3F7',
    description: 'Complex diseases affecting organs and internal body systems.',
    searchRank: 6,
  },
  {
    id: '3',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryDermatology.title'
    ),
    icon: require('../../assets/images/specializations/vet-dermatology.png'),
    color: '#26C6DA',
    description: 'Conditions involving skin, coat, allergies, and parasites.',
    searchRank: 3,
  },
  {
    id: '4',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryCardiology.title'
    ),
    icon: require('../../assets/images/specializations/vet-cardiology.png'),
    color: '#00BCD4',
    description:
      'Heart, blood vessels, arrhythmias, murmurs, and cardiac imaging.',
    searchRank: 4,
  },
  {
    id: '5',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryOrthopedics.title'
    ),
    icon: require('../../assets/images/specializations/orthopedics.png'),
    color: '#0097A7',
    description:
      'Bones, joints, fractures, gait abnormalities, and mobility issues.',
  },
  {
    id: '6',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryNeurology.title'
    ),
    icon: require('../../assets/images/specializations/neurology.png'),
    color: '#009688',
    description: 'Brain, spine, nerves, seizures, and neurological disorders.',
  },
  {
    id: '7',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryOphthalmology.title'
    ),
    icon: require('../../assets/images/specializations/ophthalmology.png'),
    color: '#00897B',
    description: 'Eye conditions, vision issues, and ophthalmoscopic imaging.',
  },
  {
    id: '8',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryDentistry.title'
    ),
    icon: require('../../assets/images/specializations/dentstry.png'),
    color: '#4DB6AC',
    description: 'Oral health, dental radiographs, periodontal disease.',
  },
  {
    id: '9',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryRadiology.title'
    ),
    subtitle: translate(
      'components.SpecializationCard.specialization.veterinaryRadiology.subtitle'
    ),
    icon: require('../../assets/images/specializations/radiology.png'),
    color: '#80CBC4',
    description:
      'Diagnostic imaging including X-ray, ultrasound, CT, MRI, and more.',
    searchRank: 3,
  },
  {
    id: '10',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryOncology.title'
    ),
    icon: require('../../assets/images/specializations/vet-oncology.png'),
    color: '#4DD0E1',
    description: 'Cancer detection, tumor evaluation, and treatment guidance.',
  },
  {
    id: '11',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryEndocrinology.title'
    ),
    icon: require('../../assets/images/specializations/endocrinology.png'),
    color: '#26C6DA',
    description:
      'Hormonal and metabolic conditions such as diabetes or thyroid disorders.',
  },
  {
    id: '12',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryNephrologyUrology.title'
    ),
    icon: require('../../assets/images/specializations/nephrology.png'),
    color: '#00BCD4',
    description: 'Kidney, bladder, urinary tract issues, and fluid balance.',
  },
  {
    id: '13',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryRespiratory.title'
    ),
    icon: require('../../assets/images/specializations/vet-respiratory.png'),
    color: '#0097A7',
    description:
      'Lung disorders, infections, asthma-like conditions, and breathing problems.',
  },
  {
    id: '14',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryGastroenterology.title'
    ),
    icon: require('../../assets/images/specializations/gastroenterology.png'),
    color: '#00ACC1',
    description: 'Stomach, intestines, digestion, liver, and GI disorders.',
  },
  {
    id: '15',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryImmunology.title'
    ),
    icon: require('../../assets/images/specializations/allergy-immunology.png'),
    color: '#26A69A',
    description: 'Immune system diseases, infections, parasites, and zoonoses.',
  },
  {
    id: '16',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryHematology.title'
    ),
    icon: require('../../assets/images/specializations/hematology.png'),
    color: '#009688',
    description: 'Blood disorders, anemia, clotting issues, and microscopy.',
  },
  {
    id: '17',
    title: translate(
      'components.SpecializationCard.specialization.veterinarySurgery.title'
    ),
    icon: require('../../assets/images/specializations/surgery.png'),
    color: '#42A5F5',
    description: 'Soft tissue, orthopedic, and advanced surgical procedures.',
  },
  {
    id: '18',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryAnesthesiology.title'
    ),
    icon: require('../../assets/images/specializations/anesthesiology.png'),
    color: '#AB47BC',
    description: 'Safe anesthesia, analgesia, sedation, and pain control.',
  },
  {
    id: '19',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryRehabilitation.title'
    ),
    subtitle: translate(
      'components.SpecializationCard.specialization.veterinaryRehabilitation.subtitle'
    ),
    icon: require('../../assets/images/specializations/rehabilitation-medicine.png'),
    color: '#66BB6A',
    description:
      'Recovery therapy, hydrotherapy, mobility training, and strength building.',
  },
  {
    id: '20',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryExotics.title'
    ),
    icon: require('../../assets/images/specializations/vet-exotics.png'),
    color: '#FFA726',
    description:
      'Care for birds, reptiles, small mammals, and wildlife species.',
    searchRank: 5,
  },
  {
    id: '21',
    title: translate(
      'components.SpecializationCard.specialization.veterinaryLivestock.title'
    ),
    icon: require('../../assets/images/specializations/vet-livestock.png'),
    color: '#26A69A',
    description:
      'Health management for farm animals including cattle, horses, goats, and sheep.',
  },
];
