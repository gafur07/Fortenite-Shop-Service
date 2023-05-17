import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shopRender } from '../../store/reducer/shop/shop.actions'

const Home = () => {
    const { shop, loading } = useSelector(store => store.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(shopRender())
    },[])
    console.log(shop);

  return (
    <>
    <div className='w-[80%] mx-auto border-2 border-gray-300 rounded-md my-12 p-4'>
    <Spin spinning={loading}>

    <div className='row grid grid-cols-4 gap-4'>
        {shop.map(item => (
            <div className='item p-6 rounded-md shadow-md cursor-pointer mx-auto'>
                <img className='mb-4 w-full object-cover' width={300} src={item.full_background} alt="" />
                <h2 className='text-slate-700 font-bold text-xl'>{item.name}</h2>
                <p className='w-full text-slate-700 mb-4 truncate'>{item.description}</p>
            </div>
        ))}
    </div>
    </Spin>
    </div>
    </>
  )
}

export default Home