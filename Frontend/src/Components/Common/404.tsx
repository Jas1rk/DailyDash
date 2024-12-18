import { useRouteError } from "react-router-dom";

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
};

const Error404 = () => {
  const error = useRouteError() as RouteError; 

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>

      {error && (
        <div className="mt-6 bg-mainComponent p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Error Details</h3>
          <p className="mt-2">
            <span className="font-semibold">Status:</span> {error.status || "Unknown"}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Status Text:</span>{" "}
            {error.statusText || "No status text available"}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Message:</span>{" "}
            {error.message || "No message provided"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Error404;
