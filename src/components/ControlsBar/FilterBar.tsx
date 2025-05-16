import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

function FilterBar({ sortOrder, setSortOrder }: Props) {

  const handleSortChange = (e: SelectChangeEvent) => {
    setSortOrder(e.target.value);
  };

  return (
    <FormControl fullWidth size="medium" sx={{ maxWidth: 200 }}>
      <InputLabel id="sort-label">Sırala</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-select"
        value={sortOrder}
        onChange={handleSortChange}
        label="Sırala"
      >
        <MenuItem value="">Varsayılan</MenuItem>
        <MenuItem value="asc">Fiyata Göre Artan</MenuItem>
        <MenuItem value="desc">Fiyata Göre Azalan</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterBar;
