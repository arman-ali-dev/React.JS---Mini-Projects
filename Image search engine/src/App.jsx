import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  const fetchImages = (reset = false) => {
    const URL = `https://api.unsplash.com/search/photos?page=${
      reset ? 1 : page
    }&query=${keyword}&client_id=OUEMuARjnHR6boKP02POBPFq0RJRZe3smb_5llqbbxo&per_page=6`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (reset) {
          setPage(2);
          setData(data.results);
        } else {
          setData((oldData) => [...oldData, ...data.results]);
          setPage(page + 1);
        }
      });

    document.getElementById("showMoreBtn").style.display = "block";
  };

  const handleFetchImages = () => {
    fetchImages(true);
    setPage(1);
    setData([]);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="main">
            <input
              onChange={(event) => setKeyword(event.target.value)}
              type="text"
              id="enteredKeyword"
              placeholder="Enter image name here..."
            />
            <button onClick={handleFetchImages} id="searchBtn">
              Search
            </button>
          </div>

          <div id="images">
            {data.map((imageURL, index) => (
              <a href={imageURL.links.html} target="_blank" key={index}>
                <img src={imageURL.urls.raw} alt="" />
              </a>
            ))}
          </div>
          <button onClick={() => fetchImages()} id="showMoreBtn">
            Show More
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
