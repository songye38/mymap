import NavBar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;  // children component to be rendered within the layout.
}

export default function Layout({children}:LayoutProps){
    return (
    <div className="layout">
        <NavBar />
        {children}
    </div>
    )
}