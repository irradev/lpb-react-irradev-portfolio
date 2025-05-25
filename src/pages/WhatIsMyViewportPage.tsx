import React, { useState, useEffect } from 'react';

const WhatIsMyViewportPage: React.FC = () => {
  const [viewportInfo, setViewportInfo] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    dpr: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setViewportInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // Use flex to center the content block vertically and horizontally within the available space
    // Adjust min-h if navbar/footer height is known (e.g., min-h-[calc(100vh-10rem)])
    // For simplicity, using a significant portion of screen height and relying on MainLayout's structure.
    // text-white is inherited from MainLayout or can be set here explicitly if needed.
    // MainLayout background: "bg-stone-800 bg-gradient-to-b from-teal-900 via-teal-700 to-teal-900"
    // Text should be light colored.
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-white p-4"> {/* Assuming 160px for nav+footer */}
      <div className="text-center bg-black bg-opacity-20 p-8 rounded-lg shadow-xl"> {/* Inner container for content with a subtle background */}
        <h1 className="text-4xl font-bold mb-8">Viewport Information</h1>
        <p className="text-xl mb-3">Width: <span className="font-semibold text-teal-300">{viewportInfo.width}</span>px</p>
        <p className="text-xl mb-3">Height: <span className="font-semibold text-teal-300">{viewportInfo.height}</span>px</p>
        <p className="text-xl mb-6">Device Pixel Ratio (DPR): <span className="font-semibold text-teal-300">{viewportInfo.dpr}</span></p>
        <div className="mt-6 text-sm text-gray-300 max-w-md mx-auto"> {/* Constrain width of the note */}
          <p>
            Note: Device Pixel Ratio (DPR) is displayed. True Dots Per Inch (DPI) 
            is not directly accessible via standard web APIs. 
          </p>
          <p className="mt-2">
            Approximate DPI can be estimated as <code className="bg-gray-700 p-1 rounded">DPR * 96</code>, assuming a standard 
            96 DPI baseline (common on Windows). Actual physical DPI varies by device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMyViewportPage;
