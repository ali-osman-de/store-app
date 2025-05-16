import useCartProduct from '../../store/useCartProduct';
import styles from "../../styles/dropDownCartSection.module.scss";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DropDownCartSection = () => {
  const { cartItems, removeFromCart } = useCartProduct();

  return (
    <Paper
      elevation={4}
      className={styles.dropdown}
    >
      {cartItems.length === 0 ? (
        <Typography variant="body1">Sepetiniz boş</Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="sil"
                  onClick={() => removeFromCart(item.id)}
                >
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  src={item.image}
                  alt={item.title}
                  variant="square"
                />
              </ListItemAvatar>

              <ListItemText
                primary={item.title || item.title}
                secondary={`Adet: ${item.quantity}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default DropDownCartSection;
