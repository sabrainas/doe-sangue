import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet, Building2, Calendar, Users, PlusCircle, BarChart3, Settings, Bell, LogOut } from "lucide-react"

export default function DashboardHemocentroPage() {
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
              <Building2 className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium">Hemocentro São Paulo</span>
            </div>
            <nav className="flex-1 space-y-1">
              <Link
                href="/dashboard/hemocentro"
                className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Início</span>
              </Link>
              <Link
                href="/dashboard/hemocentro/campanhas"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <PlusCircle className="h-5 w-5" />
                <span>Campanhas</span>
              </Link>
              <Link
                href="/dashboard/hemocentro/agendamentos"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <Calendar className="h-5 w-5" />
                <span>Agendamentos</span>
              </Link>
              <Link
                href="/dashboard/hemocentro/doadores"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <Users className="h-5 w-5" />
                <span>Doadores</span>
              </Link>
              <Link
                href="/dashboard/hemocentro/estoque"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
              >
                <Droplet className="h-5 w-5" />
                <span>Estoque</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-500">Visão geral do hemocentro</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Doações Hoje</CardTitle>
                  <CardDescription>Total de doações realizadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">12</div>
                  <p className="text-sm text-gray-500">+20% em relação à média</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Agendamentos</CardTitle>
                  <CardDescription>Próximos 7 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">28</div>
                  <p className="text-sm text-gray-500">5 para hoje</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Campanhas Ativas</CardTitle>
                  <CardDescription>Campanhas em andamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">3</div>
                  <p className="text-sm text-gray-500">1 campanha emergencial</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Estoque Crítico</CardTitle>
                  <CardDescription>Tipos sanguíneos em alerta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">2</div>
                  <p className="text-sm text-gray-500">O- e AB-</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Estoque de Sangue</CardTitle>
                <CardDescription>Situação atual por tipo sanguíneo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">A+</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">Estável</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">A-</span>
                      </div>
                      <span className="text-sm font-medium text-yellow-600">Atenção</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-yellow-500" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">B+</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">Estável</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">B-</span>
                      </div>
                      <span className="text-sm font-medium text-yellow-600">Atenção</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-yellow-500" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">AB+</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">Estável</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">AB-</span>
                      </div>
                      <span className="text-sm font-medium text-red-600">Crítico</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-red-500" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">O+</span>
                      </div>
                      <span className="text-sm font-medium text-yellow-600">Atenção</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-yellow-500" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplet className="h-5 w-5 text-red-600" />
                        <span className="font-medium">O-</span>
                      </div>
                      <span className="text-sm font-medium text-red-600">Crítico</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-red-500" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Agendamentos de Hoje</CardTitle>
                  <CardDescription>Doações agendadas para hoje</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Maria Santos</h3>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>10:30</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Droplet className="h-4 w-4 text-gray-500" />
                            <span>Tipo: A+</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                          <Button className="bg-red-600 hover:bg-red-700" size="sm">
                            Confirmar
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Carlos Oliveira</h3>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>11:15</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Droplet className="h-4 w-4 text-gray-500" />
                            <span>Tipo: O-</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                          <Button className="bg-red-600 hover:bg-red-700" size="sm">
                            Confirmar
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Ana Pereira</h3>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>14:00</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Droplet className="h-4 w-4 text-gray-500" />
                            <span>Tipo: B+</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                          <Button className="bg-red-600 hover:bg-red-700" size="sm">
                            Confirmar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Campanhas Ativas</CardTitle>
                  <CardDescription>Campanhas em andamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Campanha Emergencial - Tipo O-</h3>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>10/05/2025 a 15/05/2025</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>15 agendamentos</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Gerenciar
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Campanha Universitária</h3>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>15/05/2025 a 20/05/2025</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>28 agendamentos</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Gerenciar
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Campanha Empresarial</h3>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>22/05/2025 a 25/05/2025</span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>12 agendamentos</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Gerenciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
