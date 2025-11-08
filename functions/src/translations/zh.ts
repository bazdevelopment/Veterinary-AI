import { type ITranslation } from './types';

export const zh: ITranslation = {
  common: {
    welcome: '欢迎',
    error: '发生错误',
    loading: '加载中...',
    noUserFound: '您无权进行此请求。请登录',
    userIdMissing: '用户ID似乎缺失。请提供以继续',
    scanLimitReached:
      '您已达到允许的最大扫描次数。请升级您的计划以继续使用该服务',
    mandatoryLanguage: '语言代码是必需的',
  },
  loginUserAnonymously: {
    mandatoryUsername: '选择一个昵称，让我们开始吧！',
    userLoggedIn: '欢迎回来！您已登录。',
    accountCreated: '您已登录！尽情探索吧！',
    error: '糟糕！出了点问题。请检查您的连接并重试。',
  },
  updateUserSubscription: {
    subscribeSuccess: '订阅成功！',
    updateSubscriptionError: '无法更新用户订阅！',
  },
  updateUserLanguage: {
    updateSuccess: '语言更新成功！',
    updateError: '更新语言时发生意外错误。请稍后重试',
  },
  updateUser: {
    successUpdatedUser: '用户更新成功',
    updateUserError: '无法更新用户记录。请重试。',
  },
  getUserInfo: {
    successGetInfo: '成功获取用户信息数据',
    errorGetInfo: '获取用户信息时发生意外错误。请稍后重试',
  },
  getUserInfoById: {
    noUserInfoData: '用户文档存在，但无可用数据',
    getUserFetchError: '获取用户信息时发生错误',
  },
  storeDeviceToken: {
    deviceTokenRequired: '提供设备令牌是必需的。',
    generalError: '存储设备令牌时出错',
  },

  sendGlobalPushNotifications: {
    requiredParams: '通知标题和正文是必需的。',
    generalError: '处理通知时发生错误',
    generalErrorAdditional: '发送全局通知失败',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: '设备ID是必需的',
    languageMandatory: '语言是必需的',
    deviceIdentified: '您的设备已成功识别',
    generalError: '检查设备试用时发生错误',
  },

  getUserNotification: {
    generalError: '获取用户通知失败',
    generalErrorAdditional: '获取用户通知时发生错误',
  },

  getScanCategories: {
    noCategoryFound: '未找到类别',
    generalError: '获取扫描类别时发生错误',
  },

  uploadScanCategories: {
    successfullyUploaded: '扫描类别上传成功',
    generalError: '上传扫描类别失败',
  },

  sendUserNotification: {
    noTokenFound: '未找到有效的Expo令牌。无法发送通知',
    generalError: '发送通知失败',
  },
};
