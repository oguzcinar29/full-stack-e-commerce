import { stripe } from "../index.js";

export const getCartItems = (req, res) => {
  console.log(cartArr);
};

export const makePayment = async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.product_name,
        images: [product.img[0]],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.count,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ id: session.id });
};
