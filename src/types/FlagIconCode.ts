export type FlagIconCode = 'GB' | 'ES' | 'FR' | 'DE' | 'JP' | 'CN' | 'RU' | 'IT';

export const isFlagIconCode = (code: string): code is FlagIconCode => {
  return ['GB', 'ES', 'FR', 'DE', 'JP', 'CN', 'RU', 'IT'].includes(code);
};