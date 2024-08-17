import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PRODUCT_SLICE} from "./actions.ts";
import {IProduct} from "@/types/types.ts";
import {createProduct, deleteProduct, editProduct, getAllProducts} from "@/store/products/thunk.ts";

export interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string | null;
    sortByOrder: "asc" | "desc";
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: null,
    sortByOrder: "asc",
}

export const productSlice = createSlice({
    name: PRODUCT_SLICE,
    initialState,
    reducers: {
        sortProducts(state: ProductState, action: PayloadAction<"asc" | "desc">) {
            state.sortByOrder = action.payload;
            state.products.sort((a, b) => {
                if (state.sortByOrder === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.products = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.error = 'Can’t get data from the server';
                state.isLoading = false;
            })
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
                state.products = state.products.filter((product) => product.id !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.isLoading = false;
                state.error = "Can't delete product!";
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products = [...state.products, action.payload];
                state.error = '';
                state.isLoading = false;
            })
            .addCase(editProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
                const index = state.products.findIndex(product => product.id === action.payload.id);
                state.products[index] = action.payload;
                state.isLoading = false;
                state.error = null;
            });
    },
});

export const {sortProducts} = productSlice.actions;
export default productSlice.reducer;