import { type ITranslation } from './types';

export const fi: ITranslation = {
  common: {
    welcome: 'Tervetuloa',
    error: 'Tapahtui virhe',
    loading: 'Ladataan...',
    noUserFound:
      'Sinulla ei ole oikeutta tehdä tätä pyyntöä. Ole hyvä ja kirjaudu sisään',
    userIdMissing: 'Käyttäjätunnus puuttuu. Anna se jatkaaksesi',
    scanLimitReached:
      'Olet saavuttanut sallitun skannausten enimmäismäärän. Päivitä suunnitelmasi jatkaaksesi palvelun käyttöä',
    mandatoryLanguage: 'Kielikoodi on pakollinen',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Valitse nimimerkki ja aloitetaan!',
    userLoggedIn: 'Tervetuloa takaisin! Olet kirjautunut sisään.',
    accountCreated: 'Olet kirjautunut sisään! Nauti tutkimisesta!',
    error: 'Hups! Jotain meni pieleen. Tarkista yhteys ja yritä uudelleen.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Tilaus onnistui!',
    updateSubscriptionError: 'Käyttäjän tilausta ei voitu päivittää!',
  },
  updateUserLanguage: {
    updateSuccess: 'Kieli päivitetty onnistuneesti!',
    updateError:
      'Kielen päivityksessä tapahtui odottamaton virhe. Yritä myöhemmin uudelleen',
  },
  updateUser: {
    successUpdatedUser: 'Käyttäjä päivitetty onnistuneesti',
    updateUserError: 'Käyttäjätietuetta ei voitu päivittää. Yritä uudelleen.',
  },
  getUserInfo: {
    successGetInfo: 'Käyttäjätiedot haettu onnistuneesti',
    errorGetInfo:
      'Käyttäjätietojen haussa tapahtui odottamaton virhe. Yritä myöhemmin uudelleen',
  },
  getUserInfoById: {
    noUserInfoData:
      'Käyttäjäasiakirja on olemassa, mutta tietoja ei ole saatavilla',
    getUserFetchError: 'Käyttäjätietojen haussa tapahtui virhe',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Laitetunnuksen antaminen on pakollista.',
    generalError: 'Virhe tallentaessa laitetunnusta',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Ilmoituksen otsikko ja sisältö ovat pakollisia.',
    generalError: 'Ilmoituksia käsiteltäessä tapahtui virhe',
    generalErrorAdditional:
      'Maailmanlaajuisen ilmoituksen lähettäminen epäonnistui',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Laitetunniste on pakollinen',
    languageMandatory: 'Kieli on pakollinen',
    deviceIdentified: 'Laitteesi on tunnistettu onnistuneesti',
    generalError: 'Laitteen kokeilujakson tarkistuksessa tapahtui virhe',
  },

  getUserNotification: {
    generalError: 'Käyttäjäilmoituksia ei voitu hakea',
    generalErrorAdditional: 'Käyttäjäilmoituksia haettaessa tapahtui virhe',
  },

  getScanCategories: {
    noCategoryFound: 'Ei löytynyt kategorioita',
    generalError: 'Skannauskategorioita haettaessa tapahtui virhe',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Skannauskategoriat ladattu onnistuneesti',
    generalError: 'Skannauskategorioiden lataaminen epäonnistui',
  },

  sendUserNotification: {
    noTokenFound:
      'Ei löytynyt kelvollisia Expo-tunnisteita. Ilmoituksia ei voi lähettää',
    generalError: 'Ilmoituksen lähettäminen epäonnistui',
  },
};
