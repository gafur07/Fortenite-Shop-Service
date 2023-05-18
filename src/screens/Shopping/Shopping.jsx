import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBasket } from "../../store/reducer/basket/basket.slice";
// import { AddBasket } from "../../store/reducer/basket/basket.actions";
import { fetchPrice } from "../../store/reducer/shoppingPrice/shopping.actions";

const Shopping = () => {
  const { shopping, loadingShop } = useSelector((store) => store.shopping);
  const { basket } = useSelector(store => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPrice());
  }, []);
  console.log(shopping)

  function addItem(id) {
    dispatch(AddBasket(id))
  }

  return (
    <>
      <div className="w-[80%] mx-auto border-2 border-gray-300 rounded-md my-12 p-4">
        <Spin spinning={loadingShop}>
          <div className="row grid grid-cols-4 gap-4">
            {shopping.map((item) => (
              <div className="item p-6 rounded-md shadow-md cursor-pointer mx-auto" key={item.id}>
                <img
                  className="mb-4 w-full object-cover"
                  width={300}
                  src={item.full_background}
                  alt=""
                />
                <h2 className="text-slate-700 font-bold text-xl">{item.name}</h2>
                <p className="w-full text-slate-700 mb-4 text-center truncate">
                  {item.description}
                </p>
                <button onClick={() => addItem(item)} className="w-full bg-blue-950 px-4 py-2 rounded-md text-white flex justify-between gap-4 items-center active:scale-95 transform">
                  <span className="text-2xl">
                    <i class='bx bx-basket'></i>
                  </span> 
                  <h2 className="text-2xl text-white">
                    {item.price}$
                  </h2>
                  </button>
              </div>
            ))}
          </div>
        </Spin>
        
      </div>
    </>
  );
};

export default Shopping;
