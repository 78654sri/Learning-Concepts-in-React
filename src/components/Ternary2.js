export function Helloo(){
    const isOn = true

    return(
        <div>
            {
                isOn && <>please OFF</>
            }
        </div>
    )
}