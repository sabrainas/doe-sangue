import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <i className="fas fa-heartbeat text-2xl"></i>
          </div>
          <span className="text-xl font-bold">Hemolink</span>
        </Link>
        <div className="w-full max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Cadastre-se</h1>
          </div>
          <div className="flex gap-8 sm:grid-cols-2 justify-center">
            <Card className="overflow-hidden w-96 h-auto">
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
                  <Button className="w-full bg-red-600 hover:bg-red-700 mt-3">Cadastre-se</Button>
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
