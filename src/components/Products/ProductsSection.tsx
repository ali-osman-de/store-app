import { Alert, Box, CircularProgress, Grid, Typography } from '@mui/material';
import styles from '../../styles/productsSection.module.scss';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import type { Product } from '../../store/useProductsStore';

interface Props {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
  selectedCategories: string[];
  sortOrder: string;
  selectedProduct: string | null;
}

function ProductsSection({
  products,
  loading,
  error,
  fetchProducts,
  selectedCategories,
  sortOrder,
  selectedProduct
}: Props) {


  useEffect(() => {
    if (!selectedProduct) {
      fetchProducts();
    }
  }, [fetchProducts, selectedProduct]);

  if (loading) {
    return (
      <Box
        className={styles.loading}
      >
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Yükleniyor...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        className={styles.error}
      >
        <Alert severity="error" variant="filled">
          Hata: {error}
        </Alert>
      </Box>
    );
  }


  let displayProducts: Product[] = [];

  if (selectedProduct) {
    const found = products.find((p) => p.id === Number(selectedProduct));
    if (found) {
      displayProducts = [found];
    } else {
      return <p>Seçilen ürün bulunamadı.</p>;
    }
  } else {
    displayProducts = selectedCategories.length > 0
      ? products.filter(product => selectedCategories.includes(product.category))
      : [...products];

    if (sortOrder === 'asc') {
      displayProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      displayProducts.sort((a, b) => b.price - a.price);
    }
  }

  return (
    <Grid className={styles.grid}>
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </Grid>
  );
}

export default ProductsSection;
