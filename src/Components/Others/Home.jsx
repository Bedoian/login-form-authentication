import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const useobj=useContext(AuthContext)
    console.log(useobj)
    return (
        <div>
            <h1>This is home section</h1>
        </div>
    );
};

export default Home;