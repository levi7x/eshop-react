import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <>
      <div>
        <MainNavigation />
      </div>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
