import { Box, Grid, Toolbar } from "@mui/material";
import Header from "../components/Header";
import styles from "../styles/shoppingPage.module.scss";
import Categories from "../components/Categories/Categories";
import ControlsBarSection from "../components/ControlsBar/ControlsBarSection";
import ProductsSection from "../components/Products/ProductsSection";
import useProductsStore from "../store/useProductsStore";
import { useState } from "react";

const ShoppingPage = () => {
    const { products, loading, error, fetchProducts } = useProductsStore();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<string>('');
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    return (
        <>
            <Header />
            <Toolbar />
            <Box className={styles.container}>
                <Grid className={styles.left}>
                    <Categories
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </Grid>
                <Grid className={styles.right}>
                    <ControlsBarSection
                        products={products}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />
                    <Grid className={styles.productsSection}>
                        <ProductsSection
                            selectedCategories={selectedCategories}
                            products={products}
                            loading={loading}
                            error={error}
                            fetchProducts={fetchProducts}
                            sortOrder={sortOrder}
                            selectedProduct={selectedProduct}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>


    );
};

export default ShoppingPage;
