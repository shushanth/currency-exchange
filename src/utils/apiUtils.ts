import axios from 'axios';

import { API_ID, BASE_CURRENCY, BASE_URL } from './constants';

export interface apiRequestI {
  url?: string;
  method?: string;
  onSuccess: (result: any) => void;
  onFailure: (error: any) => void;
}

const apiMiddleWare = (request: apiRequestI) => {
  const baseQuery: string = `?app_id=${API_ID}&base=${BASE_CURRENCY}`;
  const baseUrl: string = `${BASE_URL}${baseQuery}`;
  const httpRequestConfig = {
    ['GET']: async ({
      url = baseUrl,
      onSuccess = request.onSuccess,
      onFailure = request.onFailure,
    }: apiRequestI) => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        onSuccess(data);
      } catch (e) {
        onFailure(e);
      }
    },
  };
  return {
    request: httpRequestConfig[request.method || 'GET'](request),
  };
};
export const apiService = {
  request: (serviceRequest: apiRequestI) => apiMiddleWare(serviceRequest),
};
