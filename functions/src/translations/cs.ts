import { type ITranslation } from './types';

export const cs: ITranslation = {
  common: {
    welcome: 'Vítejte',
    error: 'Došlo k chybě',
    loading: 'Načítání...',
    noUserFound:
      'Nejste oprávněni provést tento požadavek. Přihlaste se prosím',
    userIdMissing:
      'Vypadá to, že chybí ID uživatele. Pro pokračování jej prosím zadejte',
    scanLimitReached:
      'Dosáhli jste maximálního povoleného počtu skenů. Pro pokračování v používání služby si prosím upgradujte svůj plán',
    mandatoryLanguage: 'Kód jazyka je povinný',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Zvolte přezdívku a můžeme začít!',
    userLoggedIn: 'Vítejte zpět! Jste přihlášeni.',
    accountCreated: 'Jste přihlášeni! Užijte si prozkoumávání!',
    error:
      'Jejda! Něco se pokazilo. Zkontrolujte prosím své připojení a zkuste to znovu.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Úspěšně přihlášeno k odběru!',
    updateSubscriptionError: 'Nelze aktualizovat předplatné uživatele!',
  },
  updateUserLanguage: {
    updateSuccess: 'Jazyk byl úspěšně aktualizován!',
    updateError:
      'Při aktualizaci jazyka došlo k neočekávané chybě. Zkuste to prosím později',
  },
  updateUser: {
    successUpdatedUser: 'Uživatel úspěšně aktualizován',
    updateUserError:
      'Nelze aktualizovat záznam uživatele. Zkuste to prosím znovu.',
  },
  getUserInfo: {
    successGetInfo: 'Data uživatele byla úspěšně načtena',
    errorGetInfo:
      'Při načítání informací o uživateli došlo k neočekávané chybě. Zkuste to prosím později',
  },
  getUserInfoById: {
    noUserInfoData:
      'Dokument uživatele existuje, ale nejsou k dispozici žádná data',
    getUserFetchError: 'Při načítání informací o uživateli došlo k chybě',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Poskytnutí tokenu zařízení je povinné.',
    generalError: 'Chyba při ukládání tokenu zařízení',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Nadpis a tělo notifikace jsou povinné.',
    generalError: 'Při zpracování notifikací došlo k chybě',
    generalErrorAdditional: 'Nepodařilo se odeslat globální notifikaci',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID zařízení je povinné',
    languageMandatory: 'Jazyk je povinný',
    deviceIdentified: 'Vaše zařízení bylo úspěšně identifikováno',
    generalError: 'Při kontrole zkušební verze zařízení došlo k chybě',
  },

  getUserNotification: {
    generalError: 'Nepodařilo se načíst uživatelské notifikace',
    generalErrorAdditional:
      'Při načítání uživatelských notifikací došlo k chybě',
  },

  getScanCategories: {
    noCategoryFound: 'Nebyly nalezeny žádné kategorie',
    generalError: 'Při načítání kategorií skenování došlo k chybě',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategorie skenování byly úspěšně nahrány',
    generalError: 'Nepodařilo se nahrát kategorie skenování',
  },

  sendUserNotification: {
    noTokenFound:
      'Nebyly nalezeny žádné platné Expo tokeny. Nelze odeslat notifikace',
    generalError: 'Nepodařilo se odeslat notifikaci',
  },
};
