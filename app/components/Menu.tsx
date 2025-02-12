"use client";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-[#bb0005] sticky top-0 w-full z-50 shadow-md py-4 px-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:opacity-80 transition-opacity ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="23.6"
              className="scale-125"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 88 16"
            >
              <path
                fill="#fff"
                d="M6.069 1.795C8.129.625 10.514.053 12.885 0c3.981.013 7.955 0 11.936.007-1.421 2.073-3.92 3.33-6.446 3.396h-4.446c-.976-.013-1.96.06-2.896.326a8.5 8.5 0 0 0-4.089 2.479c-.734.81-1.353 1.781-1.737 2.805h2.869l-2.155 3.955c.97.013 1.946.053 2.916.073.451.026.903.04 1.347-.02 1.57-.18 3.025-.957 4.17-2.014.646-.598 1.199-1.236 1.657-1.987H9.349c.727-1.323 2.081-2.526 3.55-2.952a6.6 6.6 0 0 1 1.839-.252h7.153L20.355 8.84c-.431.838-.849 1.688-1.307 2.513a7.5 7.5 0 0 1-1.522 2.093c-1.192 1.15-2.741 1.888-4.344 2.267-.566.126-1.145.246-1.731.226-2.796 0-5.598-.034-8.393-.034-.216.014-.418-.086-.613-.166-.505-.212-.956-.591-1.172-1.103-.256-.605-.189-1.296-.007-1.914a4.6 4.6 0 0 1 .472-1.07l1.509-2.64H0c.108-.265.209-.49.317-.744C1.495 5.59 3.516 3.25 6.096 1.795zm24.132 9.982 4.407.013-.013 4.15h-2.046v-.688c-.819.543-1.872.748-2.898.741-2.75-.02-4.998-.82-4.984-3.6v-.537c0-2.78 2.254-3.575 5.004-3.575 2.536.007 4.622.709 4.937 2.973h-3.025c-.181-.252-.436-.418-.778-.51a4.6 4.6 0 0 0-1.134-.133c-1.167.014-2.16.232-2.147 1.424v.178c-.02 1.212.966 1.417 2.14 1.437 1.127 0 1.845-.06 2.274-.616h-1.737V11.77zm4.407-8.269-.013 4.151v.027h-2.046V6.97c-.819.542-1.872.748-2.898.741-2.75-.02-4.998-.82-4.984-3.601v-.536C24.667.795 26.92 0 29.67 0c2.536.007 4.622.708 4.937 2.972h-3.025c-.181-.251-.436-.417-.778-.51a4.6 4.6 0 0 0-1.134-.132c-1.167.013-2.16.232-2.147 1.43v.179c-.02 1.211.966 1.416 2.14 1.436 1.127 0 1.845-.06 2.274-.615H30.2V3.495zm10.948.106v.537c0 2.787-2.254 3.588-5.01 3.58-2.758-.012-5.012-.827-4.998-3.607v-.536C35.548.794 37.8 0 40.565.007c2.758.006 4.998.827 4.991 3.607M42.7 3.78c.02-1.198-.973-1.423-2.14-1.443-1.174.013-2.167.231-2.154 1.43v.178c-.02 1.205.973 1.43 2.147 1.45 1.167-.013 2.16-.232 2.147-1.436zm8.7-.742c2.052.113 4.937.259 4.93 2.112 0 2.112-2.415 2.608-5.004 2.602-2.583-.014-4.723-.331-4.992-2.622h3.006c.329.583.993.61 1.892.616.892 0 2.086-.027 2.086-.596 0-.324-.892-.377-2.046-.437-2.053-.112-4.937-.258-4.93-2.105C46.341.496 48.755 0 51.345.007c2.582.026 4.722.317 4.99 2.628H53.33c-.328-.59-1.086-.729-1.985-.735-.893 0-1.986.126-1.993.715 0 .324.892.37 2.046.43zm31.636 8.282c2.066.106 4.97.258 4.957 2.098 0 2.099-2.428 2.589-5.031 2.582-2.596-.013-4.75-.331-5.018-2.608h3.026c.328.576 1 .609 1.898.609.899 0 2.1-.02 2.1-.59 0-.324-.9-.37-2.06-.43-2.066-.106-4.97-.258-4.957-2.091 0-2.099 2.428-2.595 5.031-2.589 2.596.02 4.75.318 5.018 2.615h-3.025c-.33-.59-1.094-.728-2-.728-.898 0-1.999.126-1.999.708 0 .324.9.37 2.06.424M63.77.139l.06 3.813c.013 1.185-.812 1.31-1.905 1.324-1.094-.02-1.892-.046-1.879-1.231V.139h-2.918v4.078c-.02 2.727 2.214 3.521 4.783 3.535 2.57 0 4.837-.775 4.837-3.509V.14h-2.985zM38.895 8.48h3.381l3.978 7.38h-3.287l-.57-1.25h-3.65l-.59 1.244H34.85l4.052-7.374zm.677 4.35h2l-.993-2.146zm12.143 2.912-2.576-3.82v3.945h-2.664l.014-7.38h3.327l1.899 2.608 1.77-2.582h3.395l-.013 7.355H54.23v-3.926m3.75-3.462h8.5v1.933l-5.307-.013v.906l5.3.014v1.641l-5.3-.013v.907l5.293.013v1.986H57.96l.02-7.38zm16.724.02c1.523-.013 2.81 1.264 2.79 2.787a2.7 2.7 0 0 1-.449 1.502 2.8 2.8 0 0 1-1.167 1.007l1.61 2.072h-3.059l-1.402-1.808h-2.576v1.814h-2.885l.02-7.38 7.125.019zm-4.246 2.138v1.251l3.515.007q.26 0 .45-.179a.627.627 0 0 0-.443-1.072h-3.516z"
              ></path>
            </svg>
          </Link>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold text-md">
          <li>
            <Link href="/news" className="hover:underline">
              News
            </Link>
          </li>
          <li>
            <Link href="/entertainment" className="hover:underline">
              General Games
            </Link>
          </li>
          <li>
            <Link href="/dota2" className="hover:underline">
              Dota 2
            </Link>
          </li>
          <li>
            <Link href="/cs2" className="hover:underline">
              CS2
            </Link>
          </li>
          <li>
            <Link href="/lol" className="hover:underline">
              League of Legends
            </Link>
          </li>
          <li>
            <Link href="/valorant" className="hover:underline">
              Valorant
            </Link>
          </li>
          <li>
            <Link href="/pubg-mobile" className="hover:underline">
              PUBG Mobile
            </Link>
          </li>
          <li>
            <Link href="/anime" className="hover:underline">
            Anime
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-[#bb0005] text-white font-semibold text-md space-y-4 py-4">
          <li>
            <Link href="/news" className="hover:underline">
              News
            </Link>
          </li>
          <li>
            <Link href="/entertainment" className="hover:underline">
              General Games
            </Link>
          </li>
          <li>
            <Link href="/dota2" className="hover:underline">
              Dota 2
            </Link>
          </li>
          <li>
            <Link href="/cs2" className="hover:underline">
              CS2
            </Link>
          </li>
          <li>
            <Link href="/lol" className="hover:underline">
              League of Legends
            </Link>
          </li>
          <li>
            <Link href="/valorant" className="hover:underline">
              Valorant
            </Link>
          </li>
          <li>
            <Link href="/pubg-mobile" className="hover:underline">
              PUBG Mobile
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
