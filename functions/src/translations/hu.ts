import { type ITranslation } from './types';

export const hu: ITranslation = {
  common: {
    welcome: 'Üdvözöljük',
    error: 'Hiba történt',
    loading: 'Betöltés...',
    noUserFound: 'Nincs jogosultsága ehhez a kéréshez. Kérjük, jelentkezzen be',
    userIdMissing:
      'Úgy tűnik, hiányzik a felhasználói azonosító. Kérjük, adja meg a folytatáshoz',
    scanLimitReached:
      'Elérte a megengedett maximális szkennelések számát. Kérjük, frissítse a csomagját a szolgáltatás további használatához',
    mandatoryLanguage: 'A nyelvi kód kötelező',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Válasszon becenevet, és kezdjük!',
    userLoggedIn: 'Üdv újra! Belépve.',
    accountCreated: 'Belépve! Élvezze a felfedezést!',
    error:
      'Hoppá! Valami hiba történt. Kérjük, ellenőrizze a kapcsolatot, és próbálja újra.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Sikeresen feliratkozva!',
    updateSubscriptionError:
      'Nem sikerült frissíteni a felhasználó előfizetését!',
  },
  updateUserLanguage: {
    updateSuccess: 'A nyelv sikeresen frissítve!',
    updateError:
      'Váratlan hiba történt a nyelv frissítése közben. Kérjük, próbálja újra később',
  },
  updateUser: {
    successUpdatedUser: 'Felhasználó sikeresen frissítve',
    updateUserError:
      'Nem sikerült frissíteni a felhasználói rekordot. Kérjük, próbálja újra.',
  },
  getUserInfo: {
    successGetInfo: 'Felhasználói adatok sikeresen lekérve',
    errorGetInfo:
      'Váratlan hiba történt a felhasználói információk lekérése közben. Kérjük, próbálja újra később',
  },
  getUserInfoById: {
    noUserInfoData: 'A felhasználói dokumentum létezik, de nincs elérhető adat',
    getUserFetchError:
      'Hiba történt a felhasználói információk lekérése közben',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Az eszköztoken megadása kötelező.',
    generalError: 'Hiba az eszköztoken tárolásakor',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Az értesítés címe és szövege kötelező.',
    generalError: 'Hiba történt az értesítések feldolgozása közben',
    generalErrorAdditional: 'Nem sikerült globális értesítést küldeni',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Az eszközazonosító kötelező',
    languageMandatory: 'A nyelv kötelező',
    deviceIdentified: 'Az eszköze sikeresen azonosítva',
    generalError: 'Hiba történt az eszközpróba ellenőrzése közben',
  },

  getUserNotification: {
    generalError: 'Nem sikerült lekérni a felhasználói értesítéseket',
    generalErrorAdditional:
      'Hiba történt a felhasználói értesítések lekérése közben',
  },

  getScanCategories: {
    noCategoryFound: 'Nem találhatók kategóriák',
    generalError: 'Hiba történt a szkennelési kategóriák lekérése közben',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Szkennelési kategóriák sikeresen feltöltve',
    generalError: 'Nem sikerült feltölteni a szkennelési kategóriákat',
  },

  sendUserNotification: {
    noTokenFound:
      'Nem találhatók érvényes Expo tokenek. Nem lehet értesítéseket küldeni',
    generalError: 'Nem sikerült értesítést küldeni',
  },
};
