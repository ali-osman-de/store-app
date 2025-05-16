import { Route, Routes } from "react-router"
import ShoppingPage from "./pages/ShoppingPage"


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ShoppingPage />} />
        </Routes>

    )
}

export default MainRoutes