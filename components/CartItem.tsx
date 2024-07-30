import { increaseProductQuantity, decreaseProductQuantity } from '@/redux/cart/action-type';
import { useDispatch } from 'react-redux'

function CartItem({ product }: any) {
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id))
  }

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id))
  }

  return (
    <div className="grid grid-cols-[1fr_50px_70px] gap-4">
      <p className="font-bold">{product.title}</p>
      <div className="flex justify-center items-center gap-2">
        <span className="cursor-pointer" onClick={handleIncreaseClick}>+</span>
        <p>{product.quantity}</p>
        <span className="cursor-pointer" onClick={handleDecreaseClick}>-</span>
      </div>
      <span className="flex justify-end items-center">${product.price}</span>
    </div>
  )
}

export default CartItem