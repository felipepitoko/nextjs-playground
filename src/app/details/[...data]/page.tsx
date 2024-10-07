'use client'
interface DetailsProps{
    params: {
        data: string[]
    }
}

//Server components por default => nenhum console.log vai rolar na página!

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
            <button className='text-black bg-white' onClick={() => console.log('clicou')}>Clique aqui</button>
        </div>
    )
}