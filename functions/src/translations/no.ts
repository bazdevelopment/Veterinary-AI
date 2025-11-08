import { type ITranslation } from './types';

export const no: ITranslation = {
  common: {
    welcome: 'Velkommen',
    error: 'En feil oppstod',
    loading: 'Laster...',
    noUserFound:
      'Du er ikke autorisert til å gjøre denne forespørselen. Vennligst logg inn',
    userIdMissing:
      'Det ser ut til at bruker-ID mangler. Vennligst oppgi den for å fortsette',
    scanLimitReached:
      'Du har nått maksimalt antall skanninger tillatt. Vennligst oppgrader abonnementet ditt for å fortsette å bruke tjenesten',
    mandatoryLanguage: 'Språkkoden er påkrevd',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Velg et kallenavn og la oss komme i gang!',
    userLoggedIn: 'Velkommen tilbake! Du er logget inn.',
    accountCreated: 'Du er logget inn! Nyt utforskningen!',
    error:
      'Ops! Noe gikk galt. Vennligst sjekk tilkoblingen din og prøv på nytt.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Vellykket abonnement!',
    updateSubscriptionError: 'Kunne ikke oppdatere brukerabonnement!',
  },
  updateUserLanguage: {
    updateSuccess: 'Språket er vellykket oppdatert!',
    updateError:
      'En uventet feil oppstod under oppdatering av språket. Vennligst prøv igjen senere',
  },
  updateUser: {
    successUpdatedUser: 'Bruker vellykket oppdatert',
    updateUserError: 'Kunne ikke oppdatere brukerposten. Vennligst prøv igjen.',
  },
  getUserInfo: {
    successGetInfo: 'Brukerinformasjonsdata hentet vellykket',
    errorGetInfo:
      'En uventet feil oppstod under henting av brukerinformasjon. Vennligst prøv igjen senere',
  },
  getUserInfoById: {
    noUserInfoData:
      'Brukerdokumentet eksisterer, men ingen data er tilgjengelig',
    getUserFetchError: 'En feil oppstod under henting av brukerinformasjon',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Å oppgi en enhetstoken er obligatorisk.',
    generalError: 'Feil ved lagring av enhetstoken',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Varslingstittel og -innhold er obligatorisk.',
    generalError: 'En feil oppstod under behandling av varsler',
    generalErrorAdditional: 'Kunne ikke sende globalt varsel',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Enhets-ID er obligatorisk',
    languageMandatory: 'Språk er obligatorisk',
    deviceIdentified: 'Enheten din har blitt identifisert vellykket',
    generalError: 'En feil oppstod under sjekk av enhetens prøveperiode',
  },

  getUserNotification: {
    generalError: 'Kunne ikke hente brukervarsler',
    generalErrorAdditional: 'En feil oppstod under henting av brukervarsler',
  },

  getScanCategories: {
    noCategoryFound: 'Ingen kategorier funnet',
    generalError: 'En feil oppstod under henting av skanningskategorier',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Skanningskategorier lastet opp vellykket',
    generalError: 'Kunne ikke laste opp skanningskategorier',
  },

  sendUserNotification: {
    noTokenFound: 'Ingen gyldige Expo-tokens funnet. Kan ikke sende varsler',
    generalError: 'Kunne ikke sende varsel',
  },
};
