import mongoose from "mongoose";
export interface DatabaseConfig {
  uri: string;
  dbName: string;
}
export const connectDatabase = async (
  config: DatabaseConfig,
): Promise<void> => {
  await mongoose.connect(config.uri, {
    dbName: config.dbName,
    serverSelectionTimeoutMS: 5000,
  });
  console.log("Conexión con MongoDB establecida.");
};

//Sugerencia de exportar una función para desconectar la base de datos, útil para pruebas y cierre de la aplicación
//Visual Studio Code sugiere exportar la función para poder usarla en otros archivos, como en src/server.ts para cerrar la conexión al recibir señales de terminación.
export const disconnectDatabase = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log("Conexión con MongoDB cerrada.");
};
