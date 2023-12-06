// Import packages yang diperlukan
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IBooks } from './books.types';
import { IApiResponse, IMeta, IParams } from '../../services/types';

// Tuliskan function useAction untuk membuat hooks sendiri (custom hooks)
const useAction = () => {
  // Tuliskan beberapa states yang diperlukan didalam function useAction
  const [params, setParams] = useState<IParams>({
    page: 1,
    size: 10,
  });
  const [meta, setMeta] = useState<IMeta>();
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<IBooks[]>([]);

  // Tuliskan function fetchBooks kemudian isi dengan kode berikut ini
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IApiResponse<IBooks[]>>(
        'http://localhost:8000/api/books',
        {
          params,
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      setBooks(response.data.data);
      setMeta(response.data.meta);
    } catch (error) {
      console.log('error > ', error);
    } finally {
      setLoading(false);
    }
  };

  // Panggil function fetchBooks saat komponen List muncul di browser (mounted).
  useEffect(() => {
    fetchBooks();
  }, [params]);

  // Tuliskan return dari function useAction
  return {
    books,
    params,
    setParams,
    loading,
    meta,
  };
};

export default useAction;
