import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Bell, User, MapPin, Phone } from "lucide-react";

export default function DashboardDoadorPage() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                            <i className="fas fa-heartbeat text-2xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-red-600">Hemolink</h1>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                            <i className="fas fa-plus mr-2"></i>Novo Doador
                        </Button>
                        <div className="relative">
                            <Bell className="text-gray-600 text-xl cursor-pointer" />
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                        </div>
                        <Link href="/login">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="text-gray-600" />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Doadores Disponíveis</h2>
                        <p className="text-gray-600">Encontre doadores compatíveis com seu tipo sanguíneo</p>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-auto">
                        <div className="relative">
                            <input type="text" placeholder="Buscar por nome, tipo sanguíneo..."
                                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                </div>

                {/* Donor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[
                        { name: "Eduardo Antonio", bloodType: "O-", urgency: "Urgência Máxima", urgencyColor: "bg-red-600 text-white", location: "São Paulo, SP - Santa Catarina" },
                        { name: "Vinícius Cruz", bloodType: "AB-", urgency: "Urgência Alta", urgencyColor: "bg-yellow-100 text-yellow-800", location: "Guarulhos, SP" },
                        { name: "Johann Benjamin", bloodType: "B-", urgency: "Urgência Média", urgencyColor: "bg-green-100 text-green-800", location: "Santa Cruz, Bolívia - Perrospital" },
                        { name: "Sabrina Mendonça", bloodType: "A-", urgency: "Urgência Baixa", urgencyColor: "bg-blue-100 text-blue-800", location: "São Paulo, SP - Hospital XP Investimentos" },
                        { name: "Gustavo Pires", bloodType: "AB+", urgency: "Indisponível", urgencyColor: "bg-gray-100 text-gray-800", location: "São Paulo, SP - Santo André Hospitais" },
                    ].map((donor, index) => (
                        <Card key={index} className="border-l-4 border-l-red-600 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                            <div className="p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center">
                                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                                            <User className="text-red-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800">{donor.name}</h3>
                                            <p className="text-sm text-gray-500">Última doação: 05/06/2023</p>
                                        </div>
                                    </div>
                                    <div className="bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                                        <span className="font-bold">{donor.bloodType}</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center text-sm text-gray-600">
                                    <MapPin className="mr-2 text-red-500" />
                                    <span>{donor.location}</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className={`text-xs px-2 py-1 rounded ${donor.urgencyColor}`}>{donor.urgency}</span>
                                    <Button
                                        variant="default"
                                        className={`${donor.urgency === "Indisponível" ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                                            } text-white px-3 py-1 rounded-lg text-sm font-medium transition duration-300`}
                                        disabled={donor.urgency === "Indisponível"}
                                    >
                                        {donor.urgency === "Indisponível" ? "Indisponível" : "Contatar"} <Phone className="ml-1" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                                <i className="fas fa-heartbeat text-2xl"></i>
                            </div>
                            <h2 className="text-xl font-bold text-red-600">Hemolink</h2>
                        </Link>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-600 hover:text-red-600"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm">
                        <p>© 2025 Hemolink. Todos os direitos reservados.</p>
                        <p className="mt-2">Sistema de gerenciamento de doadores de sangue</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
