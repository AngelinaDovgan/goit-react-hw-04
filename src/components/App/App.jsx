import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { fetchGallery } from '../../gallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import './App.css'

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
    
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const [query, setQuery] = useState("");
  
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setGallery([]);
  }

  useEffect(() => {
    if (gallery === "") {
      return;
  }
  async function getImages() {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchGallery(gallery, page);
      setGallery((prevGallery) => {
        return [...prevGallery, ...data];
      });
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false);
    }
  }
  getImages();
}, [page, gallery]);

  return (
    <>
      <SearchBar onSubmit={handleSearch}/>
      {gallery.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  )
}


