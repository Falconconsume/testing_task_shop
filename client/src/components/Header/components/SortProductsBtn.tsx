import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../ui/select.tsx";
import useAppDispatch from "@/hooks/useAppDispatch.ts";
import {sortProducts} from "@/store/products/slice.ts";
import useAppSelector from "@/hooks/useAppSelector.ts";

const SortProductsBtn = () => {
    const dispatch = useAppDispatch();
    const sortByOrder = useAppSelector((state) => state);

    const handleSortProducts = (order: "asc" | "desc") => {
        dispatch(sortProducts(order));
    }

    return (
        <Select onValueChange={handleSortProducts}>
            <SelectTrigger className="w-[130px] border-gray-400">
                <SelectValue placeholder={`Sort products (${sortByOrder})`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sort products by</SelectLabel>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default SortProductsBtn;