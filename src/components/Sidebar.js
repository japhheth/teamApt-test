import {
  BsArrowBarLeft,
  BsArrowBarRight,
  BsLayers,
  BsPlusLg,
  BsChevronUp,
} from "react-icons/bs";
import SidebarNavLinks from "./SidebarNavLinks";
import { navigationLinks } from "../utils/helpers";
import Avatar from "../assets/img/avatar.jpg";

const Sidebar = ({
  activeNav,
  setActiveNav,
  handleSideBarToggle,
  toggleSidebar,
}) => {
  return (
    <nav className="h-screen bg-zinc-50 shadow p-8 transition-width relative">
      <div className="nav-header">
        {toggleSidebar ? (
          <>
            <span className="text-white bg-blue-700 p-2 rounded-full mr-2">
              <BsLayers size={25} />
            </span>
            <span className="text-gray-500">PJ</span>
            <BsArrowBarLeft
              onClick={handleSideBarToggle}
              className="nav-toggler"
              size={24}
              style={{ marginLeft: "auto" }}
            />
          </>
        ) : (
          <BsArrowBarRight
            onClick={handleSideBarToggle}
            className="nav-toggler"
            size={24}
          />
        )}
      </div>
      <ul className="nav-list">
        {navigationLinks.map((i, index) => (
          <SidebarNavLinks
            key={index}
            name={i.name}
            icon={i.icon}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            toggleSidebar={toggleSidebar}
          />
        ))}
      </ul>
      {toggleSidebar && (
        <div className="mt-20 bg-blue-50 p-6 flex rounded-lg">
          <div className="w-7/12">
            <p className="leading-6 text-lg">
              <span className="block">Create</span>
              <span className="block">new task</span>
            </p>
          </div>
          <div className="w-5/12 flex justify-end items-center">
            <div className="text-white bg-blue-600 rounded-full p-2 font-bold cursor-pointer">
              <BsPlusLg size={19} />
            </div>
          </div>
        </div>
      )}
      {toggleSidebar && (
        <div className="flex absolute bottom-20 justify-center items-center">
          <div>
            <img src={Avatar} className="w-12 h-12 rounded-full" alt="avatar" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="font-bold text-sm">Finna A.</p>
            <span className="text-xs text-gray-400">fina@iksg.com</span>
          </div>
          <div className="flex justify-center items-center ml-6 text-gray-400">
            <BsChevronUp size={16} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
