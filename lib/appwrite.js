import { Client, Account, ID, Databases } from 'react-native-appwrite';
import { getInitials } from '../lib/utils/avatarUtils'; 

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'ccom.jsm.paysparq',
  projectId: '66b1c66300282ecd04df',
  databaseId: '66b1c9c800238977384b',
  userCollectId: '66b1ca1e0036df000fa3',
  storageId: '66b1cbdc0000fc49b579'
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const databases = new Databases(client);

export const createUser = async (email, username, phonenumber, password) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      username,
      password,
      phonenumber,
    );

    if (!newAccount) throw new Error('Failed to create account');

    // Generate avatar URL based on initials
    const initials = getInitials(username);
    const avatarUrl = `https://placeholder.com/50x50?text=${initials}`; 

    await logIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function logIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);

    if (!session) {
      throw new Error('Failed to create session');
    }

   
    const initials = getInitials(username);
    const avatarUrl = `https://placeholder.com/100x100?text=${initials}`; 

    return { session, avatarUrl };
  } catch (error) {
    console.log(error);
    throw new Error(`Login failed: ${error.message}`);
  }
}
