import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">Tanuljunk angolul!</header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Válaszd ki!</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="rendez">Egészítsd ki!</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="gepel">Rakd sorba!</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
                <article>

                </article>

            </div >
        </>
    );
};

export default Layout;
