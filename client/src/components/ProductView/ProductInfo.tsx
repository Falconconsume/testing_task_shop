import { IProduct } from "@/types/types.ts";
import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import EditModalProduct from "@/components/ProductView/EditModalProduct.tsx";

interface IProductInfoProps {
    product: IProduct | undefined;
}

const ProductInfo: FC<IProductInfoProps> = ({ product }) => {
    if (!product) {
        return <div>No product information available.</div>;
    }

    return (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="text-3xl font-bold text-primary">
                        {product.name}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                    <CardDescription className="text-lg font-semibold">
                        Count
                    </CardDescription>
                    <span className="text-2xl font-bold text-primary">
                        {product.count}
                    </span>
                </div>
                <div>
                    <CardDescription className="text-lg font-semibold mb-2">
                        Description
                    </CardDescription>
                    <p className="text-gray-700 leading-relaxed">
                        {product.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <EditModalProduct product={product}/>
            </CardFooter>
        </Card>
    );
};

export default ProductInfo;