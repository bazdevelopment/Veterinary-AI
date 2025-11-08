import { type ITranslation } from './types';

export const sk: ITranslation = {
  common: {
    welcome: 'Vitajte',
    error: 'Vyskytla sa chyba',
    loading: 'Načítava sa...',
    noUserFound:
      'Nie ste oprávnení vykonať túto požiadavku. Prosím, prihláste sa',
    userIdMissing:
      'Vyzerá to, že chýba ID používateľa. Pre pokračovanie ho zadajte',
    scanLimitReached:
      'Dosiahli ste maximálny povolený počet skenovaní. Pre pokračovanie v používaní služby si prosím inovujte svoj plán',
    mandatoryLanguage: 'Kód jazyka je povinný',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Zvoľte prezývku a poďme začať!',
    userLoggedIn: 'Vitajte späť! Ste prihlásený.',
    accountCreated: 'Ste prihlásený! Užite si prehliadanie!',
    error:
      'Ops! Niečo sa pokazilo. Skontrolujte prosím pripojenie a skúste to znova.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Úspešne prihlásené k odberu!',
    updateSubscriptionError:
      'Nie je možné aktualizovať predplatné používateľa!',
  },
  updateUserLanguage: {
    updateSuccess: 'Jazyk bol úspešne aktualizovaný!',
    updateError:
      'Pri aktualizácii jazyka sa vyskytla neočakávaná chyba. Skúste to prosím neskôr',
  },
  updateUser: {
    successUpdatedUser: 'Používateľ bol úspešne aktualizovaný',
    updateUserError:
      'Nie je možné aktualizovať záznam používateľa. Prosím skúste to znova.',
  },
  getUserInfo: {
    successGetInfo: 'Údaje používateľa boli úspešne načítané',
    errorGetInfo:
      'Pri načítaní informácií o používateľovi sa vyskytla neočakávaná chyba. Skúste to prosím neskôr',
  },
  getUserInfoById: {
    noUserInfoData:
      'Dokument používateľa existuje, ale nie sú k dispozícii žiadne údaje',
    getUserFetchError:
      'Pri načítaní informácií o používateľovi sa vyskytla chyba',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Poskytnutie tokenu zariadenia je povinné.',
    generalError: 'Chyba pri ukladaní tokenu zariadenia',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Nadpis a text notifikácie sú povinné.',
    generalError: 'Pri spracovaní notifikácií sa vyskytla chyba',
    generalErrorAdditional: 'Nepodarilo sa odoslať globálnu notifikáciu',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID zariadenia je povinné',
    languageMandatory: 'Jazyk je povinný',
    deviceIdentified: 'Vaše zariadenie bolo úspešne identifikované',
    generalError: 'Pri kontrole skúšobnej verzie zariadenia sa vyskytla chyba',
  },

  getUserNotification: {
    generalError: 'Nepodarilo sa načítať používateľské notifikácie',
    generalErrorAdditional:
      'Pri načítaní používateľských notifikácií sa vyskytla chyba',
  },

  getScanCategories: {
    noCategoryFound: 'Nenašli sa žiadne kategórie',
    generalError: 'Pri načítaní kategórií skenovania sa vyskytla chyba',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategórie skenovania boli úspešne nahrané',
    generalError: 'Nepodarilo sa nahrať kategórie skenovania',
  },

  sendUserNotification: {
    noTokenFound:
      'Nenašli sa žiadne platné Expo tokeny. Nie je možné odoslať notifikácie',
    generalError: 'Nepodarilo sa odoslať notifikáciu',
  },
};
