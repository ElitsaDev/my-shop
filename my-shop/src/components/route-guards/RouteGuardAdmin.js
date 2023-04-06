import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

export default function RouteGuardAdmin() {
    const { isAdmin } = useContext(AuthContext);

    if (!isAdmin) {
        return <Navigate to={"/"} />
    }
    return (
        <Outlet />
    );
}