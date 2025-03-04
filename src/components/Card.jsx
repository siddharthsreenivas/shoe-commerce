import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className=" p-5 cursor-pointer rounded-lg border-[2px] border-[#ededed]">
      <img src={img} alt="Shoe" className="w-52 mb-4" />
      <div>
        <h3 className="mb-2">{title}</h3>
        <section className="flex mb-2 items-center">
          {star}
          {star}
          {star}
          {star}
          <span className="text-sm ml-3">{reviews}</span>
        </section>
        <section className="flex justify-between items-center">
          <div>
            <del>${prevPrice}</del> {newPrice}
          </div>
          <div>
            <BsFillBagHeartFill color="#d5ab55" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
