import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders={
      'X-RapidAPI-Key': '3bccc7246bmshaf2a10c04082e47p1d5f08jsn390530c8af24',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com'
const createRequest= (url) => ({
    url, headers:cryptoApiHeaders
})
export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:( builder )=>({
        getCryptos: builder.query({
            query: (count)=>createRequest(`/coins?limit=${count}`),
        }),
        getExchanges:builder.query({
            query:()=>createRequest('/exchanges')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
        getCryptoHistory:builder.query({
            query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history/?timeperiod=${timePeriod}`)
        })
    })
}) 

export const {
    useGetCryptosQuery , 
    useGetExchangesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    
}=cryptoApi