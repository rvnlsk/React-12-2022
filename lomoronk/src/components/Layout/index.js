import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import "./index.scss";



// const Layout = () => {
//     return (
//     <>
//     <Sidebar />
//     </>
//     )
// }


// const Layout = () => (
//     <>
//       <Sidebar />
      
//     </>
//   );

const Layout = () => (
    <div className="layout">
      <Sidebar />

      <div className="page">
      <span className="tags top-tags">&lt;body&gt;</span>

      <Outlet />

      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />

      <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>

      </div>
      {/* rest of the layout component code */}
    </div>
  );

export default Layout