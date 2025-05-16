import { Box, Grid } from "@mui/material"
import styles from "../../styles/controlsBarSection.module.scss"
import SearchBar from "./SearchBar"
import FilterBar from "./FilterBar"
import type { Product } from "../../store/useProductsStore";

interface Props {
    products: Product[];
    sortOrder: string;
    setSortOrder: React.Dispatch<React.SetStateAction<string>>;
    selectedProduct: string | null;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string | null>>;
}


const ControlsBarSection = (
    {
        products,
        sortOrder,
        setSortOrder,
        selectedProduct,
        setSelectedProduct }: Props) => {
    return (
        <Box className={styles.box}>
            <Grid className={styles.left}>
                <SearchBar
                    products={products}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct} />
            </Grid>
            <Grid className={styles.right}>
                <FilterBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </Grid>
        </Box>
    )
}

export default ControlsBarSection