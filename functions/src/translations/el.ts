import { type ITranslation } from './types';

export const el: ITranslation = {
  common: {
    welcome: 'Καλώς ήρθατε',
    error: 'Προέκυψε σφάλμα',
    loading: 'Φόρτωση...',
    noUserFound:
      'Δεν έχετε εξουσιοδότηση να κάνετε αυτό το αίτημα. Παρακαλώ συνδεθείτε',
    userIdMissing:
      'Φαίνεται ότι λείπει το αναγνωριστικό χρήστη. Παρακαλώ δώστε το για να συνεχίσετε',
    scanLimitReached:
      'Φτάσατε τον μέγιστο αριθμό σαρώσεων που επιτρέπονται. Παρακαλώ αναβαθμίστε το πλάνο σας για να συνεχίσετε να χρησιμοποιείτε την υπηρεσία',
    mandatoryLanguage: 'Ο κωδικός γλώσσας απαιτείται',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Επιλέξτε ένα ψευδώνυμο και ας ξεκινήσουμε!',
    userLoggedIn: 'Καλώς ήρθατε πίσω! Βρίσκεστε μέσα.',
    accountCreated: 'Βρίσκεστε μέσα! Απολαύστε την εξερεύνηση!',
    error:
      'Ωχ! Κάτι πήγε στραβά. Παρακαλώ ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Επιτυχής εγγραφή!',
    updateSubscriptionError:
      'Δεν ήταν δυνατή η ενημέρωση της συνδρομής χρήστη!',
  },
  updateUserLanguage: {
    updateSuccess: 'Η γλώσσα ενημερώθηκε με επιτυχία!',
    updateError:
      'Προέκυψε απρόσμενο σφάλμα κατά την ενημέρωση της γλώσσας. Παρακαλώ δοκιμάστε ξανά αργότερα',
  },
  updateUser: {
    successUpdatedUser: 'Ο χρήστης ενημερώθηκε με επιτυχία',
    updateUserError:
      'Δεν ήταν δυνατή η ενημέρωση του μητρώου χρήστη. Παρακαλώ δοκιμάστε ξανά.',
  },
  getUserInfo: {
    successGetInfo: 'Τα δεδομένα χρήστη ανακτήθηκε με επιτυχία',
    errorGetInfo:
      'Προέκυψε απρόσμενο σφάλμα κατά την ανάκτηση πληροφοριών χρήστη. Παρακαλώ δοκιμάστε ξανά αργότερα',
  },
  getUserInfoById: {
    noUserInfoData:
      'Το έγγραφο χρήστη υπάρχει, αλλά δεν υπάρχουν διαθέσιμα δεδομένα',
    getUserFetchError: 'Προέκυψε σφάλμα κατά την ανάκτηση πληροφοριών χρήστη',
  },
  storeDeviceToken: {
    deviceTokenRequired:
      'Η παροχή ενός αναγνωριστικού συσκευής είναι υποχρεωτική.',
    generalError: 'Σφάλμα αποθήκευσης αναγνωριστικού συσκευής',
  },

  sendGlobalPushNotifications: {
    requiredParams:
      'Ο τίτλος και το κείμενο της ειδοποίησης είναι υποχρεωτικά.',
    generalError: 'Προέκυψε σφάλμα κατά την επεξεργασία ειδοποιήσεων',
    generalErrorAdditional: 'Αποτυχία αποστολής καθολικής ειδοποίησης',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Το αναγνωριστικό συσκευής είναι υποχρεωτικό',
    languageMandatory: 'Η γλώσσα είναι υποχρεωτική',
    deviceIdentified: 'Η συσκευή σας έχει αναγνωριστεί με επιτυχία',
    generalError:
      'Προέκυψε σφάλμα κατά τον έλεγχο δοκιμαστικής περιόδου συσκευής',
  },

  getUserNotification: {
    generalError: 'Αποτυχία ανάκτησης ειδοποιήσεων χρήστη',
    generalErrorAdditional:
      'Προέκυψε σφάλμα κατά την ανάκτηση ειδοποιήσεων χρήστη',
  },

  getScanCategories: {
    noCategoryFound: 'Δεν βρέθηκαν κατηγορίες',
    generalError: 'Προέκυψε σφάλμα κατά την ανάκτηση κατηγοριών σάρωσης',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Οι κατηγορίες σάρωσης μεταφορτώθηκαν με επιτυχία',
    generalError: 'Αποτυχία μεταφόρτωσης κατηγοριών σάρωσης',
  },

  sendUserNotification: {
    noTokenFound:
      'Δεν βρέθηκαν έγκυρα αναγνωριστικά Expo. Δεν είναι δυνατή η αποστολή ειδοποιήσεων',
    generalError: 'Αποτυχία αποστολής ειδοποίησης',
  },
};
