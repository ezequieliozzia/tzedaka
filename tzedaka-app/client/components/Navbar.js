import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Navbar = ({ isLogged }) => {
  const { push } = useRouter();
  const handleLogIn = () => {
    push("/signInPage");
  };

  // const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly flex-wrap bg-transparent p-6">
      <div>
        <img
          src={
            "https://tzedaka.org.ar/wp-content/uploads/2017/12/logo-tzedaka.png"
          }
          style={{ height: "40px" }}
          alt={""}
          loading={"lazy"}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap space-x-8 list-none bg-transparent">
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/"}>
            <li>Inicio</li>
          </Link>
        </div>
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/programs"}>
            <li>Programas</li>
          </Link>
        </div>
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/form"}>
            <li>Perfil</li>
          </Link>
        </div>
        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/form"}>
            <li>Contacto</li>
          </Link>
        </div>

        <div className="pr-2 text-l font-semibold text-black">
          <Link href={"/form"}>
            <li>Sobre Nosotros</li>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center flex-nowrap space-x-5 list-none bg-transparent">
        {isLogged ? (
          <>
            <UserButton afterSignOutUrl="/" />
            <button class="relative h-12 w-24 rounded-full overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span class="relative z-10">Donar</span>
            </button>
          </>
        ) : (
          <>
            <Button
              type="default"
              shape="round"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={handleLogIn}
            >
              Ingresar
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={handleLogIn}
            >
              Donar
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
