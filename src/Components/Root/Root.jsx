import { Outlet } from "react-router-dom";
import Nav from "../Others/Nav";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;