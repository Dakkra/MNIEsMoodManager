import Button from "./Button.tsx";
import {useState} from "react";
import {deleteEntity, getEntriesModel, saveEntriesModel} from "./DataStore.ts";

interface EntryProps {
    id: string;
    onDelete: () => void;
}

const EntryRow = (props: EntryProps) => {
    const id = props.id;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div className="flex flex-row gap-2 bg-gray-700 rounded-lg p-2">
                <div>Date: 12/12/12</div>
                <div>Overall: 7</div>
                <div>Happiness: 7</div>
                <div>Depression: 7</div>
                <div>Anxiety: 7</div>
                <div>Stress: 7</div>
                <div>Mania: 7</div>
                <Button onClick={() => setIsExpanded(!isExpanded)}>...</Button>
            </div>
            {isExpanded &&
                <div className={"flex flex-col"}>
                    <div>Id:{id}</div>
                    <div>{"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."}</div>
                    <Button onClick={() => {
                        const entriesModel = getEntriesModel();
                        const newList = entriesModel.entriesList.filter((entryId) => entryId !== id);
                        saveEntriesModel({...entriesModel, entriesList: newList})
                        deleteEntity(id);
                        props.onDelete();
                    }}>Delete</Button>
                </div>
            }
        </div>
    )
}
export default EntryRow;