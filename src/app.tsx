import { useParams } from "react-router";
import { useGetPageInfoQuery, ComponentSchema } from "./api";
import { Image } from "./components/Image";
import { Weather } from "./components/Weather";
import { Loader } from './components/Loader';
import { assertUnreachable } from "./utils";
import React from "react";
import styles from "./app.module.css";

const renderComponent = (component: ComponentSchema): React.ReactChild => {
    switch (component.type) {
        case "image":
            return <Image src={component.options.src} alt={component.options.alt}></Image>;
        case "weather":
            return <Weather c={component} />;
        default:
            return assertUnreachable(component);
    }
};

const App = () => {
    const { id } = useParams<{ id: string }>();

    const r = useGetPageInfoQuery(id);

    if (r.isSuccess) {
        return (
            <div className={styles.Wrapper}>
                {r.data.data.lists[0].components.map((id) => {
                    const component = r.data.data.components.find((c) => c.id === id);
                    if (!component) {
                        return <span>Not Found</span>;
                    }

                    return renderComponent(component);
                })}
            </div>
        );
    }
    return <Loader />
};

export default App;
