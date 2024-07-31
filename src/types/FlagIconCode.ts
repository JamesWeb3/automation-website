export type FlagIconCode = 
  'GB' | 'ES' | 'FR' | 'DE' | 'JP' | 'CN' | 'RU' | 'IT' |
  'PT' | 'NL' | 'KR' | 'SA' | 'SE' | 'NO' | 'DK' | 'FI' |
  'PL' | 'TR' | 'GR' | 'CZ' | 'HU' | 'RO' | 'IL' | 'IN' |
  'BD' | 'TH' | 'VN' | 'MY' | 'ID' | 'PH' | 'UA' | 'BG' |
  'RS' | 'HR' | 'SK' | 'SI' | 'LT' | 'LV' | 'EE' | 'GE' |
  'AZ' | 'KZ' | 'UZ' | 'AM' | 'MK' | 'AL' | 'BA' | 'ME' |
  'MT' | 'IS';

export const isFlagIconCode = (code: string): code is FlagIconCode => {
  return [
    'GB', 'ES', 'FR', 'DE', 'JP', 'CN', 'RU', 'IT',
    'PT', 'NL', 'KR', 'SA', 'SE', 'NO', 'DK', 'FI',
    'PL', 'TR', 'GR', 'CZ', 'HU', 'RO', 'IL', 'IN',
    'BD', 'TH', 'VN', 'MY', 'ID', 'PH', 'UA', 'BG',
    'RS', 'HR', 'SK', 'SI', 'LT', 'LV', 'EE', 'GE',
    'AZ', 'KZ', 'UZ', 'AM', 'MK', 'AL', 'BA', 'ME',
    'MT', 'IS'
  ].includes(code);
};
