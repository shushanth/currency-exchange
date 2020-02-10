import axios from 'axios';

import { API_ID, BASE_URL } from './constants';

export interface apiRequest {
  url?: string;
  method?: string;
  baseCurrency?: string;
  onSuccess: (result: any) => void;
  onFailure: (error: any) => void;
}

const apiMiddleWare = (request: apiRequest) => {
  const baseQuery: string = `?app_id=${API_ID}&base=${request.baseCurrency}`;
  const baseUrl: string = `${BASE_URL}${baseQuery}`;
  const httpRequestConfig = {
    ['GET']: async ({
      url = baseUrl,
      onSuccess = request.onSuccess,
      onFailure = request.onFailure,
    }: apiRequest) => {
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
  request: (serviceRequest: apiRequest) => apiMiddleWare(serviceRequest),
};
