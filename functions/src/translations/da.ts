import { type ITranslation } from './types';

export const da: ITranslation = {
  common: {
    welcome: 'Velkommen',
    error: 'Der opstod en fejl',
    loading: 'Indlæser...',
    noUserFound: 'Du er ikke autoriseret til at foretage denne anmodning. Venligst log ind',
    userIdMissing: 'Det ser ud til, at bruger-id mangler. Venligst angiv det for at fortsætte',
    scanLimitReached: 'Du har nået det maksimale antal scanninger tilladt. Venligst opgrader din plan for at fortsætte med at bruge servicen',
    mandatoryLanguage: 'Sprogkoden er påkrævet',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Vælg et kaldenavn og lad os komme i gang!',
    userLoggedIn: 'Velkommen tilbage! Du er logget ind.',
    accountCreated: 'Du er logget ind! God fornøjelse med at udforske!',
    error: 'Ups! Noget gik galt. Venligst tjek din forbindelse og prøv igen.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Succesfuldt abonneret!',
    updateSubscriptionError: 'Kunne ikke opdatere brugerabonnement!',
  },
  updateUserLanguage: {
    updateSuccess: 'Sproget er succesfuldt opdateret!',
    updateError: 'Der opstod en uventet fejl under opdatering af sproget. Venligst prøv igen senere',
  },
  updateUser: {
    successUpdatedUser: 'Bruger succesfuldt opdateret',
    updateUserError: 'Kunne ikke opdatere brugerposten. Venligst prøv igen.',
  },
  getUserInfo: {
    successGetInfo: 'Brugerinfo data hentet succesfuldt',
    errorGetInfo: 'Der opstod en uventet fejl under hentning af brugerinformation. Venligst prøv igen senere',
  },
  getUserInfoById: {
    noUserInfoData: 'Brugerdokumentet eksisterer, men der er ingen data tilgængelige',
    getUserFetchError: 'Der opstod en fejl under hentning af brugerinformationen',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'At angive en enhedstoken er obligatorisk.',
    generalError: 'Fejl ved lagring af enhedstoken',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Notifikationens titel og brødtekst er obligatoriske.',
    generalError: 'Der opstod en fejl under behandling af notifikationer',
    generalErrorAdditional: 'Kunne ikke sende global notifikation',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Enheds-ID er obligatorisk',
    languageMandatory: 'Sprog er obligatorisk',
    deviceIdentified: 'Din enhed er blevet identificeret succesfuldt',
    generalError: 'Der opstod en fejl under tjek af enhedens prøveperiode',
  },

  getUserNotification: {
    generalError: 'Kunne ikke hente brugernotifikationer',
    generalErrorAdditional: 'Der opstod en fejl under hentning af brugernotifikationer',
  },

  getScanCategories: {
    noCategoryFound: 'Ingen kategorier fundet',
    generalError: 'Der opstod en fejl under hentning af skanningskategorier',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Skanningskategorier uploadet succesfuldt',
    generalError: 'Kunne ikke uploade skanningskategorier',
  },

  sendUserNotification: {
    noTokenFound: 'Ingen gyldige Expo-tokens fundet. Kan ikke sende notifikationer',
    generalError: 'Kunne ikke sende notifikation',
  },
};