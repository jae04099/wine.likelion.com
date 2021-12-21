import type { NextPage } from "next";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Wine";

const AlePage: NextPage = () => {
    const name = "ale";
    const { data, error } = useBeerData(name);
    if (error) return <div>error</div>;
    if (!data) return <div>...loading</div>;
    return (
        <div>
            <h1>Ales</h1>
            <main>
                {data.map((beerData: Beer) => {
                    const { id, price, name } = beerData;
                    return (
                        <div key={`ales-beer-list-${id}`}>
                            <h1>{name}</h1>
                            <h2>{price}</h2>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};

export default AlePage;
