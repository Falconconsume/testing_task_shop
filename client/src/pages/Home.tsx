import ListProductsView from "../components/ListView/ListProductsView.tsx";
import Header from "@/components/Header/Header.tsx";

const Home = () => {

    return (
        <div className=' min-h-screen bg-gray-100 dark:bg-gray-800'>
            <div className='container'>
                <Header/>
                <ListProductsView/>
            </div>
        </div>
    )
}

export default Home;