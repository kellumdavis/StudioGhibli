import { useState, useEffect } from "react";

const useGetFilms = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const url = "https://ghibliapi.herokuapp.com/films";

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setFilms(data);
    } catch (err) {
      console.log("Ran into a problem ERROR");
    } finally {
      setLoading(false);
    }
  };

  return { loading, films };
};
export default useGetFilms;
