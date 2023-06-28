import React from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, TouchableOpacity } from "react-native";
import { useAuth } from "../store/stores";

export default function Root() {
  const { user } = useAuth();
  useProtectedRoute(user);
  return (
    // Setup the auth context and render our layout inside of it.
    // <Provider>
    <DrawerWrapper >
      <Slot />
    </DrawerWrapper>
    // </Provider>
  );
}

const DrawerWrapper = ({ children }) => {
  const { user } = useAuth();

  return (
    <ConditionalWrap
      condition={user}
      wrap={children => <Drawer screenOptions={{
        headerRight: SignOut,
      }}>
        {children}
      </Drawer>}>
      {children}
    </ConditionalWrap>
  )
}

const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <TouchableOpacity onPress={() => signOut()}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  )
}

const ConditionalWrap = ({ condition, wrap, children }) => (
  condition ? wrap(children) : children
);

function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}