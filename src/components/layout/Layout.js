import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import "./Layout.css";

function Layout(props) {
  return (
    <body className="body">
      <header className="header">
        <MainNavigation />
      </header>
        <main>{props.children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </body>
  );
}

export default Layout;
