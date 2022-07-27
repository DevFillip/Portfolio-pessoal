import './tecnologias.css'

function Tecnologias(){
    return (
      <div class="habilidades_container">
            <h1 className='h1-tecnologias'>Tecnologias</h1>
            <div class="barra">
                <div class="informacoes">
                    <span>HTML</span>
                </div>
                <div class="barra_progresso html">
                    <span></span>
                </div>
            </div>

            <div class="barra">
                <div class="informacoes">
                    <span>CSS</span>
                </div>
                <div class="barra_progresso css">
                    <span></span>
                </div>
            </div>

            <div class="barra">
                <div class="informacoes ">
                    <span>JavaScript</span>
                </div>
                <div class="barra_progresso javascript">
                    <span></span>
                </div>
            </div>

    
            <div class="barra">
                <div class="informacoes">
                    <span>React JS</span>
                </div>
                <div class="barra_progresso react-js">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias