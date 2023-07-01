import './Rules.css'
import BoardRules from "../../components/Game/BoardRules";
import CharacterSelectRules from "../../components/Game/CharacterSelectRules";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import SwiperCore, { EffectFlip, Navigation, Pagination, Scrollbar, A11y } from "swiper";


function Rules() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]} // I want to focus here
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
                  <SwiperSlide>
                  <CharacterSelectRules/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <p className='box'>Primero se te va a dar la opción de elegir tu personaje. La opción de gato normal no tiene ningun poder, el gato pirata parte con más puntos pero con un dado del 1 al 4 y el gato bruja gana y pierde el doble de puntaje de lo que dice el tablero.</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <BoardRules/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <p className='box'>Los jugadores tiran el dado por turnos y van ganando y perdiendo puntos segun lo que dice el tablero. Si pierden todos sus puntos deben volver al inicio.</p>
                  </SwiperSlide>
                  <SwiperSlide>
                  <p className='box'>El primero en llegar a la meta consigue una bandera. El juego consiste de tres rondas, donde la primera bandera vale 0,5 pescados, la segunda vale 1 pescado y la tercera vale 2 pescados. El gato con más pescados al final de la última ronda gana el juego</p>
                  </SwiperSlide>
                </Swiper>
  );
}

export default Rules;