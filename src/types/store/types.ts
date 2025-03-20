export interface IStoreAsyncElement<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}
