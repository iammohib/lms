import { GiHamburgerMenu } from "react-icons/gi";

import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
function HomeLayout({ children }) {
  return (
    <div>
      <GiHamburgerMenu />
      {/* Todo: Sidebar */}
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
