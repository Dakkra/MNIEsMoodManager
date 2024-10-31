import Button from "./Button.tsx";
import {useState} from "react";
import {deleteEntity, getEntity, getEntriesModel, saveEntriesModel} from "./DataStore.ts";
import {Entry} from "./EntriesPage.tsx";

interface EntryProps {
    id: string;
    onDelete: () => void;
}

const LabelledEntry = (props: { label: string, setValue: (value: string) => void }) => {
    return <div className={"flex flex-row gap-2"}>
        <div className={"text-lg"}>{props.label}:</div>
        <input className={"h-10 w-10 rounded-lg"} type={"text"} onChange={(event) => {
            props.setValue(event.target.value);
        }}></input>
    </div>
}

const EntryRow = (props: EntryProps) => {
    const id = props.id;
    const entry = getEntity<Entry>(id);
    const [isExpanded, setIsExpanded] = useState(false);

    if (!entry) return null;

    return (
        <div>
            <div className="flex flex-col gap-2 bg-gray-700 rounded-lg p-2">
                <div className={"text-lg bg-gray-800 p-2 rounded-lg"}>Date-Time: {new Date(entry.date).toString()}</div>
                <div className={"flex flex-row gap-2 "}>
                    <LabelledEntry label={"Overall"} setValue={() => {
                    }}/>
                    <LabelledEntry label={"Happiness"} setValue={() => {
                    }}/>
                </div>
                {isExpanded &&
                    <div className={"flex flex-row gap-2 "}>
                        <LabelledEntry label={"Depression"} setValue={() => {
                        }}/>
                        <LabelledEntry label={"Anxiety"} setValue={() => {
                        }}/>
                        <LabelledEntry label={"Stress"} setValue={() => {
                        }}/>
                        <LabelledEntry label={"Mania"} setValue={() => {
                        }}/>
                    </div>
                }
                <Button
                    onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Hide Details" : "Show Details"}</Button>
            </div>
            {isExpanded &&
                <div className={"flex flex-col"}>
                    <div>Id:{id}</div>
                    <div>{"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."}</div>
                    <Button onClick={() => {
                        const entriesModel = getEntriesModel();
                        if (entriesModel) {
                            const newList = entriesModel.entriesList.filter((entryId) => entryId !== id);
                            saveEntriesModel({...entriesModel, entriesList: newList})
                            deleteEntity(id);
                            props.onDelete();
                        }
                    }}>Delete</Button>
                </div>
            }
        </div>
    )
}
export default EntryRow;