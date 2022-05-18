import { useContext } from 'react';
import CartContext from '../CartContext';
function CartItem(props) {

    const { addItems, removeItems } = useContext(CartContext)

    console.log(props.img)
    return (
        <div className="cart-item">
            <img src={props.img} alt="product" />
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <button onClick={() => addItems(props.id, props.title, props.price, props.qty, props.img)}>+</button>
            <p>{props.qty}</p>
            <button onClick={() => removeItems(props.id, props.title, props.price, props.qty, props.img)}>-</button>
        </div>
    )
}

export default CartItem;