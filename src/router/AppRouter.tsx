import { Navigate, Route, Routes } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { ProjectDetails } from "../pages/ProjectDetails";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="project/:id" element={<ProjectDetails />} />
            </Route>

            // Redirect
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};