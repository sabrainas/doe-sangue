import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplet, User, Calendar, Clock, MapPin, FileText, Bell, Settings, LogOut } from "lucide-react"

export default function DashboardDoadorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">DoeVida</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificações</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Configurações</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Sair</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="flex items-center gap-2 px-4 py-2">
              <User className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium">João Silva</span>
            </div>
            <nav className="flex-1 space-y-1">
              <Link
                href="/dashboard/doador"
                className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
              >
                <Droplet className="h-5 w-5" />
                <span>Início</span>
              </Link>
              <Link
                href="/dashboard/doador/agendamentos"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <Calendar className="h-5 w-5" />
                <span>Agendamentos</span>
              </Link>
              <Link
                href="/dashboard/doador/historico"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <Clock className="h-5 w-5" />
                <span>Histórico</span>
              </Link>
              <Link
                href="/dashboard/doador/hemocentros"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <MapPin className="h-5 w-5" />
                <span>Hemocentros</span>
              </Link>
              <Link
                href="/dashboard/doador/resultados"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <FileText className="h-5 w-5" />
                <span>Resultados</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Olá, João!</h1>
              <p className="text-gray-500">Bem-vindo ao seu painel de doador</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Próxima Doação</CardTitle>
                  <CardDescription>Você pode doar novamente em:</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">15 dias</div>
                  <p className="text-sm text-gray-500">A partir de 20/05/2025</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total de Doações</CardTitle>
                  <CardDescription>Seu histórico de doações</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">8</div>
                  <p className="text-sm text-gray-500">Última doação: 20/02/2025</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Vidas Impactadas</CardTitle>
                  <CardDescription>Estimativa de pessoas ajudadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">32</div>
                  <p className="text-sm text-gray-500">Cada doação pode salvar até 4 vidas</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Campanhas Ativas</CardTitle>
                <CardDescription>Campanhas de doação próximas a você</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="todas">
                  <TabsList className="mb-4">
                    <TabsTrigger value="todas">Todas</TabsTrigger>
                    <TabsTrigger value="urgentes">Urgentes</TabsTrigger>
                    <TabsTrigger value="proximas">Próximas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="todas" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Campanha Emergencial - Tipo O-</h3>
                          <p className="text-sm text-gray-500">Hemocentro São Paulo</p>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>10/05/2025 a 15/05/2025</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>2.5 km de distância</span>
                          </div>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700">Agendar</Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Doação Regular</h3>
                          <p className="text-sm text-gray-500">Hemocentro Central</p>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>Todos os dias - 8h às 17h</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>5 km de distância</span>
                          </div>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700">Agendar</Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Campanha Universitária</h3>
                          <p className="text-sm text-gray-500">Universidade Federal</p>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>15/05/2025 a 20/05/2025</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>7.8 km de distância</span>
                          </div>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700">Agendar</Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="urgentes" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Campanha Emergencial - Tipo O-</h3>
                          <p className="text-sm text-gray-500">Hemocentro São Paulo</p>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>10/05/2025 a 15/05/2025</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>2.5 km de distância</span>
                          </div>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700">Agendar</Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="proximas" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Doação Regular</h3>
                          <p className="text-sm text-gray-500">Hemocentro Central</p>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>Todos os dias - 8h às 17h</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>5 km de distância</span>
                          </div>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700">Agendar</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Próximos Agendamentos</CardTitle>
                <CardDescription>Suas doações agendadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Doação Agendada</h3>
                        <p className="text-sm text-gray-500">Hemocentro São Paulo</p>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span>12/05/2025 - 10:30</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Av. Paulista, 1000 - São Paulo, SP</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">Reagendar</Button>
                        <Button variant="destructive">Cancelar</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
