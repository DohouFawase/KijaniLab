import { Outlet } from "react-router";
import Navigation from "../components/navigation/navBar";
export default function Layout() {
  return (
    <div>
   <Navigation />
     <Outlet />
     ben
    </div>
  )
}
