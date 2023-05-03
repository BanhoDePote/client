import axios from 'axios';
import { useState } from 'react';

export function useCreateOrder(tableId, token, order) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`/waiter/create-order/${tableId}`, {
        dishes: order.map(item => ({
          dishId: item.id, 
          quantity: item.quantity
        }))
      }, {  });
      setResult(data);
    } catch (error) {
      console.log(error)
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [createOrder, result, isLoading, error];
}