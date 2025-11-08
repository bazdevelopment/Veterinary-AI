import { type ITranslation } from './types';

export const sv: ITranslation = {
  common: {
    welcome: 'Välkommen',
    error: 'Ett fel uppstod',
    loading: 'Laddar...',
    noUserFound:
      'Du är inte behörig att göra denna förfrågan. Var god logga in',
    userIdMissing:
      'Det verkar som att användar-ID saknas. Var god ange det för att fortsätta',
    scanLimitReached:
      'Du har nått det maximala antalet scanningar tillåtet. Var god uppgradera din plan för att fortsätta använda tjänsten',
    mandatoryLanguage: 'Språkkoden är obligatorisk',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Välj ett smeknamn och låt oss komma igång!',
    userLoggedIn: 'Välkommen tillbaka! Du är inloggad.',
    accountCreated: 'Du är inloggad! Njut av att utforska!',
    error:
      'Hoppsan! Något gick fel. Var god kontrollera din anslutning och försök igen.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Framgångsrikt prenumererat!',
    updateSubscriptionError: 'Kunde inte uppdatera användarprenumeration!',
  },
  updateUserLanguage: {
    updateSuccess: 'Språket har uppdaterats framgångsrikt!',
    updateError:
      'Ett oväntat fel uppstod när språket uppdaterades. Var god försök igen senare',
  },
  updateUser: {
    successUpdatedUser: 'Användaren uppdaterades framgångsrikt',
    updateUserError:
      'Kunde inte uppdatera användarposten. Var god försök igen.',
  },
  getUserInfo: {
    successGetInfo: 'Användarinformationsdata hämtades framgångsrikt',
    errorGetInfo:
      'Ett oväntat fel uppstod när användarinformation hämtades. Var god försök igen senare',
  },
  getUserInfoById: {
    noUserInfoData:
      'Användardokumentet existerar, men ingen data är tillgänglig',
    getUserFetchError: 'Ett fel uppstod när användarinformation hämtades',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Att tillhandahålla en enhetstoken är obligatoriskt.',
    generalError: 'Fel vid lagring av enhetstoken',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Notifieringens titel och brödtext är obligatoriska.',
    generalError: 'Ett fel uppstod vid bearbetning av notifieringar',
    generalErrorAdditional: 'Misslyckades med att skicka global notifiering',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Enhets-ID är obligatoriskt',
    languageMandatory: 'Språk är obligatoriskt',
    deviceIdentified: 'Din enhet har identifierats framgångsrikt',
    generalError: 'Ett fel uppstod vid kontroll av enhetens provperiod',
  },

  getUserNotification: {
    generalError: 'Misslyckades med att hämta användarnotifieringar',
    generalErrorAdditional:
      'Ett fel uppstod när användarnotifieringar hämtades',
  },

  getScanCategories: {
    noCategoryFound: 'Inga kategorier hittades',
    generalError: 'Ett fel uppstod när skanningskategorier hämtades',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Skanningskategorier uppladdade framgångsrikt',
    generalError: 'Misslyckades med att ladda upp skanningskategorier',
  },

  sendUserNotification: {
    noTokenFound:
      'Inga giltiga Expo-tokens hittades. Kan inte skicka notifieringar',
    generalError: 'Misslyckades med att skicka notifiering',
  },
};
