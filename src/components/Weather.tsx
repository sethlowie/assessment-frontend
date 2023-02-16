import { useGetWeatherInfoQuery } from "../api";
import styles from "./Weather.module.css";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherUpcoming } from "./WeatherUpcoming";
import { Loader } from "./Loader";
import { Card } from "./Card";

export const Weather = ({ c }: { c: any }) => {
    const response = useGetWeatherInfoQuery(c.options);
    if (response.isSuccess) {
        const { data } = response.data;
        return (
            <Card>
                <div className={styles.Wrapper}>
                    <div className={styles.Condition}>
                        <WeatherIcon width={75} condition={data.condition} />
                        <div>
                            <div className={styles.Temp}>
                                {data.temperature}°{data.unit}
                            </div>
                            <div>{data.conditionName}</div>
                        </div>
                    </div>
                    <div className={styles.Details}>
                        <div>{data.location}</div>

                        <WeatherUpcoming upcoming={data.upcomming} />
                    </div>
                </div>
            </Card>
        );
    }
    return (
        <Card>
            <Loader />
        </Card>
    );
};
