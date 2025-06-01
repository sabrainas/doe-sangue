import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteDonor = async (donorId: string): Promise<void> => {
  const response = await axios.delete(`/api/donors/${donorId}`);
  return response.data;
};

export const useDeleteDonors = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteDonor, {
    onSuccess: () => {
      queryClient.invalidateQueries('donors');
    },
    onError: (error) => {
      console.error('Erro ao deletar doador:', error);
    },
  });

  return {
    deleteDonor: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};