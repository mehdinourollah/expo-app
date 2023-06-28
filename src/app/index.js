import { NativeWindStyleSheet } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";
// import { useAuth } from "../context/auth";
import { useCountStore, useAuth } from "@/store/stores";

NativeWindStyleSheet.setOutput({
  default: "native",
});


export default function Index() {
  const { signOut } = useAuth();
  const { count, inc } = useCountStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={inc}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut()}>
        <Text >Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
