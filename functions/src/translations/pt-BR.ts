import { type ITranslation } from './types';

export const pt: ITranslation = {
  common: {
    welcome: 'Bem-vindo',
    error: 'Ocorreu um erro',
    loading: 'A carregar...',
    noUserFound:
      'Não está autorizado a fazer este pedido. Por favor, inicie sessão',
    userIdMissing:
      'Parece que falta o ID do utilizador. Por favor, forneça-o para continuar',
    scanLimitReached:
      'Atingiu o número máximo de digitalizações permitidas. Por favor, atualize o seu plano para continuar a usar o serviço',
    mandatoryLanguage: 'O código de idioma é obrigatório',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Escolha um nickname e vamos começar!',
    userLoggedIn: 'Bem-vindo de volta! Está dentro.',
    accountCreated: 'Está dentro! Desfrute da exploração!',
    error:
      'Ups! Algo correu mal. Por favor, verifique a sua ligação e tente novamente.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Subscrição efetuada com sucesso!',
    updateSubscriptionError:
      'Não foi possível atualizar a subscrição do utilizador!',
  },
  updateUserLanguage: {
    updateSuccess: 'Idioma atualizado com sucesso!',
    updateError:
      'Ocorreu um erro inesperado ao atualizar o idioma. Por favor, tente novamente mais tarde',
  },
  updateUser: {
    successUpdatedUser: 'Utilizador atualizado com sucesso',
    updateUserError:
      'Não foi possível atualizar o registo do utilizador. Por favor, tente novamente.',
  },
  getUserInfo: {
    successGetInfo: 'Dados de informação do utilizador obtidos com sucesso',
    errorGetInfo:
      'Ocorreu um erro inesperado ao obter informações do utilizador. Por favor, tente novamente mais tarde',
  },
  getUserInfoById: {
    noUserInfoData:
      'O documento do utilizador existe, mas não há dados disponíveis',
    getUserFetchError: 'Ocorreu um erro ao obter informações do utilizador',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Fornecer um token do dispositivo é obrigatório.',
    generalError: 'Erro ao armazenar token do dispositivo',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'O título e o corpo da notificação são obrigatórios.',
    generalError: 'Ocorreu um erro ao processar notificações',
    generalErrorAdditional: 'Falha ao enviar notificação global',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID do dispositivo é obrigatório',
    languageMandatory: 'Idioma é obrigatório',
    deviceIdentified: 'O seu dispositivo foi identificado com sucesso',
    generalError:
      'Ocorreu um erro ao verificar o período de teste do dispositivo',
  },

  getUserNotification: {
    generalError: 'Falha ao obter notificações do utilizador',
    generalErrorAdditional:
      'Ocorreu um erro ao obter notificações do utilizador',
  },

  getScanCategories: {
    noCategoryFound: 'Nenhuma categoria encontrada',
    generalError: 'Ocorreu um erro ao obter categorias de digitalização',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Categorias de digitalização carregadas com sucesso',
    generalError: 'Falha ao carregar categorias de digitalização',
  },

  sendUserNotification: {
    noTokenFound:
      'Nenhum token Expo válido encontrado. Não é possível enviar notificações',
    generalError: 'Falha ao enviar notificação',
  },
};
