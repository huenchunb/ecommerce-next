"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon, UserIcon } from "@sanity/icons";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-700 cursor-pointer mx-auto sm:mx-0"
        >
          Store
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Buscar productos"
            className="bg-neutral-50 text-neutral-900 px-4 py-2 rounded border w-full max-w-4xl
                        focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-700"
          />
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/cart"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span className="text-xs sm:text-base">Carrito</span>
          </Link>

          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span className="text-xs sm:text-base">Mis pedidos</span>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p>¡Bienvenido!</p>
                  <p className="font-semibold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="redirect" signUpFallbackRedirectUrl="/">
                <button className="flex gap-2 border text-indigo-700 hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded">
                  <UserIcon className="w-6 h-6" />
                  <span>Iniciar sesión</span>
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
