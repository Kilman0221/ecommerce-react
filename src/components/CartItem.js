import { useContext, useState, useEffect } from 'react';
import CartContext from '../CartContext';



function CartItem(props) {

    const { addItems, removeItems } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(parseFloat(props.price) * parseFloat(props.qty))
    }, [props.price, props.qty])

    return (
        <div className="cart-item">
            <img src={props.img} alt="product" />
            <div className="details">
                <h2>{props.title}</h2>
                <p>Single item price: {props.price}</p>
                <div className="qty-controlls">
                    <button onClick={() => removeItems(props.id)}>-</button>
                    <p>Quantity: {props.qty}</p>
                    <button onClick={() => addItems(props.id, props.title, props.price, props.qty, props.img)}>+</button>
                </div>
            </div>
            <div className="checkout">
                <p>Price to pay: {total.toFixed(2)}$</p>
            </div>
        </div>
    )
}

export default CartItem;