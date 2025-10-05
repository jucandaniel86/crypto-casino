import { q as o } from './index-BQXB1I3i.js'
const s = {
    test: 'https://test-api.paymentiq.io/paymentiq',
    production: 'https://api.paymentiq.io/paymentiq',
  },
  r = Object.freeze({
    getSessionId: async (e, t, a) => {
      const n = {
        headers: {
          'Content-Type': 'text/plain;charset=utf8',
        },
        params: {
          isFromNewWallet: a,
        },
      }
      return (
        t &&
          (n.params = {
            currency: t,
          }),
        await (await o.get(e, n)).json()
      )
    },
    getPaymentMethods: async ({ merchantId: e, userId: t, sessionId: a, env: n }) =>
      await (
        await fetch(
          `${s[n]}/api/user/payment/method/${e}/${t}?sessionId=${a}&method=deposit&channelId=Android&showExpired=false`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'GET',
          },
        )
      ).json(),
    quickDeposit: async ({
      piqSessionParams: e,
      lastUsedCreditCardInfo: t,
      amount: a,
      cvv: n,
      env: i,
    }) =>
      await (
        await fetch(`${s[i]}/api/creditcard/deposit/process`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            merchantId: e == null ? void 0 : e.merchantId,
            amount: a,
            sessionId: e == null ? void 0 : e.sessionId,
            userId: e == null ? void 0 : e.userId,
            accountId: t == null ? void 0 : t.accountId,
            encCvv: window == null ? void 0 : window.encryptData(n),
            expiryYear: t.expiryYear,
            expiryMonth: t.expiryMonth,
            attributes: {
              type: 'quickdeposit',
            },
          }),
        })
      ).json(),
  })
export { s as p, r }
