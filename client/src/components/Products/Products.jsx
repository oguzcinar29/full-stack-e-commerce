import React from "react";
import { useData } from "../Context/DataContext";
import ProductItems from "./ProductItems";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Products({ category }) {
  const { products } = useData();

  const [value, setValue] = React.useState(300);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = React.useState("female");

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <div className="products-container">
      <div className="products-box">
        <div className="items-edit">
          <div className="box">
            <h5>Filter by price</h5>
            <Box sx={{ width: 200 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                0
                <Slider
                  max={1000}
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                />
                {value}
              </Stack>
            </Box>
          </div>
          <div className="box">
            <h5>Sort by</h5>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value2}
                onChange={handleChange2}
              >
                <form
                  action="/api/products/radio-value"
                  className="form-radio"
                  method="post"
                >
                  <FormControlLabel
                    value="ASC"
                    control={<Radio />}
                    label="Price(Lowest first)"
                  />
                  <FormControlLabel
                    value="DESC"
                    control={<Radio />}
                    label="Price(Highest first)"
                  />
                  <input type="hidden" name="category" value={category} />
                  <input type="hidden" name="value" value={value2} />
                  <input id="radio-btn" type="submit" value="UPDATE" />
                </form>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="items">
          {products.map((item, i) => {
            if (category === item.category && item.price < value) {
              return <ProductItems {...item} key={i} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
