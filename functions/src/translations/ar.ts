import { type ITranslation } from './types';

export const ar: ITranslation = {
  common: {
    welcome: 'مرحباً',
    error: 'حدث خطأ',
    loading: 'جاري التحميل...',
    noUserFound: 'غير مصرح لك بإجراء هذا الطلب. يرجى تسجيل الدخول',
    userIdMissing: 'يبدو أن معرف المستخدم مفقود. يرجى تقديمه للمتابعة',
    scanLimitReached:
      'لقد وصلت إلى الحد الأقصى المسموح به للمسح. يرجى ترقية خطتك لمواصلة استخدام الخدمة',
    mandatoryLanguage: 'رمز اللغة مطلوب',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'اختر اسم مستعار ولنبدأ!',
    userLoggedIn: 'مرحباً بعودتك! لقد سجلت الدخول.',
    accountCreated: 'لقد سجلت الدخول! استمتع باستكشاف التطبيق!',
    error: 'عذراً! حدث خطأ ما. يرجى التحقق من اتصالك وإعادة المحاولة.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'تم الاشتراك بنجاح!',
    updateSubscriptionError: 'تعذر تحديث اشتراك المستخدم!',
  },
  updateUserLanguage: {
    updateSuccess: 'تم تحديث اللغة بنجاح!',
    updateError: 'حدث خطأ غير متوقع أثناء تحديث اللغة. يرجى المحاولة لاحقاً',
  },
  updateUser: {
    successUpdatedUser: 'تم تحديث المستخدم بنجاح',
    updateUserError: 'تعذر تحديث سجل المستخدم. يرجى المحاولة مرة أخرى.',
  },
  getUserInfo: {
    successGetInfo: 'تم جلب بيانات معلومات المستخدم بنجاح',
    errorGetInfo:
      'حدث خطأ غير متوقع أثناء جلب معلومات المستخدم. يرجى المحاولة لاحقاً',
  },
  getUserInfoById: {
    noUserInfoData: 'وثيقة المستخدم موجودة، ولكن لا توجد بيانات متاحة',
    getUserFetchError: 'حدث خطأ أثناء جلب معلومات المستخدم',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'تقديم رمز الجهاز إلزامي.',
    generalError: 'خطأ في تخزين رمز الجهاز',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'عنوان الإشعار والنص إلزاميان.',
    generalError: 'حدث خطأ أثناء معالجة الإشعارات',
    generalErrorAdditional: 'فشل إرسال الإشعار العام',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'معرف الجهاز إلزامي',
    languageMandatory: 'اللغة إلزامية',
    deviceIdentified: 'تم التعرف على جهازك بنجاح',
    generalError: 'حدث خطأ أثناء التحقق من تجربة الجهاز',
  },

  getUserNotification: {
    generalError: 'فشل جلب إشعارات المستخدم',
    generalErrorAdditional: 'حدث خطأ أثناء جلب إشعارات المستخدم',
  },

  getScanCategories: {
    noCategoryFound: 'لم يتم العثور على فئات',
    generalError: 'حدث خطأ أثناء استرجاع فئات المسح',
  },

  uploadScanCategories: {
    successfullyUploaded: 'تم تحميل فئات المسح بنجاح',
    generalError: 'فشل تحميل فئات المسح',
  },

  sendUserNotification: {
    noTokenFound: 'لم يتم العثور على رموز Expo صالحة. تعذر إرسال الإشعارات',
    generalError: 'فشل إرسال الإشعار',
  },
};
