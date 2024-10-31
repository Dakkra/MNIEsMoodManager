import Button from "./Button.tsx";
import {Link} from "react-router-dom";

function LandingPage() {

    return (
        <>
            <div className={"flex flex-col justify-center gap-4"}>
                <h1>Welcome! Let's track your mood!</h1>
                <div className={"flex flex-row justify-center gap-4"}>
                    <Link to="/entries"><Button>Entries</Button></Link>
                    <Link to="/stats"><Button>Stats</Button></Link>
                    <Link to="/settings"><Button>Settings</Button></Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage