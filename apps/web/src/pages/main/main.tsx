import image from "../../assets/images/default.png";

import "./main.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import PageContent from "../../components/pageContent/pageContent.js";
import { testExercises } from "../../testData/exercises.js";
// Import Swiper styles
import "swiper/css";
import { recomendationsData } from "../../testData/recomendations.js";
import woman from "../../assets/images/woman.png"
import CarouselItem from "../../components/carouselItem/carouselItem.js";
import { ExerciseCard } from "../../components/card/card.js";
import { NavLink } from "react-router";

export const MainPage = () => {
    return (
        <PageContent>
            <div className="greeting">
                <p>Доброе утро,</p>
                <h1>Антон Зубенко</h1>
            </div>
            <h2>Популярные курсы</h2>
            <Swiper spaceBetween={150} slidesPerView={1} >
                {recomendationsData.map(rec => <SwiperSlide>
                    <CarouselItem {...rec} image={woman} />
                </SwiperSlide>)}
            </Swiper>

            <h2>Занятия на сегодня</h2>
            <div className="exercises">
                {testExercises.map((ex) => (
                    <NavLink to={`/exercise/${ex.id}`} className="nav-link-exercise">
                        <ExerciseCard key={ex.id} {...ex} image={image} />
                    </NavLink>
                ))}
            </div>
        </PageContent >
    );
};