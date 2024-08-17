import {createRoot} from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProductView from "@/pages/ProductView.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/product/:id",
        element: <ProductView/>
    }
]);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
)
