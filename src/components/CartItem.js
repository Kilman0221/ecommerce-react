function CartItem(props) {

    console.log(props.img)
    return (
        <div className="cart-item">
            <img src={props.img} alt="product" />
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <button>+</button>
            <p>{props.qty}</p>
            <button>-</button>
        </div>
    )
}

export default CartItem;