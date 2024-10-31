import Button from "./Button.tsx";
import {useState} from "react";
import EntryRow from "./EntryRow.tsx";
import PageHeader from "./PageHeader.tsx";

interface Entry {
    id: string;
    date?: string;
    depression?: number;
    anxiety?: number;
    stress?: number;
    happiness?: number;
    mania?: number;
    overall?: number;
    notes?: string;
}

function EntriesPage() {

    const [items, setItems] = useState(new Array<Entry>());

    return (
        <>
            <PageHeader title={"Entries"}/>

            <div className={"flex flex-col justify-center gap-4 my-8"}>
                <Button
                    onClick={() => {
                        const uuid = crypto.randomUUID();
                        setItems([...items, {id: uuid}]);
                    }}
                >Add Item</Button>
                Items({items.length})
                {items.map((item) => {
                    return <EntryRow id={item.id}></EntryRow>
                })}
            </div>
        </>
    )
}

export default EntriesPage
