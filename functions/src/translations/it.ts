import { type ITranslation } from './types';

export const it: ITranslation = {
  common: {
    welcome: 'Benvenuto',
    error: 'Si è verificato un errore',
    loading: 'Caricamento...',
    noUserFound:
      'Non sei autorizzato a effettuare questa richiesta. Per favore accedi',
    userIdMissing:
      "Sembra che l'ID utente sia mancante. Per favore forniscilo per procedere",
    scanLimitReached:
      'Hai raggiunto il numero massimo di scansioni consentite. Per favore aggiorna il tuo piano per continuare a utilizzare il servizio',
    mandatoryLanguage: 'Il codice lingua è obbligatorio',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Scegli un nickname e iniziamo!',
    userLoggedIn: 'Bentornato! Sei dentro.',
    accountCreated: 'Sei dentro! Buona esplorazione!',
    error:
      'Ops! Qualcosa è andato storto. Per favore controlla la tua connessione e riprova.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Abbonamento effettuato con successo!',
    updateSubscriptionError: "Impossibile aggiornare l'abbonamento utente!",
  },
  updateUserLanguage: {
    updateSuccess: 'Lingua aggiornata con successo!',
    updateError:
      "Si è verificato un errore imprevisto durante l'aggiornamento della lingua. Per favore riprova più tardi",
  },
  updateUser: {
    successUpdatedUser: 'Utente aggiornato con successo',
    updateUserError:
      'Impossibile aggiornare il record utente. Per favore riprova.',
  },
  getUserInfo: {
    successGetInfo: 'Dati informazioni utente recuperati con successo',
    errorGetInfo:
      'Si è verificato un errore imprevisto durante il recupero delle informazioni utente. Per favore riprova più tardi',
  },
  getUserInfoById: {
    noUserInfoData:
      'Il documento utente esiste, ma non ci sono dati disponibili',
    getUserFetchError:
      'Si è verificato un errore durante il recupero delle informazioni utente',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Fornire un token del dispositivo è obbligatorio.',
    generalError: 'Errore durante il salvataggio del token del dispositivo',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Il titolo e il corpo della notifica sono obbligatori.',
    generalError:
      "Si è verificato un errore durante l'elaborazione delle notifiche",
    generalErrorAdditional: 'Impossibile inviare la notifica globale',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: "L'ID del dispositivo è obbligatorio",
    languageMandatory: 'La lingua è obbligatoria',
    deviceIdentified: 'Il tuo dispositivo è stato identificato con successo',
    generalError:
      'Si è verificato un errore durante il controllo del periodo di prova del dispositivo',
  },

  getUserNotification: {
    generalError: 'Impossibile recuperare le notifiche utente',
    generalErrorAdditional:
      'Si è verificato un errore durante il recupero delle notifiche utente',
  },

  getScanCategories: {
    noCategoryFound: 'Nessuna categoria trovata',
    generalError:
      'Si è verificato un errore durante il recupero delle categorie di scansione',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Categorie di scansione caricate con successo',
    generalError: 'Impossibile caricare le categorie di scansione',
  },

  sendUserNotification: {
    noTokenFound:
      'Nessun token Expo valido trovato. Impossibile inviare notifiche',
    generalError: 'Impossibile inviare la notifica',
  },
};
