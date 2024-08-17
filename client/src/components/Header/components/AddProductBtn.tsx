import React from "react";
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
import useAppSelector from "@/hooks/useAppSelector";
import { createProduct } from "@/store/products/thunk";
import { IProduct } from "@/types/types.ts";
import FormSubmitProduct from "./FormSubmitProduct";

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

const DialogDemo = () => {
    const { products } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            count: 0,
        },
    });

    const onSubmit = (values: FormValues) => {
        const newProduct: IProduct = { ...values, id: String(products?.length + 1) };
        dispatch(createProduct(newProduct));
        setOpen(false);
        form.reset();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new product</DialogTitle>
                    <DialogDescription>
                        Enter the details of the new product.
                    </DialogDescription>
                </DialogHeader>
                <FormSubmitProduct
                    form={form}
                    onSubmit={onSubmit}
                />
            </DialogContent>
        </Dialog>
    );
};

export default DialogDemo;