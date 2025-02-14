export * from './interfaces';
import * as mockApi from './mock';
import * as realApi from './real';

export const api = process.env.REACT_APP_API_URL ? realApi : mockApi;
