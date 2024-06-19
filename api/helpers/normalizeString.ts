// Essa funcao basicamente trata strings de data
export const normalizeString = (date: string): string => {
  let strings = date.split(" ");
  return `${strings[0]} ${strings[1]}+${strings[2]}`;
};
