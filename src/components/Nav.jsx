import { headerLogo1 } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo1} alt="Logo" height={29} width={140} />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal text-slate-gray font-poppins"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger menu" height={30} width={30} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
