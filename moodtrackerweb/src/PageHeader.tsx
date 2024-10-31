import {Link} from "react-router-dom";
import Button from "./Button.tsx";

interface PageHeaderProps {
    title: string;
}

const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className={"flex relative justify-center items-center"}>
            <Link className={"absolute left-[-6rem]"} to="/"><Button>Home</Button></Link>
            <h1 className={"inline"}>{props.title}</h1>
        </div>
    );
}
export default PageHeader;