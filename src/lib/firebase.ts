// ✅ FIREBASE CONFIGURAÇÃO OFICIAL - MÉTODO PADRÃO DA INDÚSTRIA
// Import the functions you need from the SDKs
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, query, orderByChild, ref, off } from "firebase/database";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// 🚀 CONFIGURAÇÃO OFICIAL
console.log('🔧 [Firebase] Inicializando configuração oficial');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
const functions = getFunctions(app);

// 🏗️ MÉTODO OFICIAL: USAR VARIÁVEL DE AMBIENTE DEDICADA
const useEmulators = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true';

// 🔍 LOGS PARA DEBUG
console.log('🔍 [Firebase] Configuração detectada:', {
  useEmulators,
  envVar: process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS,
  nodeEnv: process.env.NODE_ENV,
  isClient: typeof window !== 'undefined'
});

// 🚨 LOG ADICIONAL PARA DEBUG
if (typeof window !== 'undefined') {
  console.log('🚨 [CLIENT] Todas as variáveis de ambiente no cliente:');
  console.log('NEXT_PUBLIC_USE_FIREBASE_EMULATORS:', process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS);
  console.log('NEXT_PUBLIC_FIREBASE_PROJECT_ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
  console.log('All NEXT_PUBLIC vars:', Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC')));
}

// 🔧 CONECTAR AOS EMULATORS BASEADO NA VARIÁVEL OFICIAL
if (useEmulators) {
  console.log('🏠 [Firebase] MODO EMULATORS - Conectando aos emulators locais');
  console.log('🚨 [DEBUG] useEmulators é TRUE, indo para modo emulators');
  
  // ✅ Auth Emulator (resolve erro 503)
  try {
    connectAuthEmulator(auth, 'http://localhost:9099');
    console.log('✅ [Firebase] Auth Emulator conectado (porta 9099)');
  } catch (error) {
    console.log('⚠️ [Firebase] Auth Emulator já conectado');
  }

  // ✅ Firestore Emulator (dados locais)
  try {
    connectFirestoreEmulator(db, 'localhost', 8081);
    console.log('✅ [Firebase] Firestore Emulator conectado (porta 8081)');
  } catch (error) {
    console.log('⚠️ [Firebase] Firestore Emulator já conectado');
  }

  // ✅ Functions Emulator (sync de email)
  try {
    connectFunctionsEmulator(functions, 'localhost', 5001);
    console.log('✅ [Firebase] Functions Emulator conectado (porta 5001)');
  } catch (error) {
    console.log('⚠️ [Firebase] Functions Emulator já conectado');
  }

  console.log('🎉 [Firebase] EMULATORS CONECTADOS COM SUCESSO!');
  console.log('🌐 [Firebase] Emulator UI: http://localhost:4000');
  console.log('🏠 [Firebase] Hosting: http://localhost:5000');
  
} else {
  console.log('🌐 [Firebase] MODO PRODUÇÃO - Usando Firebase real');
  console.log('🚨 [DEBUG] useEmulators é FALSE, indo para modo produção');
  console.log('🚨 [DEBUG] Valor da variável:', process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS);
  console.log('📍 [Firebase] Projeto:', firebaseConfig.projectId);
}

// Compatibilidade
const isLocalhost = useEmulators;

export { app, firebaseConfig, db, auth, database, storage, functions, query, orderByChild, ref, off, isLocalhost };
