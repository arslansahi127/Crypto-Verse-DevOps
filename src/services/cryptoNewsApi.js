import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeader={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '3bccc7246bmshaf2a10c04082e47p1d5f08jsn390530c8af24',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest=(url)=>({
    url, headers:cryptoNewsHeader
})
export const cryptoNewsApi=createApi({
    reducerPath: 'crptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetCryptoNewsQuery}=cryptoNewsApi