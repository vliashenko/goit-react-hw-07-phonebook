import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactsAPI } from "./ContactsSlice/contactsSlice";
import filterSlice from "./FilterSlice/filterSlice";

export const store = configureStore({
    reducer: {
        [contactsAPI.reducerPath] : contactsAPI.reducer,
        filter: filterSlice
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsAPI.middleware
    ]
})

setupListeners(store.dispatch)