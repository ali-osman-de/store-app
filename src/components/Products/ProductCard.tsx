import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import styles from '../../styles/productCard.module.scss';
import type { Product } from '../../store/useProductsStore';
import useCartProduct from '../../store/useCartProduct';

interface Props {
  product: Product;
}


function ProductCard({ product }: Props) {
  const { addToCart } = useCartProduct();


  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="240"
        image={product.image}
        alt={product.title}
      />
      <CardContent className={styles.content}>
        <Typography noWrap gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₺{product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => addToCart(product) }
        >
          Sepete Ekle
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
