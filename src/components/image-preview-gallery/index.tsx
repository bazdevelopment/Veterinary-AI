import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface IMediPickerFile {
  id: string;
  fileUri: string;
  fileName: string;
  fileMimeType: string;
  fileExtension: string;
}

interface ImagePreviewGalleryProps {
  files: IMediPickerFile[];
  onRemoveFile: (fileId: string) => void;
}

const ImagePreviewGallery: React.FC<ImagePreviewGalleryProps> = ({
  files,
  onRemoveFile,
}) => {
  if (files.length === 0) {
    return null; // Don't render anything if there are no files
  }

  const isDocument = (mimeType: string) => {
    return mimeType?.startsWith('application/');
  };

  const isVideo = (mimeType: string) => {
    return mimeType?.startsWith('video/');
  };

  const getDocumentIcon = (fileExtension: string) => {
    const ext = fileExtension?.toLowerCase();
    if (ext === 'pdf') return 'document-text';
    if (ext === 'doc' || ext === 'docx') return 'document-text';
    if (ext === 'xls' || ext === 'xlsx') return 'stats-chart';
    if (ext === 'ppt' || ext === 'pptx') return 'easel';
    return 'document-attach';
  };

  const truncateFileName = (fileName: string, maxLength: number = 12) => {
    if (fileName.length <= maxLength) return fileName;
    const extension = fileName.split('.').pop() || '';
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncatedName = nameWithoutExt.substring(
      0,
      maxLength - extension.length - 4
    );
    return `${truncatedName}...${extension}`;
  };

  return (
    <View className="p-2 border-t border-gray-200 dark:border-gray-700">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {files.map((file) => {
          const isDoc = isDocument(file.fileMimeType);
          const isVid = isVideo(file.fileMimeType);

          return (
            <View key={file.id} className="m-1 relative">
              {isDoc ? (
                // Document Preview
                <View className="w-20 h-24 rounded-xl bg-gray-100 dark:bg-gray-800 justify-center items-center p-2">
                  <View className="w-full h-16 justify-center items-center">
                    <Ionicons
                      name={getDocumentIcon(file.fileExtension)}
                      size={32}
                      color="#6B7280"
                      className="dark:color-gray-400"
                    />
                  </View>
                  <Text
                    className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1"
                    numberOfLines={2}
                    ellipsizeMode="middle"
                  >
                    {truncateFileName(file.fileName)}
                  </Text>
                </View>
              ) : (
                // Image/Video Preview
                <View className="w-20 h-20 rounded-xl">
                  <Image
                    source={{ uri: file.fileUri || file?.uri }}
                    className="w-full h-full rounded-xl"
                    resizeMode="cover"
                  />
                  {isVid && (
                    <View className="absolute inset-0 justify-center items-center bg-black/30 rounded-xl">
                      <Ionicons name="play-circle" size={32} color="white" />
                    </View>
                  )}
                </View>
              )}

              {/* Remove Button */}
              <TouchableOpacity
                className="absolute -top-1 -right-1 w-6 h-6 bg-black/60 rounded-full justify-center items-center border-2 border-white z-10"
                onPress={() => onRemoveFile(file.id)}
              >
                <Ionicons name="close" size={16} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ImagePreviewGallery;
