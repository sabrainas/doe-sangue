import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Droplet } from "lucide-react"

export default function CadastroHemocentroPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Droplet className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">DoeVida</span>
        </Link>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Cadastro de Hemocentro</h1>
            <p className="text-gray-500">Preencha os dados da sua instituição</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="nome-instituicao" className="text-sm font-medium leading-none">
                Nome da Instituição
              </label>
              <Input id="nome-instituicao" placeholder="Nome do hemocentro" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cnpj" className="text-sm font-medium leading-none">
                CNPJ
              </label>
              <Input id="cnpj" placeholder="00.000.000/0000-00" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email-institucional" className="text-sm font-medium leading-none">
                Email Institucional
              </label>
              <Input id="email-institucional" type="email" placeholder="contato@hemocentro.com.br" />
            </div>
            <div className="space-y-2">
              <label htmlFor="telefone" className="text-sm font-medium leading-none">
                Telefone
              </label>
              <Input id="telefone" placeholder="(00) 0000-0000" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cep" className="text-sm font-medium leading-none">
                CEP
              </label>
              <Input id="cep" placeholder="00000-000" />
            </div>
            <div className="space-y-2">
              <label htmlFor="endereco" className="text-sm font-medium leading-none">
                Endereço
              </label>
              <Input id="endereco" placeholder="Rua, número" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="cidade" className="text-sm font-medium leading-none">
                  Cidade
                </label>
                <Input id="cidade" placeholder="Sua cidade" />
              </div>
              <div className="space-y-2">
                <label htmlFor="estado" className="text-sm font-medium leading-none">
                  Estado
                </label>
                <Input id="estado" placeholder="UF" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="responsavel" className="text-sm font-medium leading-none">
                Nome do Responsável
              </label>
              <Input id="responsavel" placeholder="Nome completo" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cargo" className="text-sm font-medium leading-none">
                Cargo do Responsável
              </label>
              <Input id="cargo" placeholder="Ex: Diretor, Gerente, etc." />
            </div>
            <div className="space-y-2">
              <label htmlFor="descricao" className="text-sm font-medium leading-none">
                Descrição da Instituição
              </label>
              <Textarea id="descricao" placeholder="Descreva brevemente sua instituição" />
            </div>
            <div className="space-y-2">
              <label htmlFor="senha" className="text-sm font-medium leading-none">
                Senha
              </label>
              <Input id="senha" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmar-senha" className="text-sm font-medium leading-none">
                Confirmar Senha
              </label>
              <Input id="confirmar-senha" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="termos" />
              <label
                htmlFor="termos"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Concordo com os{" "}
                <Link href="#" className="text-red-600 hover:underline">
                  Termos de Uso
                </Link>{" "}
                e{" "}
                <Link href="#" className="text-red-600 hover:underline">
                  Política de Privacidade
                </Link>
              </label>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">Criar Conta</Button>
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-red-600 hover:underline">
                Faça login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
