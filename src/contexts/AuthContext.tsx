import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const useAuthModal = () => useContext(AuthContext);

export const AuthModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("login");
  const router = useRouter();

  const openModal = (screen = "login", clearUrl = false) => {
    setCurrentScreen(screen);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (router.query.login !== undefined) {
      openModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isModalOpen,
        currentScreen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
