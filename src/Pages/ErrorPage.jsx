import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">Oops!</h1>
      <h2 className="text-4xl font-bold mb-2">404 - PAGE NOT FOUND</h2>
      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary text-white text-lg px-6 py-2">
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default ErrorPage;
