import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const changeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const search = (data) => {
    if (searchValue === "") {
      return data;
    }
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.body.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Таблица комментариев</h1>
      <Filter searchValue={searchValue} changeValue={changeValue} />
      <Table posts={search(currentPosts)} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
