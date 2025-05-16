import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import type { Product } from '../../store/useProductsStore';

interface Props {
  products: Product[];
  selectedProduct: string | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchBar = ({ products, selectedProduct, setSelectedProduct }: Props) => {
  const selectedProductObj = products.find((p) => p.id === (selectedProduct !== null ? Number(selectedProduct) : null)) || null;

  const handleChange = (_event: any, newValue: Product | null) => {
    setSelectedProduct(newValue ? String(newValue.id) : null);
  };

  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        value={selectedProductObj}
        onChange={handleChange}
        options={products}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ürün Ara"
            type="search"
          />
        )}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        clearOnEscape
      />
    </Stack>
  );
};

export default SearchBar;
