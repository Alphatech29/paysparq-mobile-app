import { Client, Account, ID, Databases, Query } from "react-native-appwrite";
import { getInitials } from "../lib/utils/avatarUtils";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.paysparq",
  projectId: "66b1c66300282ecd04df",
  databaseId: "66b1c9c800238977384b",
  userCollectionId: "66b1ca1e0036df000fa3",
  storageId: "66b1cbdc0000fc49b579",
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
      phonenumber
    );

    if (!newAccount) throw new Error("Failed to create account");

    const initials = getInitials(username);
    const avatarUrl = `https://placeholder.com/50x50?text=${initials}`;

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id, 
        email: email, 
        username: username, 
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

export const logIn = async (email, password) => {
  try {
    const session = await account.createSession(email, password);

    if (!session) {
      throw new Error("Failed to create session");
    }


    const initials = getInitials(email.split("@")[0]);
    const avatarUrl = `https://placeholder.com/100x100?text=${initials}`;

    return { session, avatarUrl };
  } catch (error) {
    console.error("Login failed:", error.message);
    throw new Error(`Login failed: ${error.message}`);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw new Error("No account found");

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser || currentUser.documents.length === 0)
      throw new Error("No user document found");

    return currentUser.documents[0];
  } catch (error) {
    console.error("Error fetching current user:", error.message);
    throw error;
  }
};
