import { useState } from 'react';
import { Input, Form, Label, Button, Div } from './SearchBar.styled';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('enter value');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
      </Form>
    </Div>
  );
}
