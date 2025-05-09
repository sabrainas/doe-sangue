import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet, User, Building2 } from "lucide-react"

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Droplet className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">DoeVida</span>
        </Link>
        <div className="w-full max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Cadastre-se</h1>
            <p className="text-gray-500">Escolha o tipo de perfil que deseja criar</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="bg-red-50 p-6">
                <div className="flex items-center gap-2">
                  <User className="h-6 w-6 text-red-600" />
                  <CardTitle>Doador</CardTitle>
                </div>
                <CardDescription>Para pessoas que desejam doar sangue</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Agende doações com facilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Acompanhe seu histórico de doações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Receba lembretes para novas doações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Encontre hemocentros próximos</span>
                  </li>
                </ul>
                <Link href="/cadastro/doador">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Cadastrar como Doador</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader className="bg-red-50 p-6">
                <div className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-red-600" />
                  <CardTitle>Hemocentro</CardTitle>
                </div>
                <CardDescription>Para instituições de coleta de sangue</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Gerencie campanhas de doação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Acompanhe o estoque de sangue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Comunique-se com doadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Gerencie agendamentos</span>
                  </li>
                </ul>
                <Link href="/cadastro/hemocentro">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Cadastrar como Hemocentro</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-red-600 hover:underline">
              Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
