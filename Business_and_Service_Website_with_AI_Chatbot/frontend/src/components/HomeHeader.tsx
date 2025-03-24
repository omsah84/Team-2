"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          {/* Navbar */}
          <div
            className="w-full navbar"
            style={{ background: "black", color: "white", borderBottom: "1px solid gray" }}
          >
            <div className="flex-1 px-2 mx-2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "12px", // Slightly rounded icon container
                    background: "linear-gradient(135deg, #00f2fe, #4facfe)", // Purple gradient
                    marginRight: "8px",
                    fontWeight: "700",
                    fontSize: "15px"
                  }}
                >
                  &lt;/&gt;
                </div>
                <span
                  style={{
                    background: "linear-gradient(135deg, #00f2fe, #4facfe)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "700"
                  }}
                >
                  Service&lt;logo&gt;
                </span>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <Link href="/" style={{ color: "white" }}>Home</Link>
                </li>
                <li>
                  <Link href="/services" style={{ color: "white" }}>Services</Link>
                </li>
                <li>
                  <Link href="/work" style={{ color: "white" }}>Work</Link>
                </li>
                <li>
                  <Link href="/about" style={{ color: "white" }}>About</Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: "white" }}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                  style={{ color: "white" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side" style={{zIndex:"1000"}}>
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="min-h-full p-4 menu w-80"
            style={{ background: "black", color: "white" }}
          >
            {/* Sidebar content here */}
            <li>
            <Link href="/" style={{ color: "white" }}  >Home</Link>
            </li>
            <li>
              <Link href="/services" style={{ color: "white" }}>Services</Link>
            </li>
            <li>
              <Link href="/work" style={{ color: "white" }}>Work</Link>
            </li>
            <li>
              <Link href="/about" style={{ color: "white" }}>About</Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: "white" }}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
