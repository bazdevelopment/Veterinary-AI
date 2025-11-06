import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MessageMediaAttachmentsProps {
  urls: string[];
  isUser?: boolean;
  onDocumentPress?: (url: string) => void;
}

const MessageMediaAttachments: React.FC<MessageMediaAttachmentsProps> = ({
  urls,
  isUser = false,
  onDocumentPress,
}) => {
  if (!urls || urls.length === 0) {
    return null;
  }

  const isDocument = (url: string) => {
    return url.match(/\.(pdf|doc|docx|xls|xlsx|ppt|pptx)(\?|$)/i);
  };

  const getFileExtension = (url: string) => {
    return url.match(/\.([a-z0-9]+)(\?|$)/i)?.[1]?.toLowerCase() || '';
  };

  const getFileName = (url: string) => {
    const urlParts = url.split('/');
    const fileNameWithParams = urlParts[urlParts.length - 1];
    const fileName = fileNameWithParams.split('?')[0];
    return decodeURIComponent(fileName);
  };

  const getDocumentIcon = (ext: string) => {
    if (ext === 'pdf') return 'document-text';
    if (ext === 'doc' || ext === 'docx') return 'document-text';
    if (ext === 'xls' || ext === 'xlsx') return 'stats-chart';
    if (ext === 'ppt' || ext === 'pptx') return 'easel';
    return 'document-attach';
  };

  const truncateFileName = (fileName: string, maxLength: number = 10) => {
    if (fileName.length <= maxLength) return fileName;
    const extension = fileName.split('.').pop() || '';
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncatedName = nameWithoutExt.substring(
      0,
      maxLength - extension.length - 4
    );
    return `${truncatedName}...${extension}`;
  };

  const handleDocumentPress = (url: string) => {
    if (onDocumentPress) {
      onDocumentPress(url);
    } else {
      // Default behavior: open in browser
      Linking.openURL(url).catch((err) =>
        console.error('Error opening document:', err)
      );
    }
  };

  return (
    <View
      className={`flex-row flex-wrap ${isUser ? 'self-end' : 'self-start'}`}
    >
      {urls.map((url, index) => {
        const isDoc = isDocument(url);
        const fileExtension = getFileExtension(url);
        const fileName = getFileName(url);

        if (isDoc) {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleDocumentPress(url)}
              className="w-[70px] h-[90px] rounded-xl m-1 bg-gray-100 dark:bg-gray-800 justify-center items-center p-2 active:opacity-70"
            >
              <View className="justify-center items-center flex-1">
                <Ionicons
                  name={getDocumentIcon(fileExtension)}
                  size={28}
                  color="#6B7280"
                />
              </View>
              <Text
                className="text-[10px] text-gray-600 dark:text-gray-400 text-center mt-1"
                numberOfLines={2}
                ellipsizeMode="middle"
              >
                {truncateFileName(fileName)}
              </Text>
            </TouchableOpacity>
          );
        }

        // Regular image/video display
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              // Optional: Add image viewer functionality
            }}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: url }}
              className="w-[70px] h-[70px] rounded-xl m-1"
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MessageMediaAttachments;
