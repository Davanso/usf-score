// src/hooks/useLogin.ts
import { useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, googleProvider } from "../backend/firebase";

export const useLogin = () => {
  const [user, setUser] = useState<null | { name: string; photo: string }>(
    null
  );
  const [loading, setLoading] = useState(false);

  // Verifica se o usuário já está logado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Usuário",
          photo: currentUser.photoURL || "",
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const currentUser = result.user;
      setUser({
        name: currentUser.displayName || "Usuário",
        photo: currentUser.photoURL || "",
      });
    } catch (error) {
      console.error("Erro ao logar:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return { user, loading, loginWithGoogle, logout };
};
