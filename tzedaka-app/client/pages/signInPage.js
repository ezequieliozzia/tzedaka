import { esES } from "@clerk/localizations";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div
      className="flex justify-center justify-items-center h-auto"
      style={{ height: "85vh" }}
    >
      <SignIn localization={esES} />
    </div>
  );
};

export default SignInPage;
