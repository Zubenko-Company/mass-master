declare global {
  type MabePromise<T> = T | Promise<T>;
}
