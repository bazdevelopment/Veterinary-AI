import { type ITranslation } from './types';

export const id: ITranslation = {
  common: {
    welcome: 'Selamat datang',
    error: 'Terjadi kesalahan',
    loading: 'Memuat...',
    noUserFound:
      'Anda tidak berwenang untuk melakukan permintaan ini. Silakan masuk',
    userIdMissing:
      'Sepertinya ID pengguna hilang. Silakan berikan untuk melanjutkan',
    scanLimitReached:
      'Anda telah mencapai jumlah pemindaian maksimum yang diizinkan. Silakan upgrade paket Anda untuk terus menggunakan layanan',
    mandatoryLanguage: 'Kode bahasa wajib diisi',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Pilih nama panggilan dan mari kita mulai!',
    userLoggedIn: 'Selamat datang kembali! Anda sudah masuk.',
    accountCreated: 'Anda sudah masuk! Selamat menjelajah!',
    error:
      'Ups! Ada yang tidak beres. Silakan periksa koneksi Anda dan coba lagi.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Berhasil berlangganan!',
    updateSubscriptionError: 'Tidak dapat memperbarui langganan pengguna!',
  },
  updateUserLanguage: {
    updateSuccess: 'Bahasa berhasil diperbarui!',
    updateError:
      'Terjadi kesalahan tak terduga saat memperbarui bahasa. Silakan coba lagi nanti',
  },
  updateUser: {
    successUpdatedUser: 'Pengguna berhasil diperbarui',
    updateUserError:
      'Tidak dapat memperbarui catatan pengguna. Silakan coba lagi.',
  },
  getUserInfo: {
    successGetInfo: 'Berhasil mengambil data info pengguna',
    errorGetInfo:
      'Terjadi kesalahan tak terduga saat mengambil informasi pengguna. Silakan coba lagi nanti',
  },
  getUserInfoById: {
    noUserInfoData: 'Dokumen pengguna ada, tetapi tidak ada data yang tersedia',
    getUserFetchError: 'Terjadi kesalahan saat mengambil informasi pengguna',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Memberikan token perangkat adalah wajib.',
    generalError: 'Kesalahan menyimpan token perangkat',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Judul dan isi notifikasi wajib diisi.',
    generalError: 'Terjadi kesalahan saat memproses notifikasi',
    generalErrorAdditional: 'Gagal mengirim notifikasi global',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID perangkat wajib diisi',
    languageMandatory: 'Bahasa wajib diisi',
    deviceIdentified: 'Perangkat Anda telah berhasil diidentifikasi',
    generalError: 'Terjadi kesalahan saat memeriksa percobaan perangkat',
  },

  getUserNotification: {
    generalError: 'Gagal mengambil notifikasi pengguna',
    generalErrorAdditional:
      'Terjadi kesalahan saat mengambil notifikasi pengguna',
  },

  getScanCategories: {
    noCategoryFound: 'Tidak ada kategori ditemukan',
    generalError: 'Terjadi kesalahan saat mengambil kategori pindaian',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategori pindaian berhasil diunggah',
    generalError: 'Gagal mengunggah kategori pindaian',
  },

  sendUserNotification: {
    noTokenFound:
      'Tidak ditemukan token Expo yang valid. Tidak dapat mengirim notifikasi',
    generalError: 'Gagal mengirim notifikasi',
  },
};
