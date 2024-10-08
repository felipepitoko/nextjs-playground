export default async function LongWait(){
    const wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve('long wait')
        }, 5000)
    })

    wait.then((value) => {
        console.log(value)
    })

    return (
        <div>
            <h1>This guy loaded!</h1>
        </div>
    )
}