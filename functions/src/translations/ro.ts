import { type ITranslation } from './types';

export const ro: ITranslation = {
  common: {
    welcome: 'Bun venit',
    error: 'A apărut o eroare',
    loading: 'Se încarcă...',
    noUserFound:
      'Nu sunteți autorizat să faceți această solicitare. Vă rugăm să vă autentificați',
    userIdMissing:
      'Se pare că lipsește ID-ul utilizatorului. Vă rugăm să îl furnizați pentru a continua',
    scanLimitReached:
      'Ați atins numărul maxim de scanări permise. Vă rugăm să vă actualizați planul pentru a continua să utilizați serviciul',
    mandatoryLanguage: 'Codul de limbă este obligatoriu',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Alegeți un pseudonim și să începem!',
    userLoggedIn: 'Bun venit înapoi! Sunteți autentificat.',
    accountCreated: 'Sunteți autentificat! Bucurați-vă de explorare!',
    error:
      'Ups! Ceva nu a funcționat corect. Vă rugăm să vă verificați conexiunea și să încercați din nou.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Abonat cu succes!',
    updateSubscriptionError:
      'Nu s-a putut actualiza abonamentul utilizatorului!',
  },
  updateUserLanguage: {
    updateSuccess: 'Limba a fost actualizată cu succes!',
    updateError:
      'A apărut o eroare neașteptată la actualizarea limbii. Vă rugăm să încercați mai târziu',
  },
  updateUser: {
    successUpdatedUser: 'Utilizator actualizat cu succes',
    updateUserError:
      'Nu s-a putut actualiza înregistrarea utilizatorului. Vă rugăm să încercați din nou.',
  },
  getUserInfo: {
    successGetInfo:
      'Datele informaționale ale utilizatorului au fost preluate cu succes',
    errorGetInfo:
      'A apărut o eroare neașteptată la preluarea informațiilor utilizatorului. Vă rugăm să încercați mai târziu',
  },
  getUserInfoById: {
    noUserInfoData:
      'Documentul utilizatorului există, dar nu sunt disponibile date',
    getUserFetchError:
      'A apărut o eroare la preluarea informațiilor utilizatorului',
  },
  storeDeviceToken: {
    deviceTokenRequired:
      'Furnizarea unui token de dispozitiv este obligatorie.',
    generalError: 'Eroare la stocarea token-ului dispozitivului',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Titlul și corpul notificării sunt obligatorii.',
    generalError: 'A apărut o eroare la procesarea notificărilor',
    generalErrorAdditional: 'Trimiterea notificării globale a eșuat',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID-ul dispozitivului este obligatoriu',
    languageMandatory: 'Limba este obligatorie',
    deviceIdentified: 'Dispozitivul dvs. a fost identificat cu succes',
    generalError:
      'A apărut o eroare la verificarea perioadei de probă a dispozitivului',
  },

  getUserNotification: {
    generalError: 'Preluarea notificărilor utilizatorului a eșuat',
    generalErrorAdditional:
      'A apărut o eroare la preluarea notificărilor utilizatorului',
  },

  getScanCategories: {
    noCategoryFound: 'Nu s-au găsit categorii',
    generalError: 'A apărut o eroare la preluarea categoriilor de scanare',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Categoriile de scanare au fost încărcate cu succes',
    generalError: 'Încărcarea categoriilor de scanare a eșuat',
  },

  sendUserNotification: {
    noTokenFound:
      'Nu s-au găsit token-uri Expo valide. Nu se pot trimite notificări',
    generalError: 'Trimiterea notificării a eșuat',
  },
};
