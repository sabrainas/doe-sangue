"use client";

import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateDonor } from "@/hooks/create/useCreateDonors";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetListarRegioes } from "@/hooks/get-regions/useGetRegions";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

function CadastroDoadorPage() {
  const { data: regions, isLoading: isLoadingRegions } = useGetListarRegioes();
  const { mutate: createDonor, isPending: isCreatingDonor } = useCreateDonor();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const donorData = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      cpf: formData.get("cpf") as string,
      dataNascimento: formData.get("dataNascimento") as string,
      tipo: formData.get("tipo") as string,
      celular: formData.get("celular") as string,
      regiao: formData.get("regiao") as string,
      senha: formData.get("senha") as string,
    };

    createDonor(donorData, {
      onSuccess: (response) => {
        localStorage.setItem("userData", JSON.stringify(response));
        alert("Doador criado com sucesso!");
        router.push("/login");
      },
      onError: (error) => {
        console.error("Erro ao criar doador:", error);
        alert("Erro ao criar doador!");
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <i className="fas fa-heartbeat text-2xl"></i>
          </div>
          <span className="text-xl font-bold">HemoLink</span>
        </Link>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Cadastro de Doador</h1>
            <p className="text-gray-500">Preencha seus dados para criar sua conta</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium leading-none">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Seu email"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cpf" className="text-sm font-medium leading-none">
                CPF
              </label>
              <input
                id="cpf"
                name="cpf"
                type="text"
                placeholder="Seu CPF"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dataNascimento" className="text-sm font-medium leading-none">
                Data de Nascimento
              </label>
              <input
                id="dataNascimento"
                name="dataNascimento"
                type="date"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="tipo" className="text-sm font-medium leading-none">
                Tipo Sanguíneo
              </label>
              <select
                id="tipo"
                name="tipo"
                required
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Selecione seu tipo sanguíneo</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="celular" className="text-sm font-medium leading-none">
                Celular
              </label>
              <input
                id="celular"
                name="celular"
                type="text"
                placeholder="Seu celular"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="celular" className="text-sm font-medium leading-none">
                Região
              </label>
              <select
                id="regiao"
                name="regiao" 
                disabled={isLoadingRegions}
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                <option value="">Selecione uma região</option>
                {regions?.map((region: string, index: number) => {
                  const clinicName = region.split(" - ")[0];
                  return (
                    <option key={index} value={region}>
                      {clinicName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="senha" className="text-sm font-medium leading-none">
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="Sua senha"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="termos" name="termos" required />
              <label htmlFor="termos" className="text-sm">
                Aceito os termos e condições
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
            disabled={isCreatingDonor}
          >
            {isCreatingDonor ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function CadastroDoadorPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <CadastroDoadorPage />
    </QueryClientProvider>
  );
}