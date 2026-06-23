import { Link } from "react-router-dom";

// Shared hero band for inner pages.
export default function PageHeader({ kicker, title, subtitle, crumb }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumb && <><span>/</span><span className="crumb-current">{crumb}</span></>}
        </nav>
        {kicker && <span className="kicker">{kicker}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
