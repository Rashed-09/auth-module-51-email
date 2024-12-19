import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropType from "prop-types";

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading) {
        return <span className="loading loading-spinner loading-md"></span>;

    }
    if(user){
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivetRout;
PrivetRout.propTypes = {
    children: PropType.node
}