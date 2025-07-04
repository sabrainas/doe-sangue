import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Heart, Calendar, Users, ArrowRight } from "lucide-react"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      {/* Header */}
      <header className="border-b flex justify-center items-center">
        <div className="container flex h-16 items-center justify-around px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
              <i className="fas fa-heartbeat text-2xl"></i>
            </div>
            <span className="text-xl font-bold">Hemolink</span>
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
        <section className=" w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mx-auto max-w-6xl">
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
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <Image
                  src="/doar-sangue.jpg?width=500&height=500"
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
          <div className="px-4 md:px-6">
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
                <p className="text-gray-500">Crie seu perfil como doador em poucos minutos.</p>
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
          <div className="px-4 md:px-6">
            <div className="flex gap-6 lg:grid-cols-2 lg:gap-12 justify-center items-center">
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
          <div className="px-4 md:px-6">
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
                  src="/quem-pode-doar.jpg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Doação de sangue"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
