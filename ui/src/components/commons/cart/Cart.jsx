import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () =>{
    const initialCartItems = [
        { id: 1, name: 'Item 1', price: 10, image: 'https://via.placeholder.com/150', totalPrice: 10, quantity: 1, isRemoveAvailable:false },
        { id: 2, name: 'Item 2', price: 20, image: 'https://via.placeholder.com/150', totalPrice: 20, quantity: 1, isRemoveAvailable:false },
      ];
      
        const [cartItems, setCartItems] = useState(initialCartItems);
      
        const handleAddItem = (id) => {
          setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === id);
            const updatedItems = [...prevItems];
            updatedItems[itemIndex] = {
              ...updatedItems[itemIndex],
              quantity: (updatedItems[itemIndex].quantity || 1) + 1,
              totalPrice: updatedItems[itemIndex].price *  ((updatedItems[itemIndex].quantity || 1) + 1)
            };
            if(updatedItems[itemIndex].quantity === 1) {
                updatedItems[itemIndex] = {
                    ...updatedItems[itemIndex],
                    isRemoveAvailable: false
                }
            } else updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                isRemoveAvailable: true
            }
            return updatedItems;
          });
        };
      
        const handleRemoveItem = (id) => {
            setCartItems(prevItems => {
                const itemIndex = prevItems.findIndex(item => item.id === id);
                const updatedItems = [...prevItems];
                if(updatedItems[itemIndex].quantity - 1 === 0){
                    return updatedItems;
                }
                updatedItems[itemIndex] = {
                  ...updatedItems[itemIndex],
                  quantity: updatedItems[itemIndex].quantity - 1,
                  totalPrice: updatedItems[itemIndex].price *  (updatedItems[itemIndex].quantity - 1)
                };
                if(updatedItems[itemIndex].quantity === 1) {
                    updatedItems[itemIndex] = {
                        ...updatedItems[itemIndex],
                        isRemoveAvailable: false
                    }
                } else updatedItems[itemIndex] = {
                    ...updatedItems[itemIndex],
                    isRemoveAvailable: true
                }
                return updatedItems;
              });
        };
      
        const handleOrder = () => {
          alert('Order placed successfully!');
          // Here you can handle the order logic, e.g., sending data to the server
        };
      
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onAdd={handleAddItem}
                    onRemove={handleRemoveItem}
                  />
                ))}
                <button
      onClick={handleOrder}
      className="bg-[#ea7585] text-white py-2 px-4 rounded mt-4 hover:bg-green-700"
    >
      Order Now
    </button>
              </div>
            )}
          </div>
        );
      };
export default Cart;