import { Outlet } from "react-router";
import Navigation from "../components/navigation/navBar";
import Footer from "../components/navigation/footer";
export default function Layout() {
  return (
    <div>
   <Navigation />
     <Outlet />
     <Footer/>
    </div>
  )
}
