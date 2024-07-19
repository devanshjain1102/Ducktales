import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Item from "../commons/Item";

const defItems = [{
  id:1,
  image:"	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480",
            title:"Mera pehla gift",
            price:"40"
},{
  id:2,
  image:"	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480",
            title:"Mera Dusra gift",
            price:"40"
},{
  id:3,
  image:"	https://www.giftoo.in/cdn/shop/products/61ee0d8c6bd84cb224dd274ee68fe2a9.jpg?v=1710529132&width=480",
            title:"Mera Teesra gift",
            price:"40"
}]
const CategoryPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category");

  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    setItems(defItems)
  }, [])

  const onItemClick = (id) =>{
    navigate(`/item?item=${id}`)
  }
  return (
    <>
      <p className="text-3xl ml-[40px] mt-[30px] font-bold">{category} Items</p>
      <div style={{ padding: "20px", color: "black" }}>
        <div className="flex flex-row ">
          {items.map((item) => <Item
            image={item.image}
            title={item.title}
            price={item.price}
            onClick = {() => onItemClick(item.id)}
          />)}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
