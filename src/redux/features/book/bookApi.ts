import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['books'],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ['books'],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: ({ bookData, id }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: bookData,
      }),
      invalidatesTags: ['books'],
    }),
    postReview: builder.mutation<object, { id: string; data: object }>({
      query: ({ id, data }) => ({
        url: `reviews/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ['books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostReviewMutation,
  useGetReviewsQuery,
  useAddBookMutation,
  useUpdateBookMutation,
} = bookApi;
