
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), 
  tagTypes: ['Posts', 'Categories', 'Profile'], 
  endpoints: (builder) => ({
    
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'], 
    }),

    
    getCategories: builder.query({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: '/categories',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Categories'], 
    }),

    
    getProfile: builder.query({
      query: () => '/profile',
      providesTags: ['Profile'],
    }),
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: '/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['Profile'], 
    }),
  }),
});


export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetPostsQuery,
  useAddPostMutation,
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = apiSlice;