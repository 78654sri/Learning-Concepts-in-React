export default function Hello(){
    const isSubscribe = true

    // if(isSubscribe){
    //     return <h1>unsubscribe</h1>
    // }else{
    //     return <h1>subscribe</h1>
    // }

    return(
        <div>
            {
               isSubscribe ?  <h1>unsubscribe</h1> : <h1>subscribe</h1>
            }
        </div>
    )
}