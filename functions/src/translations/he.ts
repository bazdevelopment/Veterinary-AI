import { type ITranslation } from './types';

export const he: ITranslation = {
  common: {
    welcome: 'ברוך הבא',
    error: 'אירעה שגיאה',
    loading: 'טוען...',
    noUserFound: 'אין לך הרשאה לבצע בקשה זו. אנא התחבר',
    userIdMissing: 'נראה שחסר מזהה המשתמש. אנא ספק אותו כדי להמשיך',
    scanLimitReached:
      'הגעת למספר הסריקות המרבי המותר. אנא שדרג את התוכנית שלך כדי להמשיך להשתמש בשירות',
    mandatoryLanguage: 'קוד השפה נדרש',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'בחר כינוי ובואו נתחיל!',
    userLoggedIn: 'ברוך שובך! אתה מחובר.',
    accountCreated: 'אתה מחובר! תהנה מהחקירה!',
    error: 'אופס! משהו השתבש. אנא בדוק את החיבור ונסה שוב.',
  },
  updateUserSubscription: {
    subscribeSuccess: 'נרשמת בהצלחה!',
    updateSubscriptionError: 'לא ניתן לעדכן את מנוי המשתמש!',
  },
  updateUserLanguage: {
    updateSuccess: 'השפה עודכנה בהצלחה!',
    updateError: 'אירעה שגיאה בלתי צפויה בעדכון השפה. אנא נסה שוב מאוחר יותר',
  },
  updateUser: {
    successUpdatedUser: 'המשתמש עודכן בהצלחה',
    updateUserError: 'לא ניתן לעדכן את רשומת המשתמש. אנא נסה שוב.',
  },
  getUserInfo: {
    successGetInfo: 'נתוני המשתמש נקלטו בהצלחה',
    errorGetInfo:
      'אירעה שגיאה בלתי צפויה בקבלת פרטי המשתמש. אנא נסה שוב מאוחר יותר',
  },
  getUserInfoById: {
    noUserInfoData: 'מסמך המשתמש קיים, אך אין נתונים זמינים',
    getUserFetchError: 'אירעה שגיאה בקבלת פרטי המשתמש',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'חובה לספק אסימון מכשיר.',
    generalError: 'שגיאה באחסון אסימון המכשיר',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'כותרת וגוף ההתראה הם חובה.',
    generalError: 'אירעה שגיאה בעיבוד ההתראות',
    generalErrorAdditional: 'נכשל בשליחת התראה גלובלית',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'מזהה מכשיר הוא חובה',
    languageMandatory: 'שפה היא חובה',
    deviceIdentified: 'המכשיר שלך זוהה בהצלחה',
    generalError: 'אירעה שגיאה בבדיקת ניסיון המכשיר',
  },

  getUserNotification: {
    generalError: 'נכשל בקבלת התראות המשתמש',
    generalErrorAdditional: 'אירעה שגיאה בקבלת התראות המשתמש',
  },

  getScanCategories: {
    noCategoryFound: 'לא נמצאו קטגוריות',
    generalError: 'אירעה שגיאה בקבלת קטגוריות הסריקה',
  },

  uploadScanCategories: {
    successfullyUploaded: 'קטגוריות הסריקה הועלו בהצלחה',
    generalError: 'נכשל בהעלאת קטגוריות הסריקה',
  },

  sendUserNotification: {
    noTokenFound: 'לא נמצאו אסימוני Expo תקפים. לא ניתן לשלוח התראות',
    generalError: 'נכשל בשליחת התראה',
  },
};
