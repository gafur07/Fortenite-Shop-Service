import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBasket } from '../../store/reducer/basket/basket.slice'

const Price = () => {
    const { basket } = useSelector(store => store.basket)
    const dispatch = useDispatch()

    function deletePost(id) {
        dispatch(removeBasket(id))
    }

  return (
    <>
    <div className="w-[80%] mx-auto border-2 border-gray-300 rounded-md my-12 p-4">
            {basket.length === 0 && (
                <img className='w-59% mx-auto' src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' />
            )}
          <div className="row grid grid-cols-4 gap-4">
            {basket.map((item) => (
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
                <button onClick={() => deletePost(item.id)} className="w-full bg-blue-950 px-4 py-2 rounded-md text-white flex justify-between gap-4 items-center active:scale-95 transform">
                  <span className="text-2xl">
                    <i class='bx bx-trash'></i>
                  </span> 
                  <h2 className="text-2xl text-white">
                    {item.price}$
                  </h2>
                  </button>
              </div>
            ))}
          </div>
        
      </div>
    </>
  )
}

export default Price