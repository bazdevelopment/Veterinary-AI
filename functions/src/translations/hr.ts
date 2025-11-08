import { type ITranslation } from './types';

export const hr: ITranslation = {
  common: {
    welcome: 'Dobrodošli',
    error: 'Došlo je do pogreške',
    loading: 'Učitavanje...',
    noUserFound: 'Niste ovlašteni za ovaj zahtjev. Molimo prijavite se',
    userIdMissing:
      'Čini se da nedostaje korisnički ID. Molimo unesite ga za nastavak',
    scanLimitReached:
      'Dosegli ste maksimalni broj dopuštenih skeniranja. Molimo nadogradite svoj plan za nastavak korištenja usluge',
    mandatoryLanguage: 'Jezični kod je obavezan',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Odaberite nadimak i krenimo!',
    userLoggedIn: 'Dobrodošli natrag! Ulogovani ste.',
    accountCreated: 'Ulogovani ste! Uživajte u istraživanju!',
    error:
      'Ups! Nešto je pošlo po zlu. Molimo provjerite svoju vezu i pokušajte ponovno.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Uspješno pretplaćeni!',
    updateSubscriptionError: 'Nije moguće ažurirati korisničku pretplatu!',
  },
  updateUserLanguage: {
    updateSuccess: 'Jezik je uspješno ažuriran!',
    updateError:
      'Došlo je do neočekivane pogreške prilikom ažuriranja jezika. Molimo pokušajte ponovno kasnije',
  },
  updateUser: {
    successUpdatedUser: 'Korisnik uspješno ažuriran',
    updateUserError:
      'Nije moguće ažurirati korisnički zapis. Molimo pokušajte ponovno.',
  },
  getUserInfo: {
    successGetInfo: 'Korisnički podaci uspješno dohvaćeni',
    errorGetInfo:
      'Došlo je do neočekivane pogreške prilikom dohvaćanja korisničkih informacija. Molimo pokušajte ponovno kasnije',
  },
  getUserInfoById: {
    noUserInfoData: 'Korisnički dokument postoji, ali nema dostupnih podataka',
    getUserFetchError:
      'Došlo je do pogreške prilikom dohvaćanja korisničkih informacija',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Unos tokena uređaja je obavezan.',
    generalError: 'Pogreška pri pohrani tokena uređaja',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Naslov i tijelo obavijesti su obavezni.',
    generalError: 'Došlo je do pogreške prilikom obrade obavijesti',
    generalErrorAdditional: 'Slanje globalne obavijesti nije uspjelo',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID uređaja je obavezan',
    languageMandatory: 'Jezik je obavezan',
    deviceIdentified: 'Vaš uređaj je uspješno identificiran',
    generalError:
      'Došlo je do pogreške prilikom provjere probnog razdoblja uređaja',
  },

  getUserNotification: {
    generalError: 'Dohvaćanje korisničkih obavijesti nije uspjelo',
    generalErrorAdditional:
      'Došlo je do pogreške prilikom dohvaćanja korisničkih obavijesti',
  },

  getScanCategories: {
    noCategoryFound: 'Nema pronađenih kategorija',
    generalError:
      'Došlo je do pogreške prilikom dohvaćanja kategorija skeniranja',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategorije skeniranja uspješno učitane',
    generalError: 'Učitavanje kategorija skeniranja nije uspjelo',
  },

  sendUserNotification: {
    noTokenFound:
      'Nije pronađen nijedan valjani Expo token. Nije moguće slati obavijesti',
    generalError: 'Slanje obavijesti nije uspjelo',
  },
};
