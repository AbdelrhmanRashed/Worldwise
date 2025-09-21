import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <PageNav />
      <h1>World Wise</h1>

      <Link to="/app">Go to app</Link>
    </div>
  );
};

export default Homepage;
