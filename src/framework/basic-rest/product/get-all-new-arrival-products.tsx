import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchNewArrivalProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS);
  return data as Product[];
};

const fetchNewArrivalAncientProducts = async ({ queryKey }: any) => {
  console.log("---------------------------");
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS_ANCIENT);
  return data as Product[];
};

export const useNewArrivalProductsQuery = (options: QueryOptionsType) => {
  // remove this code 
  

  if (options.demoVariant === 'ancient') {
    return useQuery<Product[], Error>([API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS_ANCIENT, options], fetchNewArrivalAncientProducts);
  }
  return useQuery<Product[], Error>([API_ENDPOINTS.PRODUCTS_ANCIENT, options], fetchNewArrivalProducts);
};
