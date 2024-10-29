import {Link} from "react-router-dom";
import Button from "./Button.tsx";

function StatsPage() {

    return (
        <>
            <Link to="/"><Button>Home</Button></Link>
            <h1>Statistics</h1>
        </>
    )
}

export default StatsPage
