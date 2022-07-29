import './swiperCarousel.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imagemteste from '../../imagens/pexels-red-zeppelin-12638731 (1).jpg'

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
                        <img src={imagemteste} alt='primeiro-projeto'/>
                    </div>
                    <div class="informacoes">
                        <h3>Primeiro projeto</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button>Ver mais</button>
                    </div>
            </SwiperSlide>
            <SwiperSlide className='card'>
                <div class="card-image">
                    <img src={imagemteste} alt='segundo-projeto'/>
                </div>
                <div class="informacoes">
                    <h3>Primeiro projeto</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Ver mais</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='card'>
                <div class="card-image">
                    <img src={imagemteste} alt='terceiro-projeto'/>
                </div>
                <div class="informacoes">
                    <h3>Primeiro projeto</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Ver mais</button>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
    )
}

export default SwiperCarousel