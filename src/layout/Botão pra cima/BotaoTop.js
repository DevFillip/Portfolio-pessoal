import './BotaoTop.css'
import {useEffect, useState} from 'react'

function BotaoUp(){
    const [voltarAoTopo, setVoltarAoTopo] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setVoltarAoTopo(true)
            }else{
                setVoltarAoTopo(false)
            }
            })
        },[])

    const scrollTopButton = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        }
        )
    }

    return (
        <div>
            {voltarAoTopo && (
                <button className='botao-up' onClick={scrollTopButton}><i class="uil uil-arrow-up"></i></button>
            )}
        </div>
    )
}

export default BotaoUp