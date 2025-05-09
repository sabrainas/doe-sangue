import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Droplet, Calendar, Users, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">DoeVida</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:underline underline-offset-4">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:underline underline-offset-4">
              Benefícios
            </Link>
            <Link href="#quem-pode-doar" className="text-sm font-medium hover:underline underline-offset-4">
              Quem Pode Doar
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/cadastro">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-red-600">
                  Doe sangue, salve vidas
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conectamos doadores e hemocentros para facilitar o processo de doação de sangue. Uma plataforma
                  completa para quem quer ajudar e para quem precisa de doadores.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/cadastro/doador">
                    <Button className="bg-red-600 hover:bg-red-700">Quero ser doador</Button>
                  </Link>
                  <Link href="/cadastro/hemocentro">
                    <Button variant="outline">Sou um hemocentro</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Doação de sangue"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Como Funciona</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma conecta doadores e hemocentros de forma simples e eficiente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Cadastre-se</h3>
                <p className="text-gray-500">Crie seu perfil como doador ou hemocentro em poucos minutos.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Calendar className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Agende sua doação</h3>
                <p className="text-gray-500">Encontre hemocentros próximos e agende sua doação com facilidade.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Salve vidas</h3>
                <p className="text-gray-500">Acompanhe seu histórico de doações e o impacto que você está causando.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
                  Benefícios para Doadores
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Acompanhe seu histórico de doações</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Receba lembretes para novas doações</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Encontre hemocentros próximos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Acesse resultados de exames</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
                  Benefícios para Hemocentros
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Gerencie campanhas de doação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Acompanhe o estoque de sangue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Comunique-se com doadores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Gerencie agendamentos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="quem-pode-doar" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Quem Pode Doar</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os requisitos básicos para doação de sangue.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Requisitos Básicos</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Ter entre 16 e 69 anos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Pesar mais de 50kg</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Estar bem de saúde</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Estar alimentado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-red-600" />
                    <span>Apresentar documento oficial com foto</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Doação de sangue"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Entre em Contato</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tem alguma dúvida? Entre em contato conosco.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Nome
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite seu email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite sua mensagem"
                    />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Enviar mensagem</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Informações de Contato</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Email:</span>
                    <span>contato@doevida.com.br</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Telefone:</span>
                    <span>(11) 1234-5678</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Endereço:</span>
                    <span>Av. Paulista, 1000 - São Paulo, SP</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <Droplet className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">DoeVida</span>
            </Link>
            <p className="text-sm text-gray-500">Conectando doadores e hemocentros para salvar vidas.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Plataforma</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#como-funciona" className="text-sm hover:underline">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#beneficios" className="text-sm hover:underline">
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link href="#quem-pode-doar" className="text-sm hover:underline">
                    Quem Pode Doar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Campanhas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} DoeVida. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs hover:underline">
                Termos
              </Link>
              <Link href="#" className="text-xs hover:underline">
                Privacidade
              </Link>
              <Link href="#" className="text-xs hover:underline">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
