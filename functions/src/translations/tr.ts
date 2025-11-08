import { type ITranslation } from './types';

export const tr: ITranslation = {
  common: {
    welcome: 'Hoş geldiniz',
    error: 'Bir hata oluştu',
    loading: 'Yükleniyor...',
    noUserFound: 'Bu isteği yapmaya yetkiniz yok. Lütfen giriş yapın',
    userIdMissing:
      'Görünüşe göre kullanıcı kimliği eksik. Devam etmek için lütfen sağlayın',
    scanLimitReached:
      'İzin verilen maksimum tarama sayısına ulaştınız. Hizmeti kullanmaya devam etmek için lütfen planınızı yükseltin',
    mandatoryLanguage: 'Dil kodu zorunludur',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Bir rumuz seçin ve başlayalım!',
    userLoggedIn: 'Tekrar hoş geldiniz! Giriş yaptınız.',
    accountCreated: 'Giriş yaptınız! Keşfetmenin tadını çıkarın!',
    error:
      'Ups! Bir şeyler yanlış gitti. Lütfen bağlantınızı kontrol edin ve tekrar deneyin.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Başarıyla abone olundu!',
    updateSubscriptionError: 'Kullanıcı aboneliği güncellenemedi!',
  },
  updateUserLanguage: {
    updateSuccess: 'Dil başarıyla güncellendi!',
    updateError:
      'Dil güncellenirken beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin',
  },
  updateUser: {
    successUpdatedUser: 'Kullanıcı başarıyla güncellendi',
    updateUserError: 'Kullanıcı kaydı güncellenemedi. Lütfen tekrar deneyin.',
  },
  getUserInfo: {
    successGetInfo: 'Kullanıcı bilgileri başarıyla alındı',
    errorGetInfo:
      'Kullanıcı bilgileri alınırken beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin',
  },
  getUserInfoById: {
    noUserInfoData: 'Kullanıcı belgesi mevcut, ancak hiç veri yok',
    getUserFetchError: 'Kullanıcı bilgileri alınırken bir hata oluştu',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Cihaz tokenı sağlamak zorunludur.',
    generalError: 'Cihaz tokenı kaydedilirken hata',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Bildirim başlığı ve gövdesi zorunludur.',
    generalError: 'Bildirimler işlenirken bir hata oluştu',
    generalErrorAdditional: 'Global bildirim gönderilemedi',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Cihaz kimliği zorunludur',
    languageMandatory: 'Dil zorunludur',
    deviceIdentified: 'Cihazınız başarıyla tanımlandı',
    generalError: 'Cihaz denemesi kontrol edilirken bir hata oluştu',
  },

  getUserNotification: {
    generalError: 'Kullanıcı bildirimleri alınamadı',
    generalErrorAdditional: 'Kullanıcı bildirimleri alınırken bir hata oluştu',
  },

  getScanCategories: {
    noCategoryFound: 'Hiç kategori bulunamadı',
    generalError: 'Tarama kategorileri alınırken bir hata oluştu',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Tarama kategorileri başarıyla yüklendi',
    generalError: 'Tarama kategorileri yüklenemedi',
  },

  sendUserNotification: {
    noTokenFound:
      'Geçerli Expo tokenları bulunamadı. Bildirimler gönderilemiyor',
    generalError: 'Bildirim gönderilemedi',
  },
};
