const SidebarNavLinks = ({
  name,
  icon: Icon,
  setActiveNav,
  activeNav,
  toggleSidebar,
}) => {
  return (
    <li
      className="text-gray-500 mb-6"
      onClick={() => {
        setActiveNav(name);
      }}
    >
      <a href="#" id={activeNav === name ? "active-nav" : ""} className="flex">
        <Icon className="mr-4" />
        {toggleSidebar && <span>{name}</span>}
      </a>
    </li>
  );
};

export default SidebarNavLinks;
