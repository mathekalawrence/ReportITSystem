import { Client, Account, ID, Avatars } from 'react-native appwrite';

export const client = new Client()
 .setProject('68c1618e003a60b23040')
 .setPlatform('MyApp');

 export const account = new Account(client)
export const avatars = new Avatars(client)