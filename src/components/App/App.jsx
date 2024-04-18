import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { fetchGallery } from '../../gallery'
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import './App.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); 
  
 const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setGallery([]);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  

  useEffect(() => {
    if (gallery.length === 0) {
      return;
  }
  async function getImages() {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchGallery(gallery, page);
      setGallery((prevGallery) => {
        return [...prevGallery, ...data.results];
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  getImages();
}, [page, query, gallery.length]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
       
      {error ? <ErrorMessage /> : (gallery.length > 0 && <ImageGallery items={gallery}/> )}

      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  )
}


