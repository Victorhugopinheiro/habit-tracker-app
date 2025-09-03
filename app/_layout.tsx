import { AuthProvider } from "@/context/authUser";
import { Stack } from "expo-router";




export default function RootLayout() {


  return (


    <AuthProvider>
      <Stack >

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
    </AuthProvider>
  )
}
