export function formatNumber(number: number) {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(number);
}