import { type ITranslation } from './types';

export const ja: ITranslation = {
  common: {
    welcome: 'ようこそ',
    error: 'エラーが発生しました',
    loading: '読み込み中...',
    noUserFound: 'このリクエストを行う権限がありません。ログインしてください',
    userIdMissing:
      'ユーザーIDが不足しているようです。続行するために入力してください',
    scanLimitReached:
      'スキャンの最大許容数に達しました。サービスを継続して利用するにはプランをアップグレードしてください',
    mandatoryLanguage: '言語コードは必須です',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'ニックネームを選んで始めましょう！',
    userLoggedIn: 'おかえりなさい！ログインしました。',
    accountCreated: 'ログインしました！探索をお楽しみください！',
    error:
      '申し訳ありません！問題が発生しました。接続を確認して再度お試しください。',
  },
  updateUserSubscription: {
    subscribeSuccess: '購読に成功しました！',
    updateSubscriptionError:
      'ユーザーサブスクリプションを更新できませんでした！',
  },
  updateUserLanguage: {
    updateSuccess: '言語が正常に更新されました！',
    updateError:
      '言語の更新中に予期せぬエラーが発生しました。後ほど再度お試しください',
  },
  updateUser: {
    successUpdatedUser: 'ユーザーが正常に更新されました',
    updateUserError:
      'ユーザーレコードを更新できませんでした。再度お試しください。',
  },
  getUserInfo: {
    successGetInfo: 'ユーザー情報データの取得に成功しました',
    errorGetInfo:
      'ユーザー情報の取得中に予期せぬエラーが発生しました。後ほど再度お試しください',
  },
  getUserInfoById: {
    noUserInfoData:
      'ユーザードキュメントは存在しますが、利用可能なデータがありません',
    getUserFetchError: 'ユーザー情報の取得中にエラーが発生しました',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'デバイストークンの提供は必須です。',
    generalError: 'デバイストークンの保存中にエラーが発生しました',
  },

  sendGlobalPushNotifications: {
    requiredParams: '通知のタイトルと本文は必須です。',
    generalError: '通知の処理中にエラーが発生しました',
    generalErrorAdditional: 'グローバル通知の送信に失敗しました',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'デバイスIDは必須です',
    languageMandatory: '言語は必須です',
    deviceIdentified: 'デバイスが正常に識別されました',
    generalError: 'デバイストライアルのチェック中にエラーが発生しました',
  },

  getUserNotification: {
    generalError: 'ユーザー通知の取得に失敗しました',
    generalErrorAdditional: 'ユーザー通知の取得中にエラーが発生しました',
  },

  getScanCategories: {
    noCategoryFound: 'カテゴリが見つかりませんでした',
    generalError: 'スキャンカテゴリの取得中にエラーが発生しました',
  },

  uploadScanCategories: {
    successfullyUploaded: 'スキャンカテゴリが正常にアップロードされました',
    generalError: 'スキャンカテゴリのアップロードに失敗しました',
  },

  sendUserNotification: {
    noTokenFound:
      '有効なExpoトークンが見つかりませんでした。通知を送信できません',
    generalError: '通知の送信に失敗しました',
  },
};
