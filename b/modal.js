import { N as r, V as W, aX as S } from './index-BQXB1I3i.js'
import { A as d } from './ebRVDcZQ-Dw89pKBt.js'
import { C as _, u as m } from './DSJXERt2-BWPUbs5Y.js'
import { w as t, m as p, C as u, E as C } from './D2nWmKgY-BKBS3-JJ.js'
import { I as v, _ as A, a as I, A as P, e as T, T as b, E as $ } from './CuM-YyGO-CH13c_hF.js'
const D = r(`${t}/init`),
  L = r(`${t}/withdrawContinue`),
  O = r(`${t}/withdrawStepChange`),
  H = r(`${t}/tabsChange`),
  F = r(`${t}/withdrawSuccessHide`),
  V = r(`${t}/updatePreselectedCurrency`),
  g = r(`${t}/updateWithdrawalPreference`),
  f = {
    500: 'CASHIER_ERRORS_UNEXPECTED',
    404: 'CASHIER_ERRORS_ADDRESS-NOT-FOUND',
  },
  y = {
    422: 'CASHIER_ERRORS_WITHDRAW_VALIDATION',
    500: 'CASHIER_ERRORS_WITHDRAW_UNEXPECTED',
  },
  E = {
    500: 'CASHIER_ERRORS_UNEXPECTED',
  },
  N = {
    overlayContext: null,
    address: '',
    depositLoader: !0,
    depositError: '',
    withdrawLoader: !1,
    withdrawError: '',
    withdrawSuccess: !1,
    withdrawStep: d.WITHDRAW_FORM,
    preselectedCurrency: '',
    activeTab: S.DEPOSIT,
    mfaWithdrawalPrefValue: !1,
    mfaFactorValue: !1,
    tag: '',
    buyCryptoProviderWallets: '',
    buyCryptoProviderWalletsLoader: !1,
    buyCryptoProviderWalletsError: '',
    piqAmount: '',
    piqCurrency: '',
  },
  x = W(N, (n) => {
    n.addCase(D, (a, e) => {
      a.activeTab = e.payload
    })
      .addCase(p.pending, (a) => {
        ;((a.depositLoader = !0), (a.depositError = ''))
      })
      .addCase(p.fulfilled, (a, e) => {
        ;((a.tag = e.payload.tag), (a.address = e.payload.address), (a.depositLoader = !1))
      })
      .addCase(p.rejected, (a, e) => {
        ;((a.depositLoader = !1), (a.depositError = f[e.payload] ? f[e.payload] : f[500]))
      })
      .addCase(u.pending, (a) => {
        ;((a.withdrawLoader = !0), (a.withdrawError = ''), (a.withdrawStep = d.WITHDRAW_FORM))
      })
      .addCase(u.rejected, (a, e) => {
        var l, o, i, h
        a.withdrawLoader = !1
        const w = (l = e.payload.data) == null ? void 0 : l.type,
          s = (o = e.payload) == null ? void 0 : o.data,
          c = Number(e.payload.status)
        if (c === 500 && s)
          w === v
            ? (a.withdrawError = `${A}__${s.period}__${s.available}__${e.meta.arg.currency}`)
            : w === I
              ? (a.withdrawError = `${P}__${s.amountToWager}__${s.playerCurrency}`)
              : w === T
                ? (a.withdrawError = b)
                : (a.withdrawError = y[500])
        else if (c === 422) {
          const R =
            ((i = e.payload) == null ? void 0 : i.message) ||
            ((h = e.payload) == null ? void 0 : h.detail)
          a.withdrawError = R ? $[R] : y[422]
        } else a.withdrawError = y[500]
        a.withdrawStep = d.WITHDRAW_FORM
      })
      .addCase(u.fulfilled, (a) => {
        ;((a.withdrawLoader = !1), (a.withdrawStep = d.SUCCESS), (a.withdrawSuccess = !0))
      })
      .addCase(F, (a) => {
        a.withdrawSuccess = !1
      })
      .addCase(L, (a) => {
        ;((a.withdrawStep = d.WITHDRAW_FORM), (a.withdrawError = ''), (a.withdrawLoader = !1))
      })
      .addCase(H, (a, e) => {
        ;((a.withdrawError = ''),
          (a.withdrawLoader = !1),
          (a.withdrawSuccess = !1),
          a.mfaWithdrawalPrefValue
            ? (a.withdrawStep = a.mfaFactorValue ? d.WITHDRAW_FORM : d.ENABLE_2FA)
            : (a.withdrawStep = d.WITHDRAW_FORM),
          (a.activeTab = e.payload))
      })
      .addCase(V, (a, e) => {
        a.preselectedCurrency = e.payload
      })
      .addCase(O, (a, e) => {
        a.withdrawStep = d[e.payload]
      })
      .addCase(g, (a, e) => {
        ;((a.mfaWithdrawalPrefValue = e.payload.mfaWithdrawalEnabled),
          (a.mfaFactorValue = e.payload.factorVerified))
      })
      .addCase(_.fulfilled, (a, e) => {
        var l, o, i
        a.mfaWithdrawalPrefValue =
          (i = (o = (l = e.meta) == null ? void 0 : l.arg) == null ? void 0 : o.body) == null
            ? void 0
            : i.withdrawalMfa
      })
      .addCase(m.fulfilled, (a, e) => {
        a.mfaFactorValue = e.payload
      })
      .addCase(C.pending, (a) => {
        ;((a.buyCryptoProviderWalletsLoader = !0), (a.buyCryptoProviderWalletsError = ''))
      })
      .addCase(C.fulfilled, (a, e) => {
        ;((a.buyCryptoProviderWallets = e.payload), (a.buyCryptoProviderWalletsLoader = !1))
      })
      .addCase(C.rejected, (a, e) => {
        ;((a.buyCryptoProviderWallets = ''),
          (a.buyCryptoProviderWalletsLoader = !1),
          (a.buyCryptoProviderWalletsError = E[e.payload] ? E[e.payload] : E[500]))
      })
      .addDefaultCase((a) => a)
  })
export { F, H, L as I, g as N, O, x as X, D as v }
