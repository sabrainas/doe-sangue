import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                            <i className="fas fa-heartbeat text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-red-600">Hemolink</h2>
                    </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm">
                    <p>© 2025 Hemolink. Todos os direitos reservados.</p>
                    <p className="mt-2">Sistema de gerenciamento de doadores de sangue</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;