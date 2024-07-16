import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAuthModal } from "@/contexts/AuthContext";
import SignInForm from "@/components/auth/forms/signin-form";
import SignUpForm from "@/components/auth/forms/signup-form";
import { CloseSVG } from "@/components/ui/icons";
export const AuthDialogIndex: React.FC = () => {
  const { isModalOpen, closeModal, currentScreen } = useAuthModal();

  return (
    <AlertDialog open={isModalOpen}>
      <AlertDialogContent>
        <div
          onClick={closeModal}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CloseSVG />
        </div>
        {currentScreen === "login" && <SignInForm />}
        {currentScreen === "signup" && <SignUpForm />}
      </AlertDialogContent>
    </AlertDialog>
  );
};
