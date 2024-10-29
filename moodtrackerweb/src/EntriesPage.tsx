import {Link} from "react-router-dom";
import Button from "./Button.tsx";

function EntriesPage() {

    return (
        <>
            <div className={"bg-red-500"}>
                <Link to="/"><Button>Home</Button></Link>
                <h1>Entries</h1>
            </div>
        </>
    )
}

export default EntriesPage
