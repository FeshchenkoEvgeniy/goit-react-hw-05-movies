import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [searchData, setSearchData] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSearchData(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchData.trim() === '') {
      alert('Enter value');
      return;
    }
    onSubmit(searchData);
    setSearchData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchData}
        onChange={handleChange}
      />
    </form>
  );
}
