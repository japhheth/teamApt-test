import { useRef, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import "../App.css";

const Home = () => {
  const calenderWrapperRef = useRef();
  const [activeNav, setActiveNav] = useState("Projects");
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const [calenderWrapperWidth, setCalenderWrapperWidth] = useState(0);

  const handleWrapperWidth = () => {
    setCalenderWrapperWidth(
      Number(getComputedStyle(calenderWrapperRef?.current)?.width.slice(0, -2))
    );
  };

  const handleSideBarToggle = () => {
    setToggleSidebar((prev) => !prev);
  };

  useEffect(() => {
    handleWrapperWidth();
  }, [toggleSidebar]);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        toggleSidebar={toggleSidebar}
        handleSideBarToggle={handleSideBarToggle}
      />
      <MainContent
        activeNav={activeNav}
        calenderWrapperWidth={calenderWrapperWidth}
        calenderWrapperRef={calenderWrapperRef}
      />
    </div>
  );
};

export default Home;
