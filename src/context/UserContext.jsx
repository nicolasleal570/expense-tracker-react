import React, { useState, useEffect } from "react";
import { auth, db } from "../utils/firebase-config";

export const UserContext = React.createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const getUserProfile = async (email) => {
    const usersRef = db.collection("users");

    const usersCollection = await usersRef.where("email", "==", email).get();

    const profile = usersCollection[0];

    if (!profile) return null;

    return {
      id: profile.id,
      ...profile.data(),
    };
  };

  const createUser = async (userId, data) => {
    return db
      .collection("users")
      .doc(userId)
      .set({ ...data });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        let profile = await getUserProfile(firebaseUser.email);

        console.log({ profile });

        if (!profile) {
          profile = {
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            photo: firebaseUser.photoURL,
          };

          await createUser(firebaseUser.uid, profile);
        }

        setUser(profile);
      } else {
        setUser(null);
      }
    });
    return () => {};
  }, []);

  return (
    <div>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}
