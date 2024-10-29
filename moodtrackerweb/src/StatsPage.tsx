import {Link} from "react-router-dom";
import Button from "./Button.tsx";

function StatsPage() {

    return (
        <>
            <div className={"flex relative justify-center items-center"}>
                <Link className={"absolute left-[-6rem]"} to="/"><Button>Home</Button></Link>
                <h1 className={"inline"}>Statistics</h1>
            </div>
        </>
    )
}

export default StatsPage
