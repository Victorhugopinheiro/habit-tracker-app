
import { Account, Client, Databases } from 'react-native-appwrite';

let client: Client;


client = new Client();
client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)   // Your Project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME!);   // Your package name / bundle identifier

    export const dataBaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
    export const usersCollectionId = process.env.EXPO_PUBLIC_APPWRITE_DETAIL_TRACKER_COLLECTION_ID!;

export const account = new Account(client);
export const databases = new Databases(client);
