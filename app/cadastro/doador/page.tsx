import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Droplet } from "lucide-react"

export default function CadastroDoadorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Droplet className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">DoeVida</span>
        </Link>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Cadastro de Doador</h1>
            <p className="text-gray-500">Preencha seus dados para criar sua conta</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-medium leading-none">
                  Nome
                </label>
                <Input id="nome" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label htmlFor="sobrenome" className="text-sm font-medium leading-none">
                  Sobrenome
                </label>
                <Input id="sobrenome" placeholder="Seu sobrenome" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email
              </label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cpf" className="text-sm font-medium leading-none">
                CPF
              </label>
              <Input id="cpf" placeholder="000.000.000-00" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="data-nascimento" className="text-sm font-medium leading-none">
                  Data de Nascimento
                </label>
                <Input id="data-nascimento" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="tipo-sanguineo" className="text-sm font-medium leading-none">
                  Tipo Sanguíneo
                </label>
                <Select>
                  <SelectTrigger id="tipo-sanguineo">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
                    <SelectItem value="nao-sei">Não sei</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="telefone" className="text-sm font-medium leading-none">
                Telefone
              </label>
              <Input id="telefone" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cep" className="text-sm font-medium leading-none">
                CEP
              </label>
              <Input id="cep" placeholder="00000-000" />
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
