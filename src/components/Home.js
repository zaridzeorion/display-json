import { React } from "react";
import useFetch from "../useFetch";
import Posts from "./Posts";

function Home({ darkMode }) {
  const { data, isLoading, error } = useFetch(
    "http://localhost/php3/api/index.php"
  );

  return (
    <div>
      {error && <div className="basic__center">{error}</div>}
      {isLoading && <div className="loader" />}

      {data && <Posts darkMode={darkMode} posts={data} />}
    </div>
  );
}

export default Home;
