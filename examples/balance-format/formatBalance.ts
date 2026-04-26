export function formatBalance(amount: number, symbol: string, precision = 6): string {
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  }).format(amount)

  return `${formatted} ${symbol.toUpperCase()}`
}
