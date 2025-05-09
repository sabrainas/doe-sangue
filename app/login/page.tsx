import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplet } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Droplet className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">DoeVida</span>
        </Link>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Entrar</h1>
            <p className="text-gray-500">Escolha seu tipo de perfil para continuar</p>
          </div>
          <Tabs defaultValue="doador" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="doador">Doador</TabsTrigger>
              <TabsTrigger value="hemocentro">Hemocentro</TabsTrigger>
            </TabsList>
            <TabsContent value="doador" className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="email-doador" className="text-sm font-medium leading-none">
                  Email
                </label>
                <Input id="email-doador" type="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="senha-doador" className="text-sm font-medium leading-none">
                    Senha
                  </label>
                  <Link href="/recuperar-senha" className="text-sm text-red-600 hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input id="senha-doador" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">Entrar como Doador</Button>
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <Link href="/cadastro/doador" className="text-red-600 hover:underline">
                  Cadastre-se
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="hemocentro" className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="email-hemocentro" className="text-sm font-medium leading-none">
                  Email
                </label>
                <Input id="email-hemocentro" type="email" placeholder="hemocentro@exemplo.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="senha-hemocentro" className="text-sm font-medium leading-none">
                    Senha
                  </label>
                  <Link href="/recuperar-senha" className="text-sm text-red-600 hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input id="senha-hemocentro" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">Entrar como Hemocentro</Button>
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <Link href="/cadastro/hemocentro" className="text-red-600 hover:underline">
                  Cadastre-se
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
