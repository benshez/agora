import { IStorage, StorageKey } from '../index';

export class StorageService implements IStorage {
  private emptyString: string = '';

  getToken(key: StorageKey) {
    return this.emptyString.concat(key.toString());
  }

  setItem(key: StorageKey, value: any): void {
    localStorage.setItem(
      this.getToken(key),
      value === null ? null : JSON.stringify(value)
    );
  }

  getItem(key: StorageKey): any {
    const value = localStorage.getItem(this.getToken(key));
    return value === null ? null : JSON.parse(value);
  }

  removeItem(key: StorageKey): void {
    localStorage.removeItem(this.getToken(key));
  }

  hasItem = (key: StorageKey): boolean => {
    return this.getItem(key) !== null;
  };
}
