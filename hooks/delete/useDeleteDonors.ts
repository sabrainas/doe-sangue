import { useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query';
import api from '@/services/api'; 

const deleteDonor = async (): Promise<void> => {
  const response = await api.delete('/usuario/eu');
  return response.data;
};

export const useDeleteDonors = (): UseMutationResult<void, Error, void, unknown> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, void, unknown>({
    mutationFn: deleteDonor,
    onSuccess: () => {
      queryClient.invalidateQueries();
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      window.location.href = "/"; 
    },
    onError: (error: Error) => {
      console.error('Erro ao deletar doador:', error.message);
    },
  });
};
