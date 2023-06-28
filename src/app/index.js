import { NativeWindStyleSheet } from "nativewind";
import { Text, View } from "react-native";
import { useAuth } from "../context/auth";

NativeWindStyleSheet.setOutput({
  default: "native",
});


export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  );
}
