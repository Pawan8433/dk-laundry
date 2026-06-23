import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container empty-page">
        <h1>404</h1>
        <p>Sorry, we couldn’t find that page.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
