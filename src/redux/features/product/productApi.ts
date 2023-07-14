import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation<object, { id: string; data: object }>({
      query: ({ id, data }) => ({
        url: `comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComments: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentsQuery,
} = productApi;
