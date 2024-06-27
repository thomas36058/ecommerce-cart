import Image from 'next/image';

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
  return (
    <div className='px-6 pt-6 pb-11 rounded-xl flex flex-col shadow-lg'>
      <div className='flex justify-center'>
        <Image
          className='rounded-lg h-60 object-contain'
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
      </div>
      <div className='pt-7 grid grid-cols-[1fr_40px] gap-2'>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold'>{product.title}</h2>
          <p className='text-sm text-secondary uppercase'>{product.category}</p>
          <p className='font-bold'>${product.price}</p>
        </div>
        <button className='bg-primary rounded-full w-10 h-10 flex justify-center items-center text-white text-2xl border-2 transition duration-300 hover:bg-transparent hover:border-primary hover:text-primary'>+</button>
      </div>
    </div>
  )
}

export default Product