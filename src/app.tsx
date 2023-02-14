import { useParams } from "react-router";
import { useGetPageInfoQuery } from "./api";
import { Image } from "./components/Image";
import { Weather } from "./components/Weather";
import { assertUnreachable } from "./utils";

const App = () => {
    const { id } = useParams<{ id: string }>();

    const r = useGetPageInfoQuery(id);

    if (r.isSuccess) {
        return (
            <div>
                <div>
                    {r.data.data.lists[0].components.map((id) => {
                        const cmp = r.data.data.components.find((c) => c.id === id);
                        if (!cmp) {
                            return <span>Not Found</span>;
                        }

                        switch (cmp.type) {
                            case "image":
                                return <Image src={cmp.options.src} alt={cmp.options.alt}></Image>;
                            case "weather":
                                return <Weather />;
                            default:
                                return assertUnreachable(cmp.type);
                        }
                    })}
                </div>
            </div>
        );
    }
    return <span>waiting</span>
    // return <pre>{JSON.stringify(r, null, 2)}</pre>;
    // return <div>Render {id}</div>;
};

export default App;
