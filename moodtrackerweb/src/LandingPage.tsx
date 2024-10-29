import Button from "./Button.tsx";
import {Link} from "react-router-dom";

function LandingPage() {

    return (
        <>
            <h1>Welcome! Let's track your mood!</h1>
            <Link to="/entries"><Button>Entries</Button></Link>
            <Link to="/stats"><Button>Stats</Button></Link>
        </>
    )
}

export default LandingPage