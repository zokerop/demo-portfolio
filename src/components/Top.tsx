import { RiUser3Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
const Top = ({ menuOpen, setMenuOpen }) => {
  function handleBurger() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div
      className={
        "topBar " +
        (menuOpen && "active") +
        " bg-white text-black w-full h-[70px] fixed top-0 z-20 transition-all  "
      }
    >
      <div className="flex items-center justify-between pt-2 pb-2 pl-7 pr-7">
        <div className="flex items-center left">
          <a href="#intro" className="text-[30px] font-extrabold mr-10">
            zoker...
          </a>
          <div className="itemConatiner">
            <RiUser3Fill className="inline-block icon" />
            <span className="itemInfo">+91 9871753751</span>
          </div>
          <div className="itemConatiner">
            <IoMdMail className="inline-block icon" />
            <span className="itemInfo">rajputabhic12@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger " onClick={handleBurger}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
