import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import './contato.css'

function Contato(){
    return (
        <div className="contato-container">
            <p className='p-contato'>Contato</p>

            <div className="formas-contato">
                <div className="telefone">
                    <FiPhoneCall />
                    <div className="dados-telefone"> 
                        <p className='titulo'>Me ligue</p>
                        <p>13 98122-7376</p>
                    </div>
                </div>

                <div className="email">
                    <MdOutlineMarkEmailRead />
                    <div className="dados-email">
                        <p className='titulo'>Email</p>
                        <p>filliphudson222@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="form-contato">
                <input type='text' 
                       placeholder="Nome"
                       className='input-nome' 
                />
                <input type='email' 
                       placeholder="Email" 
                       className='input-email' 
                />
                <textarea placeholder="Mensagem" className='textarea-mensagem'></textarea>
                <button className='btn-contato'>Enviar mensagem<i class="uil uil-message"></i></button>
            </div>
        </div>
    )
}   

export default Contato