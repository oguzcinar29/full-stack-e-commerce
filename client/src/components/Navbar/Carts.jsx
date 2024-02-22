import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useData } from "../Context/DataContext";
import CartItem from "./CartItem";
import { loadStripe } from "@stripe/stripe-js";

export default function Carts() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const { cartArr, setCartArr, currentUser } = useData();

  const calcTotal = () => {
    var total = 0;
    cartArr?.forEach((item) => (total += item.price * item.count));
    return total;
  };

  console.log(currentUser);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OiC9BBkBthUpas9ydkZXhW1LW7x9nkEV1K0R5263whn4G0V44JQscWxgKNB3GTqdegSnqJ5M8X9UNmyI5FM90HF00X7YACBy6"
    );
    const body = {
      products: cartArr,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://full-stack-e-commerce.onrender.com/api/carts/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log(result);
    if (result.error) {
      console.log((await result).error);
    }
    setCartArr([]);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={handleClickOpen("body")}>
          <Badge
            style={{ color: "black" }}
            badgeContent={cartArr !== null ? cartArr?.length : 0}
            color="error"
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          {cartArr?.length !== 0 && (
            <DialogTitle id="scroll-dialog-title">
              Products in your cart
            </DialogTitle>
          )}
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {cartArr?.length !== 0 && (
                <div className="cart-item-container">
                  {cartArr?.map((item, i) => {
                    return <CartItem key={i} {...item} />;
                  })}
                  <div className="cart-total">
                    <h5>SUBTOTAL</h5>
                    <h5>${calcTotal()}</h5>
                  </div>

                  <button
                    onClick={makePayment}
                    type="submit"
                    id="complete-shop"
                  >
                    PROCEED TO CHECKOUT
                  </button>

                  <button
                    id="reset-cart"
                    onClick={() => {
                      setCartArr([]);
                    }}
                  >
                    Reset Cart
                  </button>
                </div>
              )}
              {cartArr?.length === 0 && <h1>Your cart is empty</h1>}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
