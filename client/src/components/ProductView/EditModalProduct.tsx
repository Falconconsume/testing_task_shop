import  {FC, useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import useAppDispatch from "@/hooks/useAppDispatch";
import { editProduct } from "@/store/products/thunk";
import { IProduct } from "@/types/types.ts";
import FormEditProduct from "./FormEditProduct.tsx";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    count: z.number().min(0, {
        message: "Count must be a non-negative number.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

interface EditModalProductProps {
    product: IProduct;
}

const EditModalProduct: FC<EditModalProductProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: product.name,
            description: product.description,
            count: product.count,
        },
    });

    const onSubmit = (values: FormValues) => {
        const updatedProduct: IProduct = { ...product, ...values };
        dispatch(editProduct({ id: product.id, product: updatedProduct }));
        setOpen(false);
        form.reset();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Edit Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogDescription>
                        Update the details of the product.
                    </DialogDescription>
                </DialogHeader>
                <FormEditProduct
                    product={product}
                    form={form}
                    onSubmit={onSubmit}
                />
            </DialogContent>
        </Dialog>
    );
};

export default EditModalProduct;
