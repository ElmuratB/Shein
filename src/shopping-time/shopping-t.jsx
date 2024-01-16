import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Time() {


    return (
        <>
            <div className="info">
                <div className="shab">
                    <div>
                        <h3>SHIPPING INFO</h3>
                    </div>
                    <p>|</p>
                    <div>
                        <h3>FREE RETURNS</h3>
                        <h5>CONDITIONS APPLY</h5>
                    </div>
                    <p>|</p>
                    <div>
                        <h3>SHEIN CLUB</h3>
                    </div>
                </div>
            </div>

            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div>
                            <img src="//img.ltwebstatic.com/images3_ccc/2023/12/15/1c/1702629944e3a4f30f7efe63cc8be8a97539f7a4fe.webp" alt="" style={{width: '100%'}}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="//img.ltwebstatic.com/images3_ccc/2024/01/12/55/1705054647ce57d6bdeb0a9e5bfdece0d7a99b1543_thumbnail_2000x.webp" alt="" style={{width: '100%'}} />
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="//img.ltwebstatic.com/images3_ccc/2024/01/12/07/1705054633caf03d0aa5135e49f59ebe6fff3507be_thumbnail_2000x.webp" alt="" style={{width: '100%'}}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="//img.ltwebstatic.com/images3_ccc/2024/01/08/25/1704695945205f66011f35e6b1941df17a56572489.webp" alt="" style={{width: '100%'}}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}