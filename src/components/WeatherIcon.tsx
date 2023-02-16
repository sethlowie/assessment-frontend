import cloudySvg from "../icons/cloudy.svg";
import rainSvg from "../icons/rain.svg";

export const WeatherIcon = ({ condition, width = 50 }: { condition: string; width?: number }) => {
    switch (condition) {
        case "cloudy":
            return <img src={cloudySvg} alt="" width={width} />;
        case "rain":
            return <img src={rainSvg} alt="" width={width} />;
        default:
            return <span>-</span>;
    }
};
