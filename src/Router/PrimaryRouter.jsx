import React from "react";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import AllPlayer from "../Pages/AllPlayer/AllPlayer";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateOutlet from "./PrivateOutlet";

const PrimaryRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PrimaryRouterOutlet />}>
                <Route index element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route element={<PrivateOutlet />}>
                    <Route path="all-player" element={<AllPlayer />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default PrimaryRouter;

const PrimaryRouterOutlet = () => {
    return (
        <>
            <Outlet />
        </>
    );
};
