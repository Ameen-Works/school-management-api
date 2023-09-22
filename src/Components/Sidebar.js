import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [componentClicked, setComponentClicked] = useState(false);
  const [utilityClicked, setUtilityClicked] = useState(false);
  const [pagesClicked, setPagesClicked] = useState(false);

  let handleComponentCollapse = () => {
    setComponentClicked(!componentClicked);
    setPagesClicked(false);
    setUtilityClicked(false);
  };

  let handlePagesCollapse = () => {
    setPagesClicked(!pagesClicked);
    setUtilityClicked(false);
    setComponentClicked(false);
  };

  let handleUtilityCollapse = () => {
    setUtilityClicked(!utilityClicked);
    setPagesClicked(false);
    setComponentClicked(false);
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand -->*/}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider -->*/}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard -->*/}
      <li className="nav-item active">
        <a
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      {/* <!-- Divider -->*/}
      <hr className="sidebar-divider" />

      {/* <!-- Heading -->*/}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu -->*/}
      <li className="nav-item">
        <a
          onClick={handleComponentCollapse}
          className={componentClicked ? "nav-link" : "nav-link collapsed"}
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded={componentClicked ? "true" : "false"}
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>School Management</span>
        </a>
        <div
          id="collapseTwo"
          className={componentClicked ? "collapse show" : "collapse"}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a
              className="collapse-item"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/students-list")}
            >
              Students List
            </a>
            <a
              className="collapse-item"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/teachers-list")}
            >
              Teachers List
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Divider -->*/}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) -->*/}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
