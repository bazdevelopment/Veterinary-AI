/* eslint-disable max-lines-per-function */
import React from 'react';
import { Linking, ScrollView, TouchableOpacity, View } from 'react-native';

import { Text } from '@/components/ui';

// Define the type for a source category
interface SourceCategory {
  id: string;
  category: string;
  examplesDescription: string;
  link?: string; // Optional link for categories with a main website
  reference?: string; // Optional reference for sources without a direct link (like books)
}

// Array containing the source categories data
const sourceCategories: SourceCategory[] = [
  {
    id: 'major_databases',
    category: 'Major Medical Databases',
    examplesDescription:
      'Databases aggregating a vast amount of medical literature and research, such as PubMed, or knowledge bases used by healthcare professionals.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    id: 'who_publications',
    category: 'World Health Organization (WHO) Publications and Guidelines',
    examplesDescription:
      'Authoritative global health information, statistics, guidelines, and research on diseases, treatments, and public health.',
    link: 'https://www.who.int/',
  },
  {
    id: 'national_health_orgs',
    category: 'National Health and Medical Research Organizations',
    examplesDescription:
      'Information from national bodies responsible for health research, guidelines, and public health information (e.g., National Institutes of Health - NIH in the US, National Health Service - NHS in the UK).',
    link: 'https://www.nih.gov/', // Example link for NIH, you can change this
  },
  {
    id: 'peer_reviewed_journals',
    category: 'Peer-Reviewed Medical Journals',
    examplesDescription:
      'Research articles and clinical findings published in reputable academic journals after review by experts in the field (e.g., The New England Journal of Medicine, The Lancet).',
    link: 'https://www.nejm.org/', // Example link for NEJM, you can change this
  },
  {
    id: 'medical_textbooks',
    category: 'Standard Medical Textbooks and References',
    examplesDescription:
      'Foundational knowledge from widely accepted medical textbooks and professional reference materials used in medical education and practice.',
    reference:
      "Examples: Harrison's Principles of Internal Medicine, Robbins Basic Pathology. Consult specific editions for detailed information.",
  },
  {
    id: 'clinical_guidelines',
    category: 'Clinical Practice Guidelines',
    examplesDescription:
      'Recommendations for clinical care developed by professional organizations based on systematic reviews of evidence.',
    link: 'https://www.heart.org/', // Example link for AHA, you can change this to a relevant organization
  },
  {
    id: 'major_vet_databases',
    category: 'Major Veterinary Research Databases',
    examplesDescription:
      'Databases containing peer-reviewed veterinary literature, case studies, and research used by veterinary professionals.',
    link: 'https://www.cabdirect.org/', // CABI VetMed Resource
  },
  {
    id: 'avma_resources',
    category: 'American Veterinary Medical Association (AVMA) Resources',
    examplesDescription:
      'Professional guidelines, educational materials, and scientific resources provided by the AVMA.',
    link: 'https://www.avma.org/',
  },
  {
    id: 'wsava_guidelines',
    category: 'WSAVA Global Guidelines',
    examplesDescription:
      'Global, evidence-based guidelines for companion animal veterinary care developed by the World Small Animal Veterinary Association.',
    link: 'https://wsava.org/education/wsava-guidelines/',
  },
  {
    id: 'national_vet_orgs',
    category: 'National Veterinary Associations & Regulatory Bodies',
    examplesDescription:
      'Organizations responsible for veterinary standards, education, and animal health policies (e.g., RCVS in the UK, CVMA in Canada).',
    link: 'https://www.rcvs.org.uk/', // Example: Royal College of Veterinary Surgeons
  },
  {
    id: 'peer_reviewed_vet_journals',
    category: 'Peer-Reviewed Veterinary Journals',
    examplesDescription:
      'Research studies and clinical findings reviewed by experts in veterinary medicine (e.g., Journal of Veterinary Internal Medicine, JAVMA).',
    link: 'https://avmajournals.avma.org/', // JAVMA
  },
  {
    id: 'vet_textbooks',
    category: 'Standard Veterinary Textbooks and References',
    examplesDescription:
      'Authoritative educational material widely used in veterinary training and practice.',
    reference:
      "Examples: Ettinger's Textbook of Veterinary Internal Medicine, Fossum's Small Animal Surgery, Cunningham's Textbook of Veterinary Physiology.",
  },
  {
    id: 'vet_clinical_guidelines',
    category: 'Veterinary Clinical Practice Guidelines',
    examplesDescription:
      'Evidence-based guidelines from professional veterinary groups, such as AAHA (American Animal Hospital Association).',
    link: 'https://www.aaha.org/guidelines/',
  },
  {
    id: 'animal_health_orgs',
    category: 'International Animal Health Organizations',
    examplesDescription:
      'Global authorities providing research, animal health standards, and disease management information (e.g., WOAH – formerly OIE).',
    link: 'https://www.woah.org/',
  },
];

const CitationsScreen: React.FC = () => {
  // Function to handle opening URLs
  const handleLinkPress = async (url: string | undefined) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error(`Don't know how to open URL: ${url}`);
        // You might want to show an alert to the user here
      }
    }
  };

  return (
    <View className="flex-1 bg-white p-4 dark:bg-transparent">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Introductory Text */}
        <Text className="mb-6 text-base">
          Veterinary AI app provides educational insights based on established
          medical and scientific standards. Below are the sources and guidelines
          referenced by Dr. Vet, our AI Veterinary Assistant. These citations
          ensure transparency and accuracy for your learning experience. For
          medical advice, always consult a qualified healthcare professional.
        </Text>

        {/* Citations List */}
        {sourceCategories.map((source) => (
          <View
            key={source.id}
            className="mb-6 rounded-lg border border-gray-200 p-4"
          >
            <Text className="mb-2 font-semibold-poppins text-lg text-blue-700">
              {source.category}
            </Text>
            <Text className="mb-2 text-sm text-gray-600">
              {source.examplesDescription}
            </Text>
            {source.link && (
              <TouchableOpacity onPress={() => handleLinkPress(source.link)}>
                <Text className="text-sm text-blue-500 underline">
                  {source.link}
                </Text>
              </TouchableOpacity>
            )}
            {source.reference && (
              <Text className="text-sm text-gray-600">{source.reference}</Text>
            )}
          </View>
        ))}
        <View className="my-4 border-t border-gray-200 pt-4">
          <Text className="font-poppins-bold text-center text-sm">
            Information provided by the Veterinary AI is for informational
            purposes only and does not constitute medical advice, diagnosis, or
            treatment. Always consult a qualified healthcare professional for
            any health concerns or before making any decisions related to your
            health or treatment.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CitationsScreen;
