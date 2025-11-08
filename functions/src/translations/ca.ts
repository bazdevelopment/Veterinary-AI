import { type ITranslation } from './types';

export const ca: ITranslation = {
  common: {
    welcome: 'Benvingut/da',
    error: "S'ha produït un error",
    loading: 'Carregant...',
    noUserFound:
      'No estàs autoritzat/ada per fer aquesta sol·licitud. Si us plau, inicia sessió',
    userIdMissing:
      "Sembla que falta l'identificador d'usuari. Si us plau, proporciona'l per continuar",
    scanLimitReached:
      "Has arribat al nombre màxim d'escaneigs permesos. Si us plau, actualitza el teu pla per continuar utilitzant el servei",
    mandatoryLanguage: "El codi d'idioma és obligatori",
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Tria un sobrenom i comencem!',
    userLoggedIn: 'Benvingut/da de nou! Ja ets dins.',
    accountCreated: 'Ja ets dins! Gaudeix explorant!',
    error:
      'Vaja! Alguna cosa ha sortit malament. Si us plau, comprova la teva connexió i torna a intentar-ho.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Subscripció realitzada correctament!',
    updateSubscriptionError:
      "No s'ha pogut actualitzar la subscripció de l'usuari!",
  },
  updateUserLanguage: {
    updateSuccess: 'Idioma actualitzat correctament!',
    updateError:
      "S'ha produït un error inesperat mentre s'actualitzava l'idioma. Si us plau, torna a intentar-ho més tard",
  },
  updateUser: {
    successUpdatedUser: 'Usuari actualitzat correctament',
    updateUserError:
      "No s'ha pogut actualitzar el registre de l'usuari. Si us plau, torna a intentar-ho.",
  },
  getUserInfo: {
    successGetInfo: "Dades d'informació de l'usuari obtingudes correctament",
    errorGetInfo:
      "S'ha produït un error inesperat mentre es recuperava la informació de l'usuari. Si us plau, torna a intentar-ho més tard",
  },
  getUserInfoById: {
    noUserInfoData:
      "El document d'usuari existeix, però no hi ha dades disponibles",
    getUserFetchError:
      "S'ha produït un error mentre es recuperava la informació de l'usuari",
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Proporcionar un token de dispositiu és obligatori.',
    generalError: 'Error emmagatzemant el token del dispositiu',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'El títol i el cos de la notificació són obligatoris.',
    generalError:
      "S'ha produït un error mentre es processaven les notificacions",
    generalErrorAdditional: "No s'ha pogut enviar la notificació global",
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: "L'identificador del dispositiu és obligatori",
    languageMandatory: "L'idioma és obligatori",
    deviceIdentified: "El teu dispositiu s'ha identificat correctament",
    generalError:
      "S'ha produït un error mentre es comprovava el període de prova del dispositiu",
  },

  getUserNotification: {
    generalError: "No s'han pogut recuperar les notificacions de l'usuari",
    generalErrorAdditional:
      "S'ha produït un error mentre es recuperaven les notificacions de l'usuari",
  },

  getScanCategories: {
    noCategoryFound: "No s'han trobat categories",
    generalError:
      "S'ha produït un error mentre es recuperaven les categories d'escaneig",
  },

  uploadScanCategories: {
    successfullyUploaded: "Categories d'escaneig pujades correctament",
    generalError: "No s'han pogut pujar les categories d'escaneig",
  },

  sendUserNotification: {
    noTokenFound:
      "No s'han trobat tokens vàlids d'Expo. No es poden enviar notificacions",
    generalError: "No s'ha pogut enviar la notificació",
  },
};
