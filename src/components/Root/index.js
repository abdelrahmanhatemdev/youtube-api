import {Outlet} from "react-router-dom";
import Base from "../partials/Base";
import "./root.css";

export async function loader(){
    return {};
}

export default function Root() {
    return <Base children={<Outlet/>}/>
}
