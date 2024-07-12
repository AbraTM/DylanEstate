import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./navbar.css"
import Logo from "./assets/nav-logo.svg"
import LanguageSVG from "./assets/language.svg"
import ProfileSVG from "./assets/profile.svg"

export default function NavBar(){
    const loc = useLocation()
    const navType = loc.pathname
    return(
    <div>
        <nav className="navbar">
            <Link to={"/"}>
                <img src={Logo} className="nav-logo"></img>
            </Link>
            {
                navType != "/property-preview" ?
                <nav className="nav-options">
                    <NavLink to={"/properties"}>PROPERTIES</NavLink>
                    <NavLink to={"/dashboard"}>MY DASHBOARD/ACTIVITY</NavLink>
                    <NavLink to={"/list-property"}>LIST YOUR PROPERTY</NavLink>
                    <NavLink to={"/contact-us"}>CONTACT US</NavLink>
                    <div className="nav-divider-line"></div>
                    <img src={LanguageSVG}></img>
                    <img src={ProfileSVG}></img>
                </nav>
                :
                <nav className="nav-options">
                    <NavLink to={"/all-properties"}>ALL PROPERTIES</NavLink>
                    <NavLink to={"/wishlist"}>WISHLIST</NavLink>
                    <NavLink to={"/saved-search"}>SAVED SEARCH</NavLink>
                    <NavLink to={"/list-your-property"}>LIST YOUR PROPERTY</NavLink>
                    <NavLink to={"/more"}>MORE</NavLink>
                    <div className="nav-divider-line"></div>
                    <img src={LanguageSVG}></img>
                    <img src={ProfileSVG}></img>
                </nav>
            }
        </nav>
        <Outlet/>
    </div>
    )
}