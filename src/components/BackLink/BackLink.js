import { Link } from "react-router-dom";
export const BackLink = ({ to, children }) => {
    console.log(to)
    return (
      <Link to={to}>
        <button>return</button>
      </Link>
    );
  };