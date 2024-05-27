import { copyrightSign } from "../assets/icons";
import { footerLogo1 } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo1} alt="" width={140} height={46} />
          </a>
          <p className="mt-6 text-base font-poppins leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((icon) => (
              <div key={icon.src} className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={22} height={22} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-poppins text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-poppins text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:items-center text-white-400 mt-24 max-sm:flex-col">
          <div className="flex flex-1 justify-start items-center gap-2 font-poppins cursor-pointer">
            <img src={copyrightSign} alt="copyright sign" height={18} width={18} className="m-0 rounded-full" />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-poppins cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
