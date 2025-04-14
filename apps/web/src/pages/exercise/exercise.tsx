import image from "../../assets/images/default.png";
import { ExerciseCard } from "./card/card.js";

import "./exercise.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import PageContent from "../../components/pageContent/pageContent.js";
import { testExercises } from "../../testData/exercises.js";
import CarouselItem from "./carouselItem/carouselItem.js";
// Import Swiper styles
import "swiper/css";
import { recomendationsData } from "../../testData/recomendations.js";
import woman from "../../assets/images/woman.png"

export const ExercisePage = () => {
    return (
        <PageContent>
            <div className="greeting">
                <p>Доброе утро,</p>
                <h1>Антон Зубенко</h1>
            </div>
            <h2>Популярные курсы</h2>
            <Swiper spaceBetween={150} slidesPerView={1}>
                {recomendationsData.map(rec => <SwiperSlide>
                    <CarouselItem {...rec} image={woman} />
                </SwiperSlide>)}
            </Swiper>

            <h2>Занятия на сегодня</h2>
            <div className="exercises">
                {testExercises.map((ex) => (
                    <ExerciseCard key={ex.id} {...ex} image={image} />
                ))}
            </div>
        </PageContent>
    );
};