import csvParser from "csv-parser";
import dotenv from 'dotenv';
import fs from "fs";

dotenv.config();

const csvFilePath = process.env.FILE_PATH!;

export interface Measurement {
  deviceId: string;
  timestamp: string;
  activeEnergy: number;
  activePower: number;
}

export const DATA: Measurement[] = [];

// Função para ler o arquivo CSV
fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on("data", (data: any) => {
    // Mapeando os dados do CSV para a interface Measurement
    const measurement: Measurement = {
      deviceId: data["id-dispositivo"],
      timestamp: data["timestamp"],
      activeEnergy: parseInt(data["activeEnergy"]),
      activePower: parseInt(data["activePower"]),
    };
    DATA.push(measurement);
  });
