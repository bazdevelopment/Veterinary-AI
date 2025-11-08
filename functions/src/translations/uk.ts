import { type ITranslation } from './types';

export const uk: ITranslation = {
  common: {
    welcome: 'Ласкаво просимо',
    error: 'Сталася помилка',
    loading: 'Завантаження...',
    noUserFound:
      'Ви не маєте дозволу на виконання цього запиту. Будь ласка, увійдіть',
    userIdMissing:
      'Схоже, відсутній ідентифікатор користувача. Будь ласка, надайте його для продовження',
    scanLimitReached:
      'Ви досягли максимальної дозволеної кількості сканувань. Будь ласка, оновіть свій тарифний план, щоб продовжити використання сервісу',
    mandatoryLanguage: "Код мови обов'язковий",
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Виберіть псевдонім і почнімо!',
    userLoggedIn: 'З поверненням! Ви увійшли.',
    accountCreated: 'Ви увійшли! Насолоджуйтесь дослідженням!',
    error:
      'Ой! Щось пішло не так. Будь ласка, перевірте підключення та спробуйте ще раз.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Успішно підписано!',
    updateSubscriptionError: 'Не вдалося оновити підписку користувача!',
  },
  updateUserLanguage: {
    updateSuccess: 'Мову успішно оновлено!',
    updateError:
      'Сталася неочікувана помилка під час оновлення мови. Будь ласка, спробуйте пізніше',
  },
  updateUser: {
    successUpdatedUser: 'Користувача успішно оновлено',
    updateUserError:
      'Не вдалося оновити запис користувача. Будь ласка, спробуйте ще раз.',
  },
  getUserInfo: {
    successGetInfo: 'Дані користувача успішно отримано',
    errorGetInfo:
      'Сталася неочікувана помилка під час отримання інформації про користувача. Будь ласка, спробуйте пізніше',
  },
  getUserInfoById: {
    noUserInfoData: 'Документ користувача існує, але дані відсутні',
    getUserFetchError:
      'Сталася помилка під час отримання інформації про користувача',
  },
  storeDeviceToken: {
    deviceTokenRequired: "Надання токену пристрою є обов'язковим.",
    generalError: 'Помилка збереження токену пристрою',
  },

  sendGlobalPushNotifications: {
    requiredParams: "Заголовок та тіло сповіщення є обов'язковими.",
    generalError: 'Сталася помилка під час обробки сповіщень',
    generalErrorAdditional: 'Не вдалося надіслати глобальне сповіщення',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: "Ідентифікатор пристрою є обов'язковим",
    languageMandatory: "Мова є обов'язковою",
    deviceIdentified: 'Ваш пристрій успішно ідентифіковано',
    generalError: 'Сталася помилка під час перевірки пробної версії пристрою',
  },

  getUserNotification: {
    generalError: 'Не вдалося отримати сповіщення користувача',
    generalErrorAdditional:
      'Сталася помилка під час отримання сповіщень користувача',
  },

  getScanCategories: {
    noCategoryFound: 'Категорії не знайдено',
    generalError: 'Сталася помилка під час отримання категорій сканування',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Категорії сканування успішно завантажено',
    generalError: 'Не вдалося завантажити категорії сканування',
  },

  sendUserNotification: {
    noTokenFound:
      'Дійсні токени Expo не знайдено. Неможливо надіслати сповіщення',
    generalError: 'Не вдалося надіслати сповіщення',
  },
};
