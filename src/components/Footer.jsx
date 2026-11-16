import { ArrowUpRight } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">NM<span>.</span></a>
        <p>Designed & built with curiosity by {profile.name}.</p>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
        <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
      </div>
    </footer>
  );
}