import { DATA } from "../database/csvData";
import { normalizeString } from "./normalizeString";

// Funcao principal aonde consultamos os dados de medicao
export const findMeasurements = (
  deviceId: string,
  resolution: string,
  startDate: string,
  endDate: string
) => {
  const startDateParsed = new Date(normalizeString(startDate));
  const endDateParsed = new Date(normalizeString(endDate));

  let accumulatedEnergy = 0;
  let response;
  let rawData: Array<any> = [];

  // Por default usamos o dia
  if (resolution == "hour") {
    DATA.forEach((item) => {
      if (deviceId === item.deviceId) {
        const timestampDate = new Date(item.timestamp);
        if (
          timestampDate >= startDateParsed &&
          timestampDate <= endDateParsed
        ) {
          accumulatedEnergy = accumulatedEnergy + item.activeEnergy;
        }
      }
    });
  } else if (resolution == "raw") {
    DATA.forEach((item) => {
      if (deviceId === item.deviceId) {
        const timestampDate = new Date(item.timestamp);
        if (
          timestampDate >= startDateParsed &&
          timestampDate <= endDateParsed
        ) {
          rawData.push({
            date: item.timestamp,
            activeEnergy: item.activeEnergy,
          });
        }
      }
    });
  } else {
    DATA.forEach((item) => {
      if (deviceId === item.deviceId) {
        const timestampDate = new Date(item.timestamp);
        if (
          timestampDate.getDate() <= endDateParsed.getDate() &&
          timestampDate.getDate() >= startDateParsed.getDate()
        ) {
          accumulatedEnergy = accumulatedEnergy + item.activeEnergy;
        }
      }
    });
  }

  // reposta definida de acordo com o requisicao
  response =
    rawData.length > 0
      ? rawData
      : {
          date: normalizeString(startDate),
          accumulatedEnergy: accumulatedEnergy,
        };

  return response;
};

