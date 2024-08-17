import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Container from "@/components/Container/Container.tsx";
import {PanelRightOpen} from "lucide-react";
import {Link} from "react-router-dom";
import DeleteProductAlert from "@/components/ListView/components/DeleteProductAlert.tsx";
import {Button} from "@/components/ui/button.tsx";
import {IProduct} from "@/types/types.ts";
import useAppSelector from "@/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {getAllProducts} from "@/store/products/thunk.ts";
import useAppDispatch from "@/hooks/useAppDispatch.ts";

const ListProductsView = () => {
    const {products} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    return (
        <Container>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Count</TableHead>
                        <TableHead className="">Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product: IProduct) => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.count}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell className="flex justify-end gap-3.5 cursor-pointer items-center">
                                <Button variant="outline">
                                    <Link to={`/product/${product.id}`}>
                                        <PanelRightOpen className='hover:text-blue-500'/>
                                    </Link>
                                </Button>
                                <DeleteProductAlert idProduct={product.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default ListProductsView