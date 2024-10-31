import Button from "./Button.tsx";
import {useState} from "react";
import EntryRow from "./EntryRow.tsx";
import PageHeader from "./PageHeader.tsx";
import {
    Entity,
    EntriesModel,
    getEntity,
    getEntriesModel,
    saveEntity,
    saveEntriesModel,
    SupportedVersions
} from "./DataStore.ts";

export interface Entry extends Entity {
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

    const entries = entriesModel ? entriesModel.entriesList.map((entryId) => getEntity<Entry>(entryId)).filter((entry) => entry !== undefined) : [];
    const entriesMap = new Map<string, Entry>(entries.map((entry) => [entry.id, entry]))

    const entryDateMap = entriesModel ? new Map<string, Date>(entriesModel.entriesList.map((entryId) => {
        getEntity<Entry>(entryId);
        return [entryId, new Date(entriesMap.get(entryId)?.date ?? "")];
    })) : undefined;

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
                {entriesModel && entriesModel.entriesList.sort((a, b) => {
                    const aDate = entryDateMap?.get(a);
                    const bDate = entryDateMap?.get(b);
                    if (aDate && bDate) return bDate.getTime() - aDate.getTime();
                    return 0;
                }).map((entryId) =>
                    <EntryRow key={entryId} id={entryId} onDelete={handleEntriesListChange}/>
                )}
            </div>
        </>
    )
}

export default EntriesPage
