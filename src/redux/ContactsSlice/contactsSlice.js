import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactsAPI = createApi({
    reducerPath: "contacts",
    baseQuery: fetchBaseQuery({ baseUrl: "https://62fe1bc9a85c52ee482fe36d.mockapi.io/api/v1" }),
    tagTypes: ["Contacts"],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ["Contacts"]
        }),
        addContact: builder.mutation({
            query: ({ name, number }) => ({
                url: "/contacts",
                method: "POST",
                body: {
                    name,
                    number
                }
            }),
            invalidatesTags: ["Contacts"]
        }),
        deleteContact: builder.mutation({
            query: (Id) => ({
                url: `/contacts/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contacts"]
        }),
    })
})

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation, useUpdateMaterialMutation } = contactsAPI;
