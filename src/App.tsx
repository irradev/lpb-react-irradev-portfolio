import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Define the lazy-loaded component for the new page
const WhatIsMyViewportPage = lazy(
   () => import('./pages/WhatIsMyViewportPage')
);

// Lazily import HomePage
const HomePage = lazy(() => import('./pages/HomePage'));

// Lazily import ProjectsPage
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// Lazily import ContactPage
const ContactPage = lazy(() => import('./pages/ContactPage'));

// MainLayout now contains <Outlet /> and renders page-specific components passed by the router.

function App() {
   return (
      <BrowserRouter>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               {/* MainLayout acts as a layout route, wrapping child routes.
                   It now contains an <Outlet /> component in its definition. */}
               <Route element={<MainLayout />}>
                  <Route
                     path="/what-is-my-viewport"
                     element={<WhatIsMyViewportPage />}
                  />
                  {/* Route for the main page content, now rendering HomePage */}
                  <Route path="/" element={<HomePage />} />
                  {/* Route for the Projects page */}
                  <Route path="/projects" element={<ProjectsPage />} />
                  {/* Route for the Contact page */}
                  <Route path="/contact" element={<ContactPage />} />
                  {/* Other routes intended to be within MainLayout would be added here,
                      e.g., <Route path="/about" element={<AboutPage />} /> */}
               </Route>
               {/* Routes that should not use MainLayout (if any) would be defined here,
                   as siblings to the <Route element={<MainLayout />}> route. */}
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
}

export default App;
