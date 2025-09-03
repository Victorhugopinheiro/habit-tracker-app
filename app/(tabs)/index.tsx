
import { AuthContext } from "@/context/authUser";
import { Link, Redirect } from "expo-router";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const {user} = useContext(AuthContext)!

  
  if(!user) return <Redirect href={'/(auth)/login'}/>

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Link href={'/(auth)/login'}>Clique aqui</Link>
    </View>
  );
}
