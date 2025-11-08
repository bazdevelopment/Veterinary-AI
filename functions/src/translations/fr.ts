import { type ITranslation } from './types';

export const fr: ITranslation = {
  common: {
    welcome: 'Bienvenue',
    error: 'Une erreur est survenue',
    loading: 'Chargement...',
    noUserFound:
      "Vous n'êtes pas autorisé à effectuer cette demande. Veuillez vous connecter",
    userIdMissing:
      "Il semble que l'identifiant utilisateur soit manquant. Veuillez le fournir pour continuer",
    scanLimitReached:
      "Vous avez atteint le nombre maximum d'analyses autorisées. Veuillez mettre à niveau votre plan pour continuer à utiliser le service",
    mandatoryLanguage: 'Le code de langue est requis',
  },
  loginUserAnonymously: {
    mandatoryUsername: "Choisissez un pseudonyme et c'est parti !",
    userLoggedIn: 'Bon retour ! Vous êtes connecté.',
    accountCreated: "Vous êtes connecté ! Profitez de l'exploration !",
    error:
      "Oups ! Quelque chose s'est mal passé. Veuillez vérifier votre connexion et réessayer.",
  },
  updateUserSubscription: {
    subscribeSuccess: 'Abonnement réussi !',
    updateSubscriptionError:
      "Impossible de mettre à jour l'abonnement utilisateur !",
  },
  updateUserLanguage: {
    updateSuccess: 'Langue mise à jour avec succès !',
    updateError:
      "Une erreur inattendue s'est produite lors de la mise à jour de la langue. Veuillez réessayer plus tard",
  },
  updateUser: {
    successUpdatedUser: 'Utilisateur mis à jour avec succès',
    updateUserError:
      "Impossible de mettre à jour l'enregistrement utilisateur. Veuillez réessayer.",
  },
  getUserInfo: {
    successGetInfo: "Données d'information utilisateur récupérées avec succès",
    errorGetInfo:
      "Une erreur inattendue s'est produite lors de la récupération des informations utilisateur. Veuillez réessayer plus tard",
  },
  getUserInfoById: {
    noUserInfoData:
      "Le document utilisateur existe, mais aucune donnée n'est disponible",
    getUserFetchError:
      "Une erreur s'est produite lors de la récupération des informations utilisateur",
  },
  storeDeviceToken: {
    deviceTokenRequired: "La fourniture d'un jeton d'appareil est obligatoire.",
    generalError: "Erreur lors du stockage du jeton d'appareil",
  },

  sendGlobalPushNotifications: {
    requiredParams:
      'Le titre et le corps de la notification sont obligatoires.',
    generalError:
      "Une erreur s'est produite lors du traitement des notifications",
    generalErrorAdditional: "Échec de l'envoi de la notification globale",
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: "L'identifiant de l'appareil est obligatoire",
    languageMandatory: 'La langue est obligatoire',
    deviceIdentified: 'Votre appareil a été identifié avec succès',
    generalError:
      "Une erreur s'est produite lors de la vérification de l'essai de l'appareil",
  },

  getUserNotification: {
    generalError: 'Échec de la récupération des notifications utilisateur',
    generalErrorAdditional:
      "Une erreur s'est produite lors de la récupération des notifications utilisateur",
  },

  getScanCategories: {
    noCategoryFound: 'Aucune catégorie trouvée',
    generalError:
      "Une erreur s'est produite lors de la récupération des catégories d'analyse",
  },

  uploadScanCategories: {
    successfullyUploaded: "Catégories d'analyse téléchargées avec succès",
    generalError: "Échec du téléchargement des catégories d'analyse",
  },

  sendUserNotification: {
    noTokenFound:
      "Aucun jeton Expo valide trouvé. Impossible d'envoyer des notifications",
    generalError: "Échec de l'envoi de la notification",
  },
};
