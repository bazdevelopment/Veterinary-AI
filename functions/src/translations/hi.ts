import { type ITranslation } from './types';

export const hi: ITranslation = {
  common: {
    welcome: 'स्वागत है',
    error: 'एक त्रुटि हुई',
    loading: 'लोड हो रहा है...',
    noUserFound:
      'आप इस अनुरोध को करने के लिए अधिकृत नहीं हैं। कृपया लॉगिन करें',
    userIdMissing:
      'ऐसा लगता है कि उपयोगकर्ता आईडी गायब है। आगे बढ़ने के लिए कृपया इसे प्रदान करें',
    scanLimitReached:
      'आपने अनुमत स्कैन की अधिकतम संख्या तक पहुँच गए हैं। सेवा का उपयोग जारी रखने के लिए कृपया अपनी योजना अपग्रेड करें',
    mandatoryLanguage: 'भाषा कोड आवश्यक है',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'एक उपनाम चुनें और चलिए शुरू करते हैं!',
    userLoggedIn: 'वापसी पर स्वागत है! आप लॉग इन हो गए हैं।',
    accountCreated: 'आप लॉग इन हो गए हैं! एक्सप्लोर करने का आनंद लें!',
    error: 'उफ़! कुछ गलत हुआ। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें।',
  },
  updateUserSubscription: {
    subscribeSuccess: 'सफलतापूर्वक सब्सक्राइब हो गया!',
    updateSubscriptionError: 'उपयोगकर्ता सदस्यता अपडेट करने में असमर्थ!',
  },
  updateUserLanguage: {
    updateSuccess: 'भाषा सफलतापूर्वक अपडेट हो गई!',
    updateError:
      'भाषा अपडेट करते समय एक अप्रत्याशित त्रुटि हुई। कृपया बाद में पुनः प्रयास करें',
  },
  updateUser: {
    successUpdatedUser: 'उपयोगकर्ता सफलतापूर्वक अपडेट हो गया',
    updateUserError:
      'उपयोगकर्ता रिकॉर्ड अपडेट करने में असमर्थ। कृपया पुनः प्रयास करें।',
  },
  getUserInfo: {
    successGetInfo: 'उपयोगकर्ता जानकारी डेटा सफलतापूर्वक प्राप्त हो गया',
    errorGetInfo:
      'उपयोगकर्ता जानकारी प्राप्त करते समय एक अप्रत्याशित त्रुटि हुई। कृपया बाद में पुनः प्रयास करें',
  },
  getUserInfoById: {
    noUserInfoData:
      'उपयोगकर्ता दस्तावेज़ मौजूद है, लेकिन कोई डेटा उपलब्ध नहीं है',
    getUserFetchError: 'उपयोगकर्ता जानकारी प्राप्त करते समय एक त्रुटि हुई',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'डिवाइस टोकन प्रदान करना अनिवार्य है।',
    generalError: 'डिवाइस टोकन संग्रहीत करने में त्रुटि',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'सूचना शीर्षक और बॉडी अनिवार्य हैं।',
    generalError: 'सूचनाओं को प्रोसेस करते समय एक त्रुटि हुई',
    generalErrorAdditional: 'वैश्विक सूचना भेजने में विफल',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'डिवाइस आईडी अनिवार्य है',
    languageMandatory: 'भाषा अनिवार्य है',
    deviceIdentified: 'आपके डिवाइस को सफलतापूर्वक पहचान लिया गया है',
    generalError: 'डिवाइस ट्रायल जांचते समय एक त्रुटि हुई',
  },

  getUserNotification: {
    generalError: 'उपयोगकर्ता सूचनाएं प्राप्त करने में विफल',
    generalErrorAdditional: 'उपयोगकर्ता सूचनाएं प्राप्त करते समय एक त्रुटि हुई',
  },

  getScanCategories: {
    noCategoryFound: 'कोई श्रेणियां नहीं मिलीं',
    generalError: 'स्कैन श्रेणियों को पुनः प्राप्त करते समय एक त्रुटि हुई',
  },

  uploadScanCategories: {
    successfullyUploaded: 'स्कैन श्रेणियां सफलतापूर्वक अपलोड हो गईं',
    generalError: 'स्कैन श्रेणियां अपलोड करने में विफल',
  },

  sendUserNotification: {
    noTokenFound: 'कोई वैध एक्स्पो टोकन नहीं मिले। सूचनाएं भेजने में असमर्थ',
    generalError: 'सूचना भेजने में विफल',
  },
};
