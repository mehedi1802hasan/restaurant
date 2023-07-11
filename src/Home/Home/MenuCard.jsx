import React from 'react';

const MenuCard = ({menu}) => {
    const {name,recipe,price,image}=menu;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={image}  className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p>{price}</p>
    <p>100</p>
    <div className="card-actions">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MenuCard;