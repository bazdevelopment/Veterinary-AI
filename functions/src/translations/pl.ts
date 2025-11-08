import { type ITranslation } from './types';

export const pl: ITranslation = {
  common: {
    welcome: 'Witamy',
    error: 'Wystąpił błąd',
    loading: 'Ładowanie...',
    noUserFound:
      'Nie masz uprawnień do złożenia tego żądania. Proszę się zalogować',
    userIdMissing:
      'Wygląda na to, że brakuje identyfikatora użytkownika. Podaj go, aby kontynuować',
    scanLimitReached:
      'Osiągnąłeś maksymalną dozwoloną liczbę skanów. Zaktualizuj swój plan, aby kontynuować korzystanie z usługi',
    mandatoryLanguage: 'Kod języka jest wymagany',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Wybierz pseudonim i zacznijmy!',
    userLoggedIn: 'Witamy z powrotem! Jesteś zalogowany.',
    accountCreated: 'Jesteś zalogowany! Miłego odkrywania!',
    error:
      'Ups! Coś poszło nie tak. Sprawdź swoje połączenie i spróbuj ponownie.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Pomyślnie zasubskrybowano!',
    updateSubscriptionError: 'Nie można zaktualizować subskrypcji użytkownika!',
  },
  updateUserLanguage: {
    updateSuccess: 'Język został pomyślnie zaktualizowany!',
    updateError:
      'Wystąpił nieoczekiwany błąd podczas aktualizowania języka. Spróbuj ponownie później',
  },
  updateUser: {
    successUpdatedUser: 'Użytkownik został pomyślnie zaktualizowany',
    updateUserError:
      'Nie można zaktualizować rekordu użytkownika. Proszę spróbować ponownie.',
  },
  getUserInfo: {
    successGetInfo: 'Pomyślnie pobrano dane informacyjne użytkownika',
    errorGetInfo:
      'Wystąpił nieoczekiwany błąd podczas pobierania informacji o użytkowniku. Spróbuj ponownie później',
  },
  getUserInfoById: {
    noUserInfoData:
      'Dokument użytkownika istnieje, ale nie ma dostępnych danych',
    getUserFetchError:
      'Wystąpił błąd podczas pobierania informacji o użytkowniku',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Podanie tokenu urządzenia jest obowiązkowe.',
    generalError: 'Błąd podczas zapisywania tokenu urządzenia',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Tytuł i treść powiadomienia są obowiązkowe.',
    generalError: 'Wystąpił błąd podczas przetwarzania powiadomień',
    generalErrorAdditional: 'Nie udało się wysłać globalnego powiadomienia',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Identyfikator urządzenia jest obowiązkowy',
    languageMandatory: 'Język jest obowiązkowy',
    deviceIdentified: 'Twoje urządzenie zostało pomyślnie zidentyfikowane',
    generalError: 'Wystąpił błąd podczas sprawdzania wersji próbnej urządzenia',
  },

  getUserNotification: {
    generalError: 'Nie udało się pobrać powiadomień użytkownika',
    generalErrorAdditional:
      'Wystąpił błąd podczas pobierania powiadomień użytkownika',
  },

  getScanCategories: {
    noCategoryFound: 'Nie znaleziono kategorii',
    generalError: 'Wystąpił błąd podczas pobierania kategorii skanowania',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategorie skanowania zostały pomyślnie przesłane',
    generalError: 'Nie udało się przesłać kategorii skanowania',
  },

  sendUserNotification: {
    noTokenFound:
      'Nie znaleziono prawidłowych tokenów Expo. Nie można wysyłać powiadomień',
    generalError: 'Nie udało się wysłać powiadomienia',
  },
};
