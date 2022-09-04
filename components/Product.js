

export default function Product({ name, price, description }) {
    return (
        <div className="product">
        <p>
            {name}: {price.formatted_with_symbol}
        </p>
        
        </div>
    )
}