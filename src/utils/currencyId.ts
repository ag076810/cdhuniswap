import { Currency, ETHER, Token } from 'rswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'RTH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
