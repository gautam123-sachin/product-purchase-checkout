import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./ProductList.css";
import { useCart } from "./CartContext";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemId, setItemId] = useState([]);

  const { dispatch } = useCart();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/gautam123-sachin/products/products"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product: product });
    setItemId((prev) => [...prev, product.id]);
    localStorage.setItem(`cartItem_${product.id}`, "added");
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list-container">
          {data.map((product) => (
            <Card
              sx={{
                maxWidth: 320,
                minWidth: 320,
                marginBottom: 3,
              }}
              key={product.id}
              className="product-card"
            >
              <div className="card-header">
                <Typography
                  level="title-lg"
                  sx={{ fontWeight: 600 }}
                  className="product-title"
                >
                  {product.name}
                </Typography>
                <Typography
                  level="body-sm"
                  sx={{ fontWeight: 600 }}
                  className="product-date"
                >
                  April 24 to May 02, 2021
                </Typography>
              </div>
              <AspectRatio minHeight="20px" maxHeight="200px">
                <img
                  src={product.image}
                  srcSet={`${product.image} 2x`}
                  loading="lazy"
                  alt={product.image}
                  className="product-image"
                />
              </AspectRatio>
              <CardContent orientation="horizontal" className="card-content">
                <div className="price-container">
                  <Typography level="body-xs" sx={{ fontWeight: 600 }}>
                    Total price:
                  </Typography>
                  <Typography
                    fontSize="lg"
                    fontWeight="lg"
                    sx={{ fontWeight: 600 }}
                    className="product-price"
                  >
                    ${product.price}
                  </Typography>
                </div>

                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label={`Buy ${product.name}`}
                  className="buy-button"
                  // Disable the button if checkout has started
                  disabled={
                    itemId.includes(product.id) ||
                    localStorage.getItem(`cartItem_${product.id}`) === "added"
                  }
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCartIcon />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
