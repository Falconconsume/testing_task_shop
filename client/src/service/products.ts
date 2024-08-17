import axios from 'axios';
import { IProduct } from "@/types/types.ts";

const PRODUCT_URL: string = "https://65cb708defec34d9ed878725.mockapi.io/ValuessEsrcf";

const productService = {
    getAllProducts: async (): Promise<IProduct[]> => {
        const response = await axios.get(PRODUCT_URL);
        return response.data;
    },
    createProduct: async (product: IProduct): Promise<IProduct> => {
        const response = await axios.post(PRODUCT_URL, product);
        return response.data;
    },
    updateProduct: async (id: string, product: Partial<IProduct>): Promise<IProduct> => {
        const response = await axios.put(`${PRODUCT_URL}/${id}`, product);
        return response.data;
    },
    deleteProduct: async (id: string): Promise<void> => {
        await axios.delete(`${PRODUCT_URL}/${id}`);
    },
};

export default productService;