import { DATA } from "../database/csvData";
import { compareDates } from "./timeHelper";
import { normalizeString } from "./normalizeString";

// Funcao principal aonde consultamos os dados de medicao
export const findMeasurements = (
  deviceId: string,
  resolution: string,
  startDate: string,
  endDate: string
) => {
  // Transformamos a string de data no tipo Data para facilitar comparcoes
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
        // Nessa caso necessita ser o mesmo dia para comprar horas
        if (
          compareDates(startDateParsed, endDateParsed) === -1 &&
          timestampDate.getTime() <= endDateParsed.getTime() &&
          timestampDate.getTime() >= startDateParsed.getTime()
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
          timestampDate.getTime() <= endDateParsed.getTime() &&
          timestampDate.getTime() >= startDateParsed.getTime()
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
          timestampDate.getTime() <= endDateParsed.getTime() &&
          timestampDate.getTime() >= startDateParsed.getTime()
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

