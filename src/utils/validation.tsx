export const validateRequired = (...fields: string[]): boolean => {
  return fields.every(field => field && field.trim() !== '');
};