import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import NavbarButtons from "./NavbarButtons";
import NavbarButton from "../NavbarButton";
// import UserButton from

const SignedOffButtons = () => {
  return (
    <div>
      <NavbarButtons />
      <SignedIn>
        <NavbarButton href="/form" text="Donar" />
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <NavbarButton href="/signInPage" text="Donar" />
        <NavbarButton href="/signInPage" text="Soy Padrino/Madrina" />
      </SignedOut>
    </div>
  );
};

export default SignedOffButtons;
