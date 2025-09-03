import { AppWriteFuncProvider } from "@/context/appWriteFunc";
import { AuthProvider } from "@/context/authUser";
import { Stack } from "expo-router";




export default function RootLayout() {


  return (


    <AuthProvider>
      <AppWriteFuncProvider>
        <Stack >

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        </Stack>
      </AppWriteFuncProvider>
    </AuthProvider>
  )
}
