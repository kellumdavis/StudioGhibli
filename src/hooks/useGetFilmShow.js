import { useState, useEffect } from "react";

const useGetFilmShow = (filmId) => {
  const [filmInfo, setFilmInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://ghibliapi.herokuapp.com/films/${filmId}`;

  useEffect(() => {
    const getFilmInfo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFilmInfo(data);
      } catch (err) {
        console.log("Ran into a problem ERROR");
      } finally {
        setLoading(false);
      }
    };

    getFilmInfo();
  }, []);

  return { filmInfo, loading };
};
export default useGetFilmShow;
