import { type ITranslation } from './types';

export const de: ITranslation = {
  common: {
    welcome: 'Willkommen',
    error: 'Ein Fehler ist aufgetreten',
    loading: 'Lädt...',
    noUserFound:
      'Sie sind nicht berechtigt, diese Anfrage zu stellen. Bitte melden Sie sich an',
    userIdMissing:
      'Es scheint, dass die Benutzer-ID fehlt. Bitte geben Sie sie an, um fortzufahren',
    scanLimitReached:
      'Sie haben die maximale Anzahl erlaubter Scans erreicht. Bitte upgraden Sie Ihren Plan, um den Service weiter nutzen zu können',
    mandatoryLanguage: 'Der Sprachcode ist erforderlich',
  },
  loginUserAnonymously: {
    mandatoryUsername: "Wählen Sie einen Spitznamen und los geht's!",
    userLoggedIn: 'Willkommen zurück! Sie sind angemeldet.',
    accountCreated: 'Sie sind angemeldet! Viel Spaß beim Erkunden!',
    error:
      'Hoppla! Etwas ist schief gelaufen. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Erfolgreich abonniert!',
    updateSubscriptionError:
      'Benutzerabonnement konnte nicht aktualisiert werden!',
  },
  updateUserLanguage: {
    updateSuccess: 'Sprache erfolgreich aktualisiert!',
    updateError:
      'Beim Aktualisieren der Sprache ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut',
  },
  updateUser: {
    successUpdatedUser: 'Benutzer erfolgreich aktualisiert',
    updateUserError:
      'Benutzerdatensatz konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut.',
  },
  getUserInfo: {
    successGetInfo: 'Benutzerinformationen erfolgreich abgerufen',
    errorGetInfo:
      'Beim Abrufen der Benutzerinformationen ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut',
  },
  getUserInfoById: {
    noUserInfoData:
      'Das Benutzerdokument existiert, aber es sind keine Daten verfügbar',
    getUserFetchError:
      'Beim Abrufen der Benutzerinformationen ist ein Fehler aufgetreten',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Die Angabe eines Device-Tokens ist obligatorisch.',
    generalError: 'Fehler beim Speichern des Device-Tokens',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Benachrichtigungstitel und -text sind obligatorisch.',
    generalError:
      'Beim Verarbeiten der Benachrichtigungen ist ein Fehler aufgetreten',
    generalErrorAdditional:
      'Globale Benachrichtigung konnte nicht gesendet werden',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Geräte-ID ist erforderlich',
    languageMandatory: 'Sprache ist erforderlich',
    deviceIdentified: 'Ihr Gerät wurde erfolgreich identifiziert',
    generalError:
      'Beim Überprüfen der Gerätetestversion ist ein Fehler aufgetreten',
  },

  getUserNotification: {
    generalError: 'Benutzerbenachrichtigungen konnten nicht abgerufen werden',
    generalErrorAdditional:
      'Beim Abrufen der Benutzerbenachrichtigungen ist ein Fehler aufgetreten',
  },

  getScanCategories: {
    noCategoryFound: 'Keine Kategorien gefunden',
    generalError: 'Beim Abrufen der Scan-Kategorien ist ein Fehler aufgetreten',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Scan-Kategorien erfolgreich hochgeladen',
    generalError: 'Scan-Kategorien konnten nicht hochgeladen werden',
  },

  sendUserNotification: {
    noTokenFound:
      'Keine gültigen Expo-Tokens gefunden. Benachrichtigungen können nicht gesendet werden',
    generalError: 'Benachrichtigung konnte nicht gesendet werden',
  },
};
