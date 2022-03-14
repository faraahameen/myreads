import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Not Found</h2>
      <h3>The resources requested could not be found on this server</h3>
      <Link to="/">Go back to Main Page</Link>
    </div>
  );
};
export default NotFound;
