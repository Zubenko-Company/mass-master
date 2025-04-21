
import "./carouselItem.css";
import { BsFire, BsFillStopwatchFill } from "react-icons/bs";

type CarouselItemProps = {
    name: string,
    calories: number,
    time: number,
    image: string
}

export default function CarouselItem({ name, calories, time, image }: CarouselItemProps) {


    return (
        <div className="carousel-item">
            <img
                src={image}
                className="carousel-image"
            />
            <h2 className="item-name">{name}</h2>
            <p><BsFire /> <span>{calories} кал</span></p >
            <p><BsFillStopwatchFill /> {time} мин</p>
        </div >
    );
}


