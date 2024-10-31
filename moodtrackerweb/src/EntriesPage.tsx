import Button from "./Button.tsx";
import {useState} from "react";
import EntryRow from "./EntryRow.tsx";
import PageHeader from "./PageHeader.tsx";
import {Entity, EntriesModel, getEntriesModel, saveEntity, saveEntriesModel, SupportedVersions} from "./DataStore.ts";

interface Entry extends Entity {
    date: string;
    depression?: number;
    anxiety?: number;
    stress?: number;
    happiness?: number;
    mania?: number;
    overall?: number;
    notes?: string;
}

function EntriesPage() {

    const [entriesModel, setEntriesModel] = useState<EntriesModel | undefined>(getEntriesModel());

    const handleEntriesListChange = () => {
        setEntriesModel(getEntriesModel());
    };

    return (
        <>
            <PageHeader title={"Entries"}/>
            <Button onClick={() => {
                const newEntry: Entry = {
                    id: crypto.randomUUID(),
                    version: SupportedVersions.v1,
                    date: new Date().toISOString(),
                };
                const newList = entriesModel ? entriesModel.entriesList : [];
                newList.push(newEntry.id)

                const newModel = entriesModel ? {...entriesModel, entriesList: newList} : {
                    entriesList: [newEntry.id],
                    version: SupportedVersions.v1
                };

                saveEntity(newEntry);
                saveEntriesModel(newModel);
                handleEntriesListChange();
            }}>Add Entry</Button>
            <div className={"flex flex-col justify-center gap-4 my-8"}>
                {entriesModel && entriesModel.entriesList.map((entryId) =>
                    <EntryRow key={entryId} id={entryId} onDelete={handleEntriesListChange}/>
                )}
            </div>
        </>
    )
}

export default EntriesPage
