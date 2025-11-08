import { type ITranslation } from './types';

export const es: ITranslation = {
  common: {
    welcome: 'Bienvenido',
    error: 'Ocurrió un error',
    loading: 'Cargando...',
    noUserFound:
      'No estás autorizado para realizar esta solicitud. Por favor, inicia sesión',
    userIdMissing:
      'Parece que falta el ID de usuario. Por favor, proporciónalo para continuar',
    scanLimitReached:
      'Has alcanzado el número máximo de escaneos permitidos. Por favor, actualiza tu plan para continuar usando el servicio',
    mandatoryLanguage: 'El código de idioma es obligatorio',
  },
  loginUserAnonymously: {
    mandatoryUsername: '¡Elige un apodo y empecemos!',
    userLoggedIn: '¡Bienvenido de nuevo! Ya estás dentro.',
    accountCreated: '¡Ya estás dentro! ¡Disfruta explorando!',
    error:
      '¡Vaya! Algo salió mal. Por favor, verifica tu conexión e inténtalo de nuevo.',
  },
  updateUserSubscription: {
    subscribeSuccess: '¡Suscripción exitosa!',
    updateSubscriptionError:
      '¡No se pudo actualizar la suscripción del usuario!',
  },
  updateUserLanguage: {
    updateSuccess: '¡Idioma actualizado correctamente!',
    updateError:
      'Ocurrió un error inesperado al actualizar el idioma. Por favor, inténtalo más tarde',
  },
  updateUser: {
    successUpdatedUser: 'Usuario actualizado correctamente',
    updateUserError:
      'No se pudo actualizar el registro del usuario. Por favor, inténtalo de nuevo.',
  },
  getUserInfo: {
    successGetInfo: 'Datos de información del usuario obtenidos correctamente',
    errorGetInfo:
      'Ocurrió un error inesperado al obtener la información del usuario. Por favor, inténtalo más tarde',
  },
  getUserInfoById: {
    noUserInfoData:
      'El documento de usuario existe, pero no hay datos disponibles',
    getUserFetchError: 'Ocurrió un error al obtener la información del usuario',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Proporcionar un token de dispositivo es obligatorio.',
    generalError: 'Error al almacenar el token del dispositivo',
  },

  sendGlobalPushNotifications: {
    requiredParams:
      'El título y el cuerpo de la notificación son obligatorios.',
    generalError: 'Ocurrió un error al procesar las notificaciones',
    generalErrorAdditional: 'Error al enviar notificación global',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'El ID del dispositivo es obligatorio',
    languageMandatory: 'El idioma es obligatorio',
    deviceIdentified: 'Tu dispositivo ha sido identificado correctamente',
    generalError: 'Ocurrió un error al verificar la prueba del dispositivo',
  },

  getUserNotification: {
    generalError: 'Error al obtener las notificaciones del usuario',
    generalErrorAdditional:
      'Ocurrió un error al obtener las notificaciones del usuario',
  },

  getScanCategories: {
    noCategoryFound: 'No se encontraron categorías',
    generalError: 'Ocurrió un error al recuperar las categorías de escaneo',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Categorías de escaneo cargadas correctamente',
    generalError: 'Error al cargar las categorías de escaneo',
  },

  sendUserNotification: {
    noTokenFound:
      'No se encontraron tokens de Expo válidos. No se pueden enviar notificaciones',
    generalError: 'Error al enviar la notificación',
  },
};
