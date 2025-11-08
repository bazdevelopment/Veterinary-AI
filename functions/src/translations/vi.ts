import { type ITranslation } from './types';

export const vi: ITranslation = {
  common: {
    welcome: 'Chào mừng',
    error: 'Đã xảy ra lỗi',
    loading: 'Đang tải...',
    noUserFound:
      'Bạn không được ủy quyền để thực hiện yêu cầu này. Vui lòng đăng nhập',
    userIdMissing:
      'Có vẻ như thiếu ID người dùng. Vui lòng cung cấp để tiếp tục',
    scanLimitReached:
      'Bạn đã đạt đến giới hạn số lần quét cho phép. Vui lòng nâng cấp gói của bạn để tiếp tục sử dụng dịch vụ',
    mandatoryLanguage: 'Mã ngôn ngữ là bắt buộc',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Chọn một biệt danh và hãy bắt đầu nào!',
    userLoggedIn: 'Chào mừng trở lại! Bạn đã đăng nhập.',
    accountCreated: 'Bạn đã đăng nhập! Hãy khám phá nào!',
    error: 'Rất tiếc! Đã xảy ra sự cố. Vui lòng kiểm tra kết nối và thử lại.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Đã đăng ký thành công!',
    updateSubscriptionError: 'Không thể cập nhật gói đăng ký của người dùng!',
  },
  updateUserLanguage: {
    updateSuccess: 'Đã cập nhật ngôn ngữ thành công!',
    updateError:
      'Đã xảy ra lỗi không mong muốn khi cập nhật ngôn ngữ. Vui lòng thử lại sau',
  },
  updateUser: {
    successUpdatedUser: 'Đã cập nhật người dùng thành công',
    updateUserError: 'Không thể cập nhật hồ sơ người dùng. Vui lòng thử lại.',
  },
  getUserInfo: {
    successGetInfo: 'Đã lấy dữ liệu thông tin người dùng thành công',
    errorGetInfo:
      'Đã xảy ra lỗi không mong muốn khi lấy thông tin người dùng. Vui lòng thử lại sau',
  },
  getUserInfoById: {
    noUserInfoData:
      'Tài liệu người dùng tồn tại, nhưng không có dữ liệu nào khả dụng',
    getUserFetchError: 'Đã xảy ra lỗi khi lấy thông tin người dùng',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Việc cung cấp mã token thiết bị là bắt buộc.',
    generalError: 'Lỗi khi lưu trữ mã token thiết bị',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Tiêu đề và nội dung thông báo là bắt buộc.',
    generalError: 'Đã xảy ra lỗi khi xử lý thông báo',
    generalErrorAdditional: 'Không thể gửi thông báo toàn cầu',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID thiết bị là bắt buộc',
    languageMandatory: 'Ngôn ngữ là bắt buộc',
    deviceIdentified: 'Thiết bị của bạn đã được xác định thành công',
    generalError: 'Đã xảy ra lỗi khi kiểm tra thử nghiệm thiết bị',
  },

  getUserNotification: {
    generalError: 'Không thể lấy thông báo người dùng',
    generalErrorAdditional: 'Đã xảy ra lỗi khi lấy thông báo người dùng',
  },

  getScanCategories: {
    noCategoryFound: 'Không tìm thấy danh mục nào',
    generalError: 'Đã xảy ra lỗi khi lấy danh mục quét',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Đã tải lên danh mục quét thành công',
    generalError: 'Không thể tải lên danh mục quét',
  },

  sendUserNotification: {
    noTokenFound:
      'Không tìm thấy mã token Expo hợp lệ. Không thể gửi thông báo',
    generalError: 'Không thể gửi thông báo',
  },
};
