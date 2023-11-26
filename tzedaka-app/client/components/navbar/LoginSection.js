import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import StyledNavbarButton from "../StyledNavbarButton";

const LoginSection = ({ isOpen }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <StyledNavbarButton href="/form" label="Donar" />
      </SignedIn>
      <SignedOut>
        <StyledNavbarButton href="/signInPage" label="Ya soy Padrino/Madrina" />
        <StyledNavbarButton href="/signInPage" label="Donar" />
      </SignedOut>
    </div>
  );
};

export default LoginSection;
