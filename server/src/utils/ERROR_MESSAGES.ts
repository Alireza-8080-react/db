export const UNIQUE_VALIDATION_ERROR = "وارد شده قبلا در سیستم ثبت شده است";

export const handleRequiredErr = (field: string): string => `لطفا ${field} را وارد کنید`;
const handleNotFoundErr = (item: string): string => `${item} با این مشخصات در سامانه وجود ندارد`;

export const LOGIN_ERRORS = {
    requiredFieldsNotEntered: "لطفا ایمیل و پسورد را وارد کنید",
    wrongPassword: "پسورد وارد شده اشتباه است",
    wrongEmail: "ایمیل وارد شده اشتباه است",
};
export const COMMON_ERRORS = {
    notLoggedIn: "برای دسترسی به این بخش ابتدا وارد شوید یا در سایت ثبت نام کنید",
    notValidToken: "توکن وارد شده معتبر نیست",
    userNotFound: handleNotFoundErr("کاربری"),
};
export const ADMIN_PANEL_ERRORS = {
    notAuthorized: "فقط ادمین سایت حق دسترسی به این بخش  را دارد",
    contactUsMessageNotFound: handleNotFoundErr("پیامی"),
    sampleNotFound: handleNotFoundErr("نمونه کاری"),
};
