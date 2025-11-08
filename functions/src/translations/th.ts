import { type ITranslation } from './types';

export const th: ITranslation = {
  common: {
    welcome: 'ยินดีต้อนรับ',
    error: 'เกิดข้อผิดพลาดขึ้น',
    loading: 'กำลังโหลด...',
    noUserFound: 'คุณไม่มีสิทธิ์ในการร้องขอนี้ กรุณาเข้าสู่ระบบ',
    userIdMissing: 'ดูเหมือนว่าจะไม่มีรหัสผู้ใช้ กรุณาระบุเพื่อดำเนินการต่อ',
    scanLimitReached:
      'คุณได้ถึงขีดจำกัดจำนวนการสแกนที่อนุญาตแล้ว กรุณาอัปเกรดแผนของคุณเพื่อใช้บริการต่อ',
    mandatoryLanguage: 'จำเป็นต้องมีรหัสภาษา',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'เลือกชื่อเล่นและเริ่มต้นกันเลย!',
    userLoggedIn: 'ยินดีต้อนรับกลับ! คุณเข้าสู่ระบบแล้ว',
    accountCreated: 'คุณเข้าสู่ระบบแล้ว! สนุกกับการสำรวจ!',
    error: 'อุ๊ปส์! มีบางอย่างผิดพลาด กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง',
  },
  updateUserSubscription: {
    subscribeSuccess: 'สมัครสมาชิกสำเร็จแล้ว!',
    updateSubscriptionError: 'ไม่สามารถอัปเดตการสมัครสมาชิกผู้ใช้ได้!',
  },
  updateUserLanguage: {
    updateSuccess: 'อัปเดตภาษาสำเร็จแล้ว!',
    updateError:
      'เกิดข้อผิดพลาดที่ไม่คาดคิดขณะอัปเดตภาษา กรุณาลองอีกครั้งในภายหลัง',
  },
  updateUser: {
    successUpdatedUser: 'อัปเดตผู้ใช้สำเร็จแล้ว',
    updateUserError: 'ไม่สามารถอัปเดตข้อมูลผู้ใช้ได้ กรุณาลองอีกครั้ง',
  },
  getUserInfo: {
    successGetInfo: 'ดึงข้อมูลผู้ใช้สำเร็จแล้ว',
    errorGetInfo:
      'เกิดข้อผิดพลาดที่ไม่คาดคิดขณะดึงข้อมูลผู้ใช้ กรุณาลองอีกครั้งในภายหลัง',
  },
  getUserInfoById: {
    noUserInfoData: 'มีเอกสารผู้ใช้อยู่ แต่ไม่มีข้อมูล available',
    getUserFetchError: 'เกิดข้อผิดพลาดขณะดึงข้อมูลผู้ใช้',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'จำเป็นต้องมีโทเค็นอุปกรณ์',
    generalError: 'ข้อผิดพลาดในการเก็บโทเค็นอุปกรณ์',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'จำเป็นต้องมีหัวเรื่องและเนื้อหาการแจ้งเตือน',
    generalError: 'เกิดข้อผิดพลาดขณะประมวลผลการแจ้งเตือน',
    generalErrorAdditional: 'ส่งการแจ้งเตือนทั่วไปไม่สำเร็จ',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'จำเป็นต้องมีรหัสอุปกรณ์',
    languageMandatory: 'จำเป็นต้องมีภาษา',
    deviceIdentified: 'ระบุอุปกรณ์ของคุณสำเร็จแล้ว',
    generalError: 'เกิดข้อผิดพลาดขณะตรวจสอบช่วงทดลองใช้ของอุปกรณ์',
  },

  getUserNotification: {
    generalError: 'ดึงการแจ้งเตือนผู้ใช้ไม่สำเร็จ',
    generalErrorAdditional: 'เกิดข้อผิดพลาดขณะดึงการแจ้งเตือนผู้ใช้',
  },

  getScanCategories: {
    noCategoryFound: 'ไม่พบหมวดหมู่',
    generalError: 'เกิดข้อผิดพลาดขณะดึงหมวดหมู่การสแกน',
  },

  uploadScanCategories: {
    successfullyUploaded: 'อัปโหลดหมวดหมู่การสแกนสำเร็จแล้ว',
    generalError: 'อัปโหลดหมวดหมู่การสแกนไม่สำเร็จ',
  },

  sendUserNotification: {
    noTokenFound: 'ไม่พบโทเค็น Expo ที่ถูกต้อง ไม่สามารถส่งการแจ้งเตือนได้',
    generalError: 'ส่งการแจ้งเตือนไม่สำเร็จ',
  },
};
