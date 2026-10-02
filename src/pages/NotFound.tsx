import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RouteScroll from "@/components/RouteScroll";

const NotFound = () => (
  <>
    <SEO title="Page not found | Saurabh Upadhayay" description="This page couldn't be found. Return to Saurabh's portfolio." noindex />
    <Header />
    <main id="main-content" className="state-page site-container" tabIndex={-1}>
      <div className="state-content">
        <span className="eyebrow">404</span>
        <h1>This page doesn't exist.</h1>
        <p>The address may be wrong, or the page may have moved. You can head back to my portfolio.</p>
        <Link to="/" className="button button-primary"><ArrowLeft size={16} aria-hidden="true" />Return to the portfolio</Link>
      </div>
    </main>
    <Footer />
    <RouteScroll />
  </>
);

export default NotFound;
