import {Link} from "react-router-dom";
import Button from "./Button.tsx";

function EntriesPage() {

    return (
        <>
            <Link to="/"><Button>Home</Button></Link>
            <h1>Entries</h1>
        </>
    )
}

export default EntriesPage
