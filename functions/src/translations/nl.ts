import { type ITranslation } from './types';

export const nl: ITranslation = {
  common: {
    welcome: 'Welkom',
    error: 'Er is een fout opgetreden',
    loading: 'Laden...',
    noUserFound:
      'U bent niet gemachtigd om dit verzoek te doen. Log alstublieft in',
    userIdMissing:
      'Het lijkt erop dat het gebruikers-ID ontbreekt. Geef dit op om door te gaan',
    scanLimitReached:
      'U heeft het maximaal toegestane aantal scans bereikt. Upgrade uw abonnement om de service te blijven gebruiken',
    mandatoryLanguage: 'De taalcode is verplicht',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Kies een bijnaam en laten we beginnen!',
    userLoggedIn: 'Welkom terug! U bent ingelogd.',
    accountCreated: 'U bent ingelogd! Veel plezier met verkennen!',
    error:
      'Oeps! Er is iets misgegaan. Controleer uw verbinding en probeer het opnieuw.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Succesvol geabonneerd!',
    updateSubscriptionError: 'Kan gebruikersabonnement niet bijwerken!',
  },
  updateUserLanguage: {
    updateSuccess: 'Taal succesvol bijgewerkt!',
    updateError:
      'Er is een onverwachte fout opgetreden bij het bijwerken van de taal. Probeer het later opnieuw',
  },
  updateUser: {
    successUpdatedUser: 'Gebruiker succesvol bijgewerkt',
    updateUserError:
      'Kan gebruikersrecord niet bijwerken. Probeer het opnieuw.',
  },
  getUserInfo: {
    successGetInfo: 'Gebruikersinformatie succesvol opgehaald',
    errorGetInfo:
      'Er is een onverwachte fout opgetreden bij het ophalen van gebruikersinformatie. Probeer het later opnieuw',
  },
  getUserInfoById: {
    noUserInfoData:
      'Het gebruikersdocument bestaat, maar er zijn geen gegevens beschikbaar',
    getUserFetchError:
      'Er is een fout opgetreden bij het ophalen van gebruikersinformatie',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Het verstrekken van een apparaattoken is verplicht.',
    generalError: 'Fout bij opslaan apparaattoken',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Notificatietitel en -body zijn verplicht.',
    generalError:
      'Er is een fout opgetreden bij het verwerken van notificaties',
    generalErrorAdditional: 'Kan globale notificatie niet verzenden',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Apparaat-ID is verplicht',
    languageMandatory: 'Taal is verplicht',
    deviceIdentified: 'Uw apparaat is succesvol geïdentificeerd',
    generalError:
      'Er is een fout opgetreden bij het controleren van apparaatproef',
  },

  getUserNotification: {
    generalError: 'Kan gebruikersnotificaties niet ophalen',
    generalErrorAdditional:
      'Er is een fout opgetreden bij het ophalen van gebruikersnotificaties',
  },

  getScanCategories: {
    noCategoryFound: 'Geen categorieën gevonden',
    generalError:
      'Er is een fout opgetreden bij het ophalen van scancategorieën',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Scancategorieën succesvol geüpload',
    generalError: 'Kan scancategorieën niet uploaden',
  },

  sendUserNotification: {
    noTokenFound:
      'Geen geldige Expo-tokens gevonden. Kan notificaties niet verzenden',
    generalError: 'Kan notificatie niet verzenden',
  },
};
