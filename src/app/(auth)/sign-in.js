import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
// import { useAuth } from "../../context/auth";
import CTextInput from "@/components/CTextInput";
import { useAuth } from "../../store/stores";

export default function SignIn() {
    const { signIn } = useAuth();
    return (
        <View className="flex-1 p-2 items-center justify-center bg-slate-800">
            <View className="w-[50vw]" >
                <Text className="font-bold">Email</Text>
                <CTextInput className="bg-blue-100 text-red-500 my-2" />
            </View>
            <View className="w-[50vw]" >
                <Text className="font-bold">Password</Text>
                <CTextInput className="bg-blue-100 text-red-500 my-2" />
            </View>
            <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onPress={() => signIn()}>
                <Text>Sign In</Text>
            </TouchableOpacity>

        </View>
    );
}