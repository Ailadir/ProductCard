export type CurrencyType = 'RUB' | 'USD' | 'EUR';

export const getLocale = (currency: CurrencyType) => {
  switch (currency) {
    case 'USD': return 'en-US';
    case 'EUR': return 'de-DE';
    default: return 'ru-RU';
  }
};

export const formatPrice = (price: number, currency: CurrencyType) => {
  return new Intl.NumberFormat(getLocale(currency), {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);
};
