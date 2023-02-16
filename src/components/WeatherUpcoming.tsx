import { UpcomingWeather } from "../api";
import { WeatherIcon } from "./WeatherIcon";
import styles from './WeatherUpcoming.module.css';

export const WeatherUpcoming = ({ upcoming }: { upcoming: UpcomingWeather[] }) => {
    return (
        <div className={styles.Wrapper}>
            {upcoming.map((u) => {
                return (
                    <div className={styles.Item}>
                        <WeatherIcon condition={u.condition} />
                        <span className={styles.Day}>{u.day}</span>
                    </div>
                );
            })}
        </div>
    );
};
