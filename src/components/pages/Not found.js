import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="my-5 py-5 text-center">
            <div className="not-found my-5 py-5">
            <h2 className="my-5 pb-5">The page cannot be found</h2>
        </div>
        <Link to="/">Homepage</Link>
        </section>
      );
}
 
export default NotFound;