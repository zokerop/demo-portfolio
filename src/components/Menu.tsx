const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleOpen = () => {
    setMenuOpen(false);
  };
  const menuItems = [
    { id: 1, href: "#intro", text: "Home" },
    { id: 2, href: "#portfolio", text: "Portfolio" },
    { id: 3, href: "#work", text: "Works" },
    { id: 4, href: "#testimonials", text: "Testimonials" },
    { id: 5, href: "#contact", text: "Contact" },
  ];
  return (
    <div
      className={
        "menu " +
        (menuOpen && "active ") +
        "w-[300px] h-[100vh] bg-black text-white fixed top-0 right-[-300px] z-10 flex flex-col items-center justify-center"
      }
    >
      <ul className="list-none text-[40px] ">
        {menuItems.map((i) => (
          <li onClick={handleOpen} key={i.id}>
            <a href={i.href}>{i.text} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
