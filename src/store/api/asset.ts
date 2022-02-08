import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { useGetQueryId } from '../../hooks';

const baseUrl =
  'https://virtserver.swaggerhub.com/AnnaGolosova/AssetInformationAPI/1.0.0';

export const assetApi = createApi({
  reducerPath: 'assetApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAssetInfo: builder.query({
      query: (id) => ({ url: `/assets/${id}` }),
    }),
  }),
});

const { useGetAssetInfoQuery } = assetApi;

export const useGetAssetInfo = () => {
  const id = useGetQueryId();
  return useGetAssetInfoQuery(id, { skip: !id });
};
