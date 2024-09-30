interface DetailsProps{
    params: {
        data: string[]
    }
}

export default function Details({params}: DetailsProps){
    const [
        productId,
        productName,
        productPrice
    ] = params.data

    return(
        <div className="h-full bg-yellow-100">
            <h1 className="text-red-400">Details</h1>
            <ul className="text-black">
                <li>ID do produto: {productId}</li>
                <li>Nome do produto: {productName}</li>
                <li>Preço do produto: {productPrice}</li>
            </ul>
        </div>
    )
}