import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] bg-gray-800 py-5 text-white flex flex-col items-center justify-between sm:flex-row sm:px-20">
        <section className="text-lg">
          Copyright {year} | All right reserved.
        </section>
        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
