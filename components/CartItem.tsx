function CartItem({ product }: any) {
  return (
    <div className="grid grid-cols-[1fr_50px_70px] gap-4">
      <p className="font-bold">{product.title}</p>
      <div className="flex justify-center items-center gap-2">
        <span className="cursor-pointer">+</span>
        <p>{product.quantity}</p>
        <span className="cursor-pointer">-</span>
      </div>
      <span className="flex justify-end items-center">${product.price}</span>
    </div>
  )
}

export default CartItem