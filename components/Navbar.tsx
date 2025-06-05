"use client";

import Link from "next/link";
import {  User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSeeProfile = () => {
    window.location.href = "/dashboard/doador";    
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <i className="fas fa-heartbeat text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-red-600">Hemolink</h1>
        </Link>

        <div className="flex items-center space-x-4 relative">

          {/* Avatar com dropdown */}
          <div ref={menuRef} className="relative">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              <User className="text-gray-600" />
            </div>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => {
                    handleSeeProfile();
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Ver Perfil
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default function LoginPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
    </QueryClientProvider>
  );
}
