import {Link} from "react-router-dom";
import Button from "./Button.tsx";
import {useState} from "react";

interface Entry {
    id: string;
    date?: string;
    depression?: number;
    anxiety?: number;
    stress?: number;
    happiness?: number;
    mania?: number;
    overall?: number;
}

function EntriesPage() {

    const [items, setItems] = useState(new Array<Entry>());

    return (
        <>
            <div className={"flex relative justify-center items-center"}>
                <Link className={"absolute left-[-6rem]"} to="/"><Button>Home</Button></Link>
                <h1 className={"inline"}>Entries</h1>
            </div>

            <div className={"flex flex-col justify-center gap-4 my-8"}>
                <Button
                    onClick={() => {
                        const uuid = crypto.randomUUID();
                        setItems([...items, {id: uuid}]);
                    }}
                >Add Item</Button>
                Items({items.length})
                {items.map((item) => {
                    return <div key={item.id}>{item.id}</div>
                })}
            </div>
        </>
    )
}

export default EntriesPage
