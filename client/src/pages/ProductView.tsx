import {Link, useParams} from "react-router-dom";
import Container from "@/components/Container/Container.tsx";
import {mockProducts} from "@/mock/products.ts";
import {IComment, IProduct} from "@/types/types.ts";
import ProductInfo from "@/components/ProductView/ProductInfo.tsx";
import ProductComments from "@/components/CommentSection/ProductComments.tsx";
import {Button} from "@/components/ui/button.tsx";
import useAppSelector from "@/hooks/useAppSelector.ts";


const ProductView = () => {
    const {id} = useParams();
    const {products} = useAppSelector(state => state);

    const product: IProduct | undefined = products.find((product) => product.id === id);

    const initialComments: IComment[] = [{id: "1", text: "Some comments", date: new Date()}];
    return (
        <Container>
            <div className='flex flex-col justify-center mx-auto'>

                <ProductInfo product={product}/>
                <ProductComments productId={product?.id} initialComments={initialComments}/>
                <Button className='my-2'>
                    <Link to='/'>
                        Back
                    </Link>
                </Button>
            </div>
        </Container>
    );
};

export default ProductView;