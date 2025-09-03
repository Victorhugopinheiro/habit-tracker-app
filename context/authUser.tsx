import { account } from "@/utils/appwrite";
import { useRouter } from "expo-router";
import { createContext, useEffect, useState } from "react";
import type { Models } from "react-native-appwrite";
import { ID } from "react-native-appwrite";
// Define local User type from Appwrite SDK
type User = Models.User;




interface AuthContextData {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    // loading: boolean;
    signUp: (name: string, email: string, password: string) => Promise<void>;

    isLoading: boolean;
    refreshUser?: () => Promise<void>;
}



export const AuthContext = createContext<AuthContextData | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const userAuth = false

    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)


    const router = useRouter()




    const refreshUser = async () => {
        try {
            const currentUser = await account.get()
            setUser(currentUser)
        } catch (error) {
            if (error instanceof Error) {
                setUser(null)
            }
            setUser(null)
        }
    }


    const signUp = async (name: string, email: string, password: string) => {
        setIsLoading(true)

        if (!email || !password || !name) {

            return;
        }

        try {
            const creatingUser: User = await account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name

            })

            await signIn(email, password)


        } catch (error) {
            if (error instanceof Error) {
                setUser(null)
                throw new Error(error.message)
            }
            setUser(null)
            throw error
        } finally {
            setIsLoading(false)
        }

    }

    const signIn = async (email: string, password: string) => {

        setIsLoading(true)
        if (!email || !password) return

        try {


            try {
                const userLogged = await account.createEmailPasswordSession({
                    email: email,
                    password: password
                })
            } catch (error) {
                if (error instanceof Error) {
                    setUser(null)
                    throw new Error(error.message)
                }
                setUser(null)
            }




            refreshUser()
            router.replace('/')
            alert('Login realizado com sucesso!')


        } catch (error) {
            if (error instanceof Error) {
                setUser(null)
                throw new Error(error.message)
            }
            setUser(null)
            throw error
        }
    }



    const signOut = async () => {
        setIsLoading(true)
        try {
            await account.deleteSession({sessionId: 'current'})
            setUser(null)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
            throw error
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        refreshUser()
    }, [user])

    return (
        <AuthContext.Provider value={{ user, signUp, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}