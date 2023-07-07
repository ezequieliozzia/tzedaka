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
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
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
      <div className="flex items-center justify-between flex-wrap space-x-5 list-none bg-transparent">
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
            <li>Contacto</li>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center flex-nowrap space-x-5 list-none bg-transparent">
        {isLogged ? (
          <>
            <UserButton afterSignOutUrl="/" />
            <Button type="primary" shape="round" size="large">
              Donar
            </Button>
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
