import Title from "./components/Title.tsx";
import SortProductsBtn from "./components/SortProductsBtn.tsx";
import AddProductBtn from "./components/AddProductBtn.tsx";
import Container from "../Container/Container.tsx";

const Header = () => {
    return (
        <Container>
            <Title>
                Product Management
            </Title>
            <div className='flex items-center gap-3.5'>
                <AddProductBtn/>
                <SortProductsBtn/>
            </div>
        </Container>
    );
};

export default Header;