import { createAsyncThunk } from '@reduxjs/toolkit';
import productService from "@/service/products.ts";
import { IProduct } from "@/types/types.ts";

// Get all products
export const getAllProducts = createAsyncThunk<IProduct[]>(
    "products/getAllProducts",
    async () => {
        const res: IProduct[] = await productService.getAllProducts();
        return res;
    }
);

// Delete a product by ID
export const deleteProduct = createAsyncThunk<string, string>(
    "products/deleteProduct",
    async (id, { rejectWithValue }) => {
        try {
            await productService.deleteProduct(id);
            return id;
        } catch (error) {
            console.error('Error deleting product:', error);
            return rejectWithValue("Failed to delete product");
        }
    }
);

// Create a new product
export const createProduct = createAsyncThunk<IProduct, IProduct>(
    "product/createProduct",
    async (body, { rejectWithValue }) => {
        try {
            const newProduct = await productService.createProduct(body);
            return newProduct;
        } catch (error) {
            console.error('Error creating product:', error);
            return rejectWithValue("Failed to create product");
        }
    }
);

// Edit an existing product by ID
export const editProduct = createAsyncThunk<IProduct, { id: string, product: Partial<IProduct> }>(
    "product/updateProduct",
    async ({ id, product }, { rejectWithValue }) => {
        try {
            const updatedProduct = await productService.updateProduct(id, product);
            return updatedProduct;
        } catch (error) {
            console.error('Error updating product:', error);
            return rejectWithValue("Failed to update product");
        }
    }
);