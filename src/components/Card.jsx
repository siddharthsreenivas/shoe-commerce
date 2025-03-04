import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <section className=" p-5 cursor-pointer rounded-lg border-[2px] border-[#ededed]">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
        className="w-48 mb-4"
      />
      <div>
        <h3 className="mb-2">Title</h3>
        <section className="flex mb-2 items-center">
          <AiFillStar color="#d5ab55" /> <AiFillStar color="#d5ab55" />{" "}
          <AiFillStar color="#d5ab55" /> <AiFillStar color="#d5ab55" />
          <span className="text-sm ml-3">5</span>
        </section>
        <section className="flex justify-between items-center">
          <div>
            <del>$300</del> 200
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
