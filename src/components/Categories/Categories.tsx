import { useState, useEffect } from 'react';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box
} from '@mui/material';
import styles from '../../styles/categories.module.scss';

interface Props {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const Categories = ({ selectedCategories, setSelectedCategories }: Props) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategoryList(data);
      } catch (error) {
        console.error('Kategori verileri alınamadı:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Box>
      <Typography className={styles.title}>
        Kategoriler
      </Typography>
      <FormGroup className={styles.formGroup}>
        {categoryList.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleToggle(category)}
              />
            }
            label={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Categories;
