import { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth';

export function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (
    name: string,
    emailOrPhone: string,
    password: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailOrPhone,
      password
    );
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    }
    return userCredential;
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // Send password reset email
  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Reset password with code from email
  const resetPassword = (oobCode: string, newPassword: string) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signUp,
    signIn,
    logOut,
    forgotPassword,
    resetPassword,
  };
}
