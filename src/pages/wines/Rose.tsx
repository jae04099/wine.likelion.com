import type { NextPage } from "next";
import {useWineData} from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const RosePage: NextPage = () => {
    const name = "rose";
    const {data, error} = useWineData(name)

    if(error) return <div>failed to loading</div>
    if(!data) return <div>...loading</div>

    return (
        <div>
            <h1>Rose</h1>
            <main>
                {data.map((wineData: Wine) => {
                    const {id, wine, winery} = wineData;
                    return (
                        <div key={`port-wine-list-${id}`}>
                            <h1>{wine}</h1>
                            <h2>{winery}</h2>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default RosePage;
