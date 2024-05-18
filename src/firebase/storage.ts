import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { app } from './firebaseConfig';

const storage = getStorage(app);

// Upload file to storage
export const uploadFile = async (
  filePath: string,
  file: File
): Promise<string | null> => {
  const storageRef = ref(storage, filePath);
  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
};

// Download file URL from storage
export const getFileURL = async (filePath: string): Promise<string | null> => {
  const storageRef = ref(storage, filePath);
  try {
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error getting file URL:', error);
    return null;
  }
};

// Delete file from storage
export const deleteFile = async (filePath: string): Promise<void> => {
  const storageRef = ref(storage, filePath);
  try {
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};
