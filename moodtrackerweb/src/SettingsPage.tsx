import PageHeader from "./PageHeader.tsx";
import Button from "./Button.tsx";
import {useState} from "react";
import {deleteAllEntries} from "./DataStore.ts";

const SettingsPage = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [showDeletedAllMessage, setShowDeletedAllMessage] = useState(false);

    return (
        <div>
            <PageHeader title={"Settings"}/>
            <div>
                <Button onClick={() => setShowDialog(true)}>Clear All Entries</Button>
            </div>
            {showDialog &&
                <div className={"fixed flex flex-col justify-center items-center inset-0 bg-black bg-opacity-50"}
                     onClick={() => setShowDialog(false)}>
                    <div className={"bg-gray-600 rounded-lg p-4 w-96"}
                         onClick={(e) => e.stopPropagation()}>

                        {showDeletedAllMessage && <div className={"text-xl"}>All entries deleted!</div>}

                        {!showDeletedAllMessage && <div className={"flex flex-col gap-4"}>
                            <div className={"text-xl"}>Are you sure you want to delete all entries?</div>
                            <div className={"flex-grow"}>
                                <Button onClick={() => setShowDialog(false)}>Cancel</Button>
                                <Button onClick={() => {
                                    deleteAllEntries();
                                    setShowDeletedAllMessage(true);
                                    setTimeout(() => {
                                        setShowDeletedAllMessage(false);
                                        setShowDialog(false);
                                    }, 2000);
                                }}>Delete</Button>
                            </div>
                        </div>}
                    </div>
                </div>}
        </div>
    )
}

export default SettingsPage;