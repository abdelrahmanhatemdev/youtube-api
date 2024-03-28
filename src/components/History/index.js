import { useLoaderData, useNavigation } from "react-router-dom";
import { getHistory, isRequestLimit } from "../../helpers/data";
import HistoryList from "./HistoryList";
import { Categories } from "..";

export async function loader({params, request}) {
    const videos = await getHistory();

    console.log(videos);

    return {videos}
}

export default function History() {
    let {videos} = useLoaderData();
    const navigation = useNavigation();

    return (
        <>
            <Categories/>
            <section className={"results " + (navigation.state === "loading" ? "loading": "")}>
                <HistoryList videos={videos} className={navigation.state === "loading" ? "loading": ""}/>
            </section>
        </>
    )
}
