import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Birthday", color: "bg-red-500" },
  { id: 2, name: "Anniversary", color: "bg-blue-500" },
  { id: 3, name: "Wedding", color: "bg-green-500" },
  { id: 4, name: "Graduation", color: "bg-purple-500" },
];

const Categories = () => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/category?category=${category}`);
  };
  return (
    <div className="flex flex-col items-center mb-[30px]">
      <p className="mt-[50px] text-black font-bold text-4xl uppercase">Categories</p>
      <div
        className="grid grid-cols-4 gap-8 mt-8 rounded-[50%]"
      >
        {categories.map((category) => (
          <div className="flex flex-col items-center hover:cursor-pointer hover:scale-110 duration-100">
            {/* <div
              key={category.id}
              style={{
                backgroundImage: `url(https://www.giftoo.in/cdn/shop/collections/12.png?v=1710521736&width=500)`,
                borderRadius: "50%",
              }}
              onClick={() => handleClick(category.name)}
              className={`h-[300px] w-[300px] rounded-full bg-cover bg-center bg-no-repeat shadow-md flex items-center justify-center ${category.color} hover:scale-125
`}
            ></div> */}
            <img src = "https://www.giftoo.in/cdn/shop/collections/12.png?v=1710521736&width=500" className={`h-[250px] w-[250px] rounded-full bg-cover bg-center bg-no-repeat shadow-md flex items-center justify-center ${category.color}`} style={{borderRadius:"50%"}} onClick={() => handleClick(category.name)}/>
            <span className="text-black font-bold text-lg uppercase">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
