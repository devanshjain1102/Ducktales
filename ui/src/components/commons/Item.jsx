import React, { useState } from "react";
import styled from "styled-components";

const Item = ({ image, title, price, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} onClick={onClick}>
        <ItemCard>
            <ItemImage src={image} alt={title} />
              <ItemInfo>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemPrice>₹{price}</ItemPrice>
                  {isHovered && <ItemButton>Add to Cart</ItemButton>}
              </ItemInfo>
            
        </ItemCard>
        </div>
    );
};

export default Item;

const ItemCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  margin:20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  height: 250px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  padding: 1rem;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333333;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #666666;
`;

const ItemButton = styled.button`
  background-color: #ea7585;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ea7585;
  }
`;
