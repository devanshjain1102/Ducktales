import React from "react";
import { useLocation } from "react-router-dom";
import Item from "../commons/Item";

const CategoryPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category");

  return (
    <>
      <p className="text-3xl ml-[40px] mt-[30px] font-bold">{category} Items</p>
      <div style={{ padding: "20px", color: "black" }}>
        <div className="flex flex-row ">
          <Item
            image="	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480"
            title="Mera pehla gift"
            price="40USD"
          />
          <Item
            image="	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480"
            title="Mera pehla gift"
            price="40USD"
          />
          <Item
            image="	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480"
            title="Mera pehla gift"
            price="40USD"
          />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
