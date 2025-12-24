import { Navigate, Route, Routes } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { ProjectDetails } from "../pages/ProjectDetails";
import { NotFound404 } from "../pages/NotFound404";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="project/:id" element={<ProjectDetails />} />
                <Route path="page-not-found" element={<NotFound404 />} />
            </Route>


            {/* Redirect */}
            <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Routes>
    );
};