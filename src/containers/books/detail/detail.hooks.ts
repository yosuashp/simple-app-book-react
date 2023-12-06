import { useEffect, useState } from 'react';
import { IBooks } from '../books.types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IApiResponse } from '../../../services/types';

export default function useDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [book, setBook] = useState<IBooks | undefined>();

  const fetchBook = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IApiResponse<IBooks>>(
        `http://localhost:8000/api/books/${id}`
      );
      setBook(response.data.data);
    } catch (error) {
      console.log('error > ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  return {
    book,
    loading,
  };
}