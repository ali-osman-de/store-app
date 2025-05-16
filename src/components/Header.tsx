import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DropDownCartSection from '../components/Cart/DropDownCartSection';
import styles from '../styles/header.module.scss';
import useCartProduct from '../store/useCartProduct';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCartProduct();

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <Typography className={styles.title}>
          <StorefrontIcon /> MyStore
        </Typography>

        <div className={styles.cartWrapper}>
          <IconButton className={styles.iconButton} onClick={toggleCart}>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {isCartOpen && <DropDownCartSection />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
