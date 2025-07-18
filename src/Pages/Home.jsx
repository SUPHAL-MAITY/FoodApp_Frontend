import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/Layout/SearchInput.jsx";
import CategoryCard from "../components/Layout/CategoryCard.jsx";
import axios from "axios";
import { useState } from "react";
import Loader from "../components/Loader.jsx";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading,setLoading]=useState(false)
  const [result, setResult] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/category/getall`
      );
      setCategories(data.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }finally{setLoading(false)}
  };



  return (
    <>
      <div className="bg-center opacity-100 h-[480px] bg-no-repeat bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] ">
        <div className="text-center pt-24">
          <h1 className="font-serif text-3xl md:text-3xl font-semibold text-white pb-4">
            Foodie bar
          </h1>

          <h2 className="font-serif text-xl md:text-3xl font-semibold text-white pb-8">
            Discover the best food & drinks in Kolkata
          </h2>
          {/* <SearchInput  onSearch={handleSearch}/> */}
          <SearchInput />
        </div>
      </div>
      {loading && <Loader/>}
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-3 justify-center">
        {categories?.map((c) => (
          <div key={c._id} className="justify-self-center">
            <CategoryCard id={c._id} title={c.title} imageUrl={c.imageUrl} />
          </div>
        ))}
      </div>


    </>
  );
}

export default Home;
