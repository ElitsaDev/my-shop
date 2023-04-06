import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

export default function RouteGuardGuest() {
    const { isAdmin, isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated || isAdmin) {
        return <Navigate to={"/"} />
    }

    return (
        <Outlet />
    );
}