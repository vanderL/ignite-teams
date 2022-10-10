import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "./storageConfig";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupsGetAll();

    const storage = JSON.stringify([...storedGroups, newGroupName])

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      storage
    );


  } catch (error) {
    throw error;
  }
}