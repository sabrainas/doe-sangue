import Link from "next/link";
import { Bell, User } from "lucide-react";

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-red-600 text-white p-2 rounded-lg">
                        <i className="fas fa-heartbeat text-2xl"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-red-600">Hemolink</h1>
                </Link>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Bell className="text-gray-600 text-xl cursor-pointer" />
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                    </div>
                    <Link href="/dashboard/doador">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                            <User className="text-gray-600" />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;