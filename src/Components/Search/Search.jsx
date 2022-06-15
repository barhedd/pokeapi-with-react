import { useState } from "react";

const Search = ({ onSearch = () => {} }) => {
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearch(name);
  }
  
  return (
    <form onSubmit={onSubmitHandler}>
      <input className="border-2 border-gray-300 px-3 py-1 rounded-l-lg text-lg" type="text" value={name} placeholder="Search for a pokemon" onChange={(e) => { setName(e.target.value) }} />
      <button className="border-gray-400 border-2 bg-indigo-500 hover:bg-indigo-700 text-white px-3 py-1 rounded-r-lg text-lg" type="submit">Search</button>
    </form>
  );
}

export default Search;