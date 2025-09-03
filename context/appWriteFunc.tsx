import { tablesDB } from "@/utils/appwrite";
import { createContext, useContext } from "react";
import { ID } from "react-native-appwrite";
import { AuthContext } from "./authUser";

interface AppWriteFuncContextType {
    addHabit?: ({description, last_completed, streak_count, title}:addHabitParams) => Promise<void>;
}

interface addHabitParams {
    title: string;
    description: string;
    last_completed: string;
    streak_count: number;
}

export const AppWriteFuncContext = createContext<AppWriteFuncContextType | null>(null);

export const AppWriteFuncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const {user} = useContext(AuthContext)!

    const addHabit = async ({title, last_completed, description, streak_count }:addHabitParams) => {

        if (!title || !description || !last_completed || streak_count === null) return;
      
        try{
            const newHabit = await tablesDB.createRow({
                databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
                tableId: process.env.EXPO_PUBLIC_APPWRITE_DETAIL_TRACKER_TABLE_ID!,
                rowId: ID.unique(),
                data: {
                    user_id: user?.$id,
                    title,
                    description,    
                    streak_count,
                    last_completed,
                    frequence: last_completed
                }

            })

        }catch(error){
            if (error instanceof Error) {
                console.log("Error adding habit:", error.message);
            }
            throw error;
        }
    }

    return (
        <AppWriteFuncContext.Provider value={{ addHabit }}>
            {children}
        </AppWriteFuncContext.Provider>
    );
}
// Define your AppWrite functions here