import { type ITranslation } from './types';

export const ko: ITranslation = {
  common: {
    welcome: '환영합니다',
    error: '오류가 발생했습니다',
    loading: '로딩 중...',
    noUserFound: '이 요청을 수행할 권한이 없습니다. 로그인해 주세요',
    userIdMissing: '사용자 ID가 누락된 것 같습니다. 계속하시려면 입력해 주세요',
    scanLimitReached:
      '최대 허용 스캔 횟수에 도달했습니다. 서비스를 계속 이용하시려면 요금제를 업그레이드해 주세요',
    mandatoryLanguage: '언어 코드는 필수입니다',
  },
  loginUserAnonymously: {
    mandatoryUsername: '닉네임을 선택하고 시작해 봅시다!',
    userLoggedIn: '다시 오신 것을 환영합니다! 로그인되었습니다.',
    accountCreated: '로그인되었습니다! 탐험을 즐기세요!',
    error:
      '죄송합니다! 문제가 발생했습니다. 연결을 확인하고 다시 시도해 주세요.',
  },
  updateUserSubscription: {
    subscribeSuccess: '구독에 성공했습니다!',
    updateSubscriptionError: '사용자 구독을 업데이트할 수 없습니다!',
  },
  updateUserLanguage: {
    updateSuccess: '언어가 성공적으로 업데이트되었습니다!',
    updateError:
      '언어 업데이트 중 예기치 않은 오류가 발생했습니다. 나중에 다시 시도해 주세요',
  },
  updateUser: {
    successUpdatedUser: '사용자가 성공적으로 업데이트되었습니다',
    updateUserError:
      '사용자 기록을 업데이트할 수 없습니다. 다시 시도해 주세요.',
  },
  getUserInfo: {
    successGetInfo: '사용자 정보 데이터를 성공적으로 가져왔습니다',
    errorGetInfo:
      '사용자 정보를 가져오는 중 예기치 않은 오류가 발생했습니다. 나중에 다시 시도해 주세요',
  },
  getUserInfoById: {
    noUserInfoData: '사용자 문서는 존재하지만 사용 가능한 데이터가 없습니다',
    getUserFetchError: '사용자 정보를 가져오는 중 오류가 발생했습니다',
  },
  storeDeviceToken: {
    deviceTokenRequired: '디바이스 토큰 제공은 필수입니다.',
    generalError: '디바이스 토큰 저장 중 오류 발생',
  },

  sendGlobalPushNotifications: {
    requiredParams: '알림 제목과 본문은 필수입니다.',
    generalError: '알림 처리 중 오류가 발생했습니다',
    generalErrorAdditional: '전체 알림 전송에 실패했습니다',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: '디바이스 ID는 필수입니다',
    languageMandatory: '언어는 필수입니다',
    deviceIdentified: '디바이스가 성공적으로 식별되었습니다',
    generalError: '디바이스 체크 중 오류가 발생했습니다',
  },

  getUserNotification: {
    generalError: '사용자 알림을 가져오지 못했습니다',
    generalErrorAdditional: '사용자 알림을 가져오는 중 오류가 발생했습니다',
  },

  getScanCategories: {
    noCategoryFound: '카테고리를 찾을 수 없습니다',
    generalError: '스캔 카테고리를 retrieving하는 중 오류가 발생했습니다',
  },

  uploadScanCategories: {
    successfullyUploaded: '스캔 카테고리가 성공적으로 업로드되었습니다',
    generalError: '스캔 카테고리 업로드에 실패했습니다',
  },

  sendUserNotification: {
    noTokenFound:
      '유효한 Expo 토큰을 찾을 수 없습니다. 알림을 보낼 수 없습니다',
    generalError: '알림 전송에 실패했습니다',
  },
};
