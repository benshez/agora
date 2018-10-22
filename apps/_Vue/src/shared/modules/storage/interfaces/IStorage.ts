export interface IStorage {
  setItem(key: StorageKey, value: any): void;
  getItem(key: StorageKey): any;
  removeItem(key: StorageKey): void;
  hasItem(key: StorageKey): boolean;
}

export enum StorageKey {
  USERNAME,
  USER_DETAIL
}
