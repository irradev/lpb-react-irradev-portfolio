import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Define the lazy-loaded component for the new page
const WhatIsMyViewportPage = lazy(
   () => import('./pages/WhatIsMyViewportPage')
);

// Note: The main page content (Banner, Projects, etc.) which was previously part of MainLayout
// will be re-integrated via a dedicated HomePage component rendered at the "/" path in a future step.
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
                  {/* 
                    Route for the main page content. 
                    This will render a placeholder until HomePage.tsx is created and used.
                    The components (Banner, Projects, etc.) previously in MainLayout will go into HomePage.
                  */}
                  <Route path="/" element={<div>Home Page (Content like Banner, Projects, Skills, Contact to be added here via HomePage.tsx)</div>} />
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
