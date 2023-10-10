import { StoreDataStatus } from './store-data-status.enum';

export interface StoreData<S, E> {
  status: StoreDataStatus;
  _pendingInParallel?: number;
  data?: S;
  error?: E;
}
