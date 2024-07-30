import { addProductToCart } from '@/redux/cart/action-type';
import Image from 'next/image';

import { useDispatch } from 'react-redux'

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <div className='px-6 pt-6 pb-11 rounded-xl flex flex-col border border-primary'>
      <div className='flex justify-center'>
        <Image
          className='rounded-lg h-60 object-contain w-full'
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
      </div>
      <div className='pt-7 grid grid-cols-[1fr_80px] gap-2'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-sm'>{product.title}</h2>
          <p className='text-xs text-secondary uppercase'>{product.category}</p>
          <p className='font-bold text-sm'>${product.price}</p>
        </div>
        <div className='flex justify-end'>
          <button 
            onClick={handleProductClick} 
            className='bg-primary rounded-full w-9 h-9 text-white text-lg border-2 transition duration-300 hover:bg-transparent hover:border-primary hover:text-primary'
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product