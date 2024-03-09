import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FeedbackCard from './components/FeedbackCard';
import style from './Slider.module.scss';
import { v4 as uuidv4 } from 'uuid';

import { feedback } from '../../assets/mock';

const parametr = {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 25,
    breakpoints: {
      1000: {
        centeredSlides: false
      },
      540: {
        centeredSlides: false
      },
      360: {
        centeredSlides: false
      }
    },
    centeredSlides: true,
    loop: false,
    modules: [Pagination],
    pagination: {
      bulletActiveClass: style.custom_pagination_active + " swiper-pagination-bullet-active",
      bulletClass: style.custom_pagination + " swiper-pagination-bullet",
      clickable: true
    }
}

export default function Slider() {
    return(
        <div>
            <h3 className={style.title}>ОТЗЫВЫ</h3>
            <Swiper {...parametr} className={style.swiper}>
                {
                    feedback.map(el => {
                        return(
                            <SwiperSlide key={uuidv4()}>
                                <FeedbackCard item={el} />
                            </SwiperSlide>
                        )
                    })
                }
                <div className={style.swiper_pagination_bullets}></div>
            </Swiper>
        </div>
    )
}