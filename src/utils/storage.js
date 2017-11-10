const COOKIE_EXPIRES = 30;
const COOKIE_PATH = '/';

export default class Storage {
  constructor() {
    this.taget_storage = window.localStorage ? new LocalStorage() : new CookieStorage();
  }

  set = (key, value) => this.taget_storage.set(key, value);

  get = (key) => this.taget_storage.get(key);

  remove = (key) => this.target_storage.remove(key);
}


export class LocalStorage {
  get = (key) => window.localStorage.getItem(key);

  set = (key, value) => window.localStorage.setItem(key, value);

  remove = (key) => window.localStorage.removeItem(key);
}

export class CookieStorage {
  get = (key) => {
    const matches = document.cookie.match(new RegExp("(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  set = (key, value) => {
    let date_expires = new Date();
    date_expires.setDate(date_expires.getDate() + COOKIE_EXPIRES);

    document.cookie = `${key}=${value}; path=${COOKIE_PATH}; expires=${date_expires}`;
  }

  remove = (key) => {

  }
}
