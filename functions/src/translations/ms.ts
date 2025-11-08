import { type ITranslation } from './types';

export const ms: ITranslation = {
  common: {
    welcome: 'Selamat datang',
    error: 'Ralat telah berlaku',
    loading: 'Memuatkan...',
    noUserFound: 'Anda tidak dibenarkan membuat permintaan ini. Sila log masuk',
    userIdMissing:
      'Nampaknya ID pengguna tiada. Sila berikannya untuk meneruskan',
    scanLimitReached:
      'Anda telah mencapai bilangan imbasan maksimum yang dibenarkan. Sila naik taraf pelan anda untuk terus menggunakan perkhidmatan',
    mandatoryLanguage: 'Kod bahasa diperlukan',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Pilih nama samaran dan mari kita mulakan!',
    userLoggedIn: 'Selamat kembali! Anda telah log masuk.',
    accountCreated: 'Anda telah log masuk! Nikmati meneroka!',
    error:
      'Alamak! Ada yang tidak kena. Sila semak sambungan anda dan cuba lagi.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Berjaya melanggan!',
    updateSubscriptionError: 'Tidak dapat mengemas kini langganan pengguna!',
  },
  updateUserLanguage: {
    updateSuccess: 'Bahasa berjaya dikemas kini!',
    updateError:
      'Ralat tidak dijangka berlaku semasa mengemas kini bahasa. Sila cuba lagi nanti',
  },
  updateUser: {
    successUpdatedUser: 'Pengguna berjaya dikemas kini',
    updateUserError:
      'Tidak dapat mengemas kini rekod pengguna. Sila cuba lagi.',
  },
  getUserInfo: {
    successGetInfo: 'Berjaya mengambil data maklumat pengguna',
    errorGetInfo:
      'Ralat tidak dijangka berlaku semasa mengambil maklumat pengguna. Sila cuba lagi nanti',
  },
  getUserInfoById: {
    noUserInfoData: 'Dokumen pengguna wujud, tetapi tiada data tersedia',
    getUserFetchError: 'Ralat berlaku semasa mengambil maklumat pengguna',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Menyediakan token peranti adalah wajib.',
    generalError: 'Ralat menyimpan token peranti',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Tajuk dan badan pemberitahuan adalah wajib.',
    generalError: 'Ralat berlaku semasa memproses pemberitahuan',
    generalErrorAdditional: 'Gagal menghantar pemberitahuan global',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID Peranti adalah wajib',
    languageMandatory: 'Bahasa adalah wajib',
    deviceIdentified: 'Peranti anda telah berjaya dikenal pasti',
    generalError: 'Ralat berlaku semasa memeriksa percubaan peranti',
  },

  getUserNotification: {
    generalError: 'Gagal mengambil pemberitahuan pengguna',
    generalErrorAdditional:
      'Ralat berlaku semasa mengambil pemberitahuan pengguna',
  },

  getScanCategories: {
    noCategoryFound: 'Tiada kategori ditemui',
    generalError: 'Ralat berlaku semasa mengambil kategori imbasan',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategori imbasan berjaya dimuat naik',
    generalError: 'Gagal memuat naik kategori imbasan',
  },

  sendUserNotification: {
    noTokenFound:
      'Tiada token Expo yang sah ditemui. Tidak dapat menghantar pemberitahuan',
    generalError: 'Gagal menghantar pemberitahuan',
  },
};
