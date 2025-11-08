import { type ITranslation } from './types';

export const ru: ITranslation = {
  common: {
    welcome: 'Добро пожаловать',
    error: 'Произошла ошибка',
    loading: 'Загрузка...',
    noUserFound:
      'У вас нет прав для выполнения этого запроса. Пожалуйста, войдите в систему',
    userIdMissing:
      'Похоже, отсутствует идентификатор пользователя. Укажите его для продолжения',
    scanLimitReached:
      'Вы достигли максимально допустимого количества сканирований. Обновите свой тарифный план, чтобы продолжить использование сервиса',
    mandatoryLanguage: 'Код языка обязателен',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Выберите псевдоним и начнем!',
    userLoggedIn: 'С возвращением! Вы вошли в систему.',
    accountCreated: 'Вы вошли в систему! Приятного исследования!',
    error:
      'Упс! Что-то пошло не так. Пожалуйста, проверьте подключение и попробуйте снова.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Успешно подписаны!',
    updateSubscriptionError: 'Не удалось обновить подписку пользователя!',
  },
  updateUserLanguage: {
    updateSuccess: 'Язык успешно обновлен!',
    updateError:
      'Произошла непредвиденная ошибка при обновлении языка. Пожалуйста, попробуйте позже',
  },
  updateUser: {
    successUpdatedUser: 'Пользователь успешно обновлен',
    updateUserError:
      'Не удалось обновить запись пользователя. Пожалуйста, попробуйте снова.',
  },
  getUserInfo: {
    successGetInfo: 'Данные пользователя успешно получены',
    errorGetInfo:
      'Произошла непредвиденная ошибка при получении информации о пользователе. Пожалуйста, попробуйте позже',
  },
  getUserInfoById: {
    noUserInfoData: 'Документ пользователя существует, но данные отсутствуют',
    getUserFetchError:
      'Произошла ошибка при получении информации о пользователе',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Указание токена устройства обязательно.',
    generalError: 'Ошибка сохранения токена устройства',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Заголовок и текст уведомления обязательны.',
    generalError: 'Произошла ошибка при обработке уведомлений',
    generalErrorAdditional: 'Не удалось отправить глобальное уведомление',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Идентификатор устройства обязателен',
    languageMandatory: 'Язык обязателен',
    deviceIdentified: 'Ваше устройство успешно идентифицировано',
    generalError: 'Произошла ошибка при проверке пробной версии устройства',
  },

  getUserNotification: {
    generalError: 'Не удалось получить пользовательские уведомления',
    generalErrorAdditional:
      'Произошла ошибка при получении пользовательских уведомлений',
  },

  getScanCategories: {
    noCategoryFound: 'Категории не найдены',
    generalError: 'Произошла ошибка при получении категорий сканирования',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Категории сканирования успешно загружены',
    generalError: 'Не удалось загрузить категории сканирования',
  },

  sendUserNotification: {
    noTokenFound:
      'Действительные токены Expo не найдены. Невозможно отправить уведомления',
    generalError: 'Не удалось отправить уведомление',
  },
};
