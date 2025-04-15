export interface CartItem {
  _id: string | number; // Unique identifier for the cart item
  title: string; // Product title
  price: number; // Price of the product
  quantity: number; // Quantity of the product in the cart
  subtotal: number; // Subtotal for the item (price * quantity)
  image: string; // Image URL for the product
}
