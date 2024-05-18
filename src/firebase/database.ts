import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

// Add or update document in Firestore
export const setDocument = async (
  collectionPath: string,
  docId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
): Promise<void> => {
  const docRef = doc(collection(db, collectionPath), docId);
  try {
    await setDoc(docRef, data);
  } catch (error) {
    console.error('Error setting document:', error);
  }
};

// Get document from Firestore
export const getDocument = async (
  collectionPath: string,
  docId: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any | null> => {
  const docRef = doc(collection(db, collectionPath), docId);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
};

// Update document in Firestore
export const updateDocument = async (
  collectionPath: string,
  docId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
): Promise<void> => {
  const docRef = doc(collection(db, collectionPath), docId);
  try {
    await updateDoc(docRef, data);
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

// Delete document from Firestore
export const deleteDocument = async (
  collectionPath: string,
  docId: string
): Promise<void> => {
  const docRef = doc(collection(db, collectionPath), docId);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};
