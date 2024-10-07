import Image from 'next/image';
import loadingGif from '../public/frieren.gif'

export default function Loading(){
    return <>
    <h1>Carregando...</h1>
    <Image src={loadingGif} alt="Loading..." width={200} height={200} />
    </>
}