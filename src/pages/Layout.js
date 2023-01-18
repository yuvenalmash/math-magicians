import { Outlet, Link } from 'react-router-dom';
import './css/Layout.css';

const Layout = () => (
  <div id="mainLayout">
    <nav>
      <p id="logo">Math Magicians</p>
      <ul>
        <li>
          <Link to="/"><button className="navBtn" type="button">Home</button></Link>
        </li>
        <li>
          <Link to="/calculator"><button className="navBtn" type="button">Calculator</button></Link>
        </li>
        <li>
          <Link to="/quote"><button className="navBtn" type="button">Quote</button></Link>
        </li>
      </ul>
    </nav>

    <Outlet />

    <footer>
      <p>For the love of mathematics</p>
    </footer>
  </div>
);

export default Layout;
