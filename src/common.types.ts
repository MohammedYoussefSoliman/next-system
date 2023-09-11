export type PageProps = {
  children: React.ReactNode;
  params: {
    [key: string]: string;
  };
};

export type LangProps = "ar" | "en" | "fr" | "tr";

export type CountryType = {
  dialCode: string;
  ar: string;
  en: string;
  code: string;
  flag: string;
};

export type MediaResponse = {
  id: null;
  large: null | string;
  medium: null | string;
  small: null | string;
  thumbnail: null | string;
  original: null | string;
  place_holder: {
    small_no_bg: null | string;
    medium_bg: null | string;
    small_bg: null | string;
  };
};

export type UserResponse = {
  id: string | number;
  name: string;
  slug: string;
  email: string;
  country_code: string;
  phone: string;
  locale: null | string;
  fcm_token: null | string;
  token: null | string;
  refresh_token: null | string;
  token_expired_at: string;
  notifications_count: string;
  phone_verified_at: null | string;
  email_verified_at: null | string;
  media: MediaResponse;
  code: string;
  google2fa_enable: boolean;
};
