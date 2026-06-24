import FooterQuote from "./FooterQuote";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
        <main>
         <Outlet/>
        </main>
        <FooterQuote />
    </div>
  )
}
