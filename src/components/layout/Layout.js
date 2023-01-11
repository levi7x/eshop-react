import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import "./Layout.css"

function Layout(props) {
  return (
    <body>
      <nav>
        <MainNavigation />
      </nav>
      <div className="content">
        <main className="main">{props.children}</main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </body>
  );
}

export default Layout;
