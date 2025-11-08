import { useEffect, useState } from "react";
import Controls from "./Components/Controls";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import IPhone from "./Components/IPhone";
import MacBook from "./Components/MacBook";
import Watch from "./Components/Watch";
import IMac from "./Components/IMac";
import PageTransition from "./Components/PageTransition";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleZoom = () => {
    if(isLargeScreen){
      setFrameZoom((prev) => !prev);
    }
  };

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const resetPage = () => {
    setActivePage(0);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(prev => !prev)
  }

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] 
      border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-200 flex`}
      >
        <Controls
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
          resetPage={resetPage}
          activePage={activePage}
        />
        <Navbar activePage={activePage} handleNavClick={handleNavClick} isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        <div className="grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <IPhone />
            <MacBook />
            <Watch />
            <IMac />
          </PageTransition>
        </div>
      </div>
    </div>
  );
};

export default App;
