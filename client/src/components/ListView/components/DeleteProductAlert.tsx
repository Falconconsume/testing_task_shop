import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../ui/alert-dialog"
import {Button} from "@/components/ui/button"
import {Trash2} from "lucide-react";
import useAppDispatch from "@/hooks/useAppDispatch.ts";
import {FC} from "react";
import {deleteProduct} from "@/store/products/thunk.ts";
import useAppSelector from "@/hooks/useAppSelector.ts";

interface IAlertProduct {
    idProduct: string;
}

const DeleteProductAlert: FC<IAlertProduct> = ({idProduct}) => {
    const {isLoading, error} = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    const handleDeleteProduct = async (id: string) => {
        dispatch(deleteProduct(id))
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">
                    <Trash2 className='hover:text-red-700'/>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Do you want to delete the product?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the product and remove data from the
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeleteProduct(idProduct)} disabled={isLoading}>
                        {isLoading ? 'Deleting...' : 'Delete'}
                    </AlertDialogAction>
                </AlertDialogFooter>
                {error && <p className="text-red-500 mt-2">{error}</p>}

            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteProductAlert;
