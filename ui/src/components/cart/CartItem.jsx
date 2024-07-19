import React, { useState } from 'react';

const CartItem = ({ item, onAdd, onRemove }) => {
    
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>
      <div className='flex items-center gap-[30px]'>
      <div className='flex flex-col items-center '>
        <div className="flex justify-between items-center border-[2px] border-[#ec9ba6] rounded-md w-[80px]">
            {item.isRemoveAvailable && <button onClick={() => onRemove(item.id)} className="pl-[4px] pr-[4px] font-bold text-black hover:text-red-700">-</button>}
            {!item.isRemoveAvailable && <button onClick={() => onRemove(item.id)} className="pl-[4px] pr-[4px] font-bold text-stone-400 hover:text-grey-700 hover:cursor-default">-</button>}
            <p className=' pl-[4px] pr-[4px] h-[100%] text-sm h-[100%] '>{item.quantity}</p>
            <button onClick={() => onAdd(item.id)} className=" font-bold pl-[4px] pr-[4px] text-black hover:text-black hover:bg-[#ec9ba6]">+</button>
        </div>
        <p>₹{item.totalPrice}</p>
      </div>
      <buttton onClick={()=>onRemove(item.id)} className="pl-[4px] pr-[4px] font-bold text-black text-[25px] hover:text-[#ec9ba6] hover:cursor-pointer">x</buttton>
      </div>
    </div>
  );
};

export default CartItem;
