import './swiperCarousel.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import portfolio1 from '../../imagens/Portfolio 1.jpg'
import portfolio2 from '../../imagens/Portfolio 2.jpg'
import portfolio3 from '../../imagens/Portfolio 3.jpg'


import { Pagination, Navigation } from "swiper";

function SwiperCarousel(){
    return (
    <>
        <p className='p-portfolio1'>Portfólios</p>
        <p className='p-portfolio2'>Os melhores</p>

        <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets:true

        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        grabCursor={true}
        className="mySwiper slide-container">

            <SwiperSlide className='card'>
                <div class="card-image">
                        <img src={portfolio1} alt='primeiro-projeto'/>
                    </div>
                    <div class="informacoes">
                        <h3>Landing Page</h3>
                        <p>Nesse projeto criei uma Landing page real baseada no site da FlexMajorSchool, fiz toda em React JS e busquei ser o mais fiel possível fazendo ao meu modo.</p>
                        <a href='https://landing-page-fh.netlify.app' target='_blank' rel="noreferrer"><button>Ver mais<i class="uil uil-arrow-right"></i></button></a>
                    </div>
            </SwiperSlide>
            <SwiperSlide className='card'>
                <div class="card-image">
                    <img src={portfolio2} alt='segundo-projeto'/>
                </div>
                <div class="informacoes">
                    <h3>App de tempo</h3>
                    <p>Nesse aplicativo consumi uma Api externa e modelei os dados para serem mostrados do jeito que eu queria.</p>
                    <a href='https://github.com/DevFillip/tempo' target='_blank' rel="noreferrer"><button>Ver mais<i class="uil uil-arrow-right"></i></button></a>
                </div>
            </SwiperSlide>
            <SwiperSlide className='card'>
                <div class="card-image">
                    <img src={portfolio3} alt='terceiro-projeto'/>
                </div>
                <div class="informacoes">
                    <h3>Todo-App</h3>
                    <p>Esse site eu criei com o intuito de trabalhar com todo o CRUD, e testar meus conhecimentos aprendidos.</p>

                    <a href='https://todoapp-fh.netlify.app' target='_blank' rel="noreferrer"><button>Ver mais<i class="uil uil-arrow-right"></i></button></a>
                    
                </div>
            </SwiperSlide>
        </Swiper>
    </>
    )
}

export default SwiperCarousel