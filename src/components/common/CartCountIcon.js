import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartCountIcon = ({ count }) => {
  return (
    <div>
      <ShoppingCartIcon />
      <span>{count}</span>
    </div>
  );
};
