import { useState } from "react";
import { useLocation } from "react-router-dom";

const ItemPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const itemId = queryParams.get("item");
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const item = {
    id: itemId,
    image:
      "	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480",
    title: "Mera pehla gift",
    description: "Mera pehla gift hai, mza ajayega xd",
    price: "40",
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
            <p className="text-[#666] text-sm mb-4">
              Description: {item.description}
            </p>
            <p className="text-2xl font-semibold text-[#333] mb-4">
              ₹{item.price}
            </p>
            <div>
              <p>Quantity</p>
              <div className="flex justify-between items-center border-[2px] border-[#ec9ba6] rounded-md w-[150px] h-[40px]">
                <button
                  onClick={handleDecrement}
                  className="pl-[4px] pr-[4px] font-bold text-stone-400 hover:text-grey-700 hover:cursor-default"
                >
                  -
                </button>
                <p className=" pl-[4px] pr-[4px] text-sm h-[100%] ">
                  {quantity}
                </p>
                <button
                  onClick={handleIncrement}
                  className=" font-bold pl-[4px] pr-[4px] text-black hover:text-black hover:bg-[#ec9ba6]"
                >
                  +
                </button>
              </div>
            </div>
            <button className="bg-[#ec9ba6] text-white py-2 px-4 rounded hover:bg-white hover:text-[#ec9ba6] hover:border-2 hover:border-[#ec9ba6] transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
