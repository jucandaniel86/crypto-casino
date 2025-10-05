import {
  c as ha,
  o as va,
  u,
  bx as ba,
  r as o,
  C as Ea,
  b as Sa,
  cw as Ia,
  cU as Ra,
  c$ as Wa,
  dP as ka,
  R as Aa,
  av as M,
  bZ as Oa,
  aj as Pa,
  x as ga,
  F as _a,
  c8 as Da,
  p as ce,
  dQ as K,
  dm as Ta,
  dR as d,
  V as Fa,
  dS as He,
  c4 as re,
  dT as ge,
  dU as ne,
  dV as Le,
  dW as xe,
  dX as Be,
  D as Va,
  aX as te,
  _ as _e,
  b5 as De,
  cD as Te,
  dY as Ue,
  cs as ja,
  c2 as oe,
  c1 as Ha,
  M as Fe,
  h as y,
  B as La,
  a9 as xa,
  dZ as Ba,
  P as se,
  $ as Ua,
  g as Ne,
  d as ue,
  i as p,
  q as k,
  d_ as Na,
} from './index-BQXB1I3i.js'
import { A as w } from './ebRVDcZQ-Dw89pKBt.js'
import { C as $a, u as Ma } from './DSJXERt2-BWPUbs5Y.js'
import { I as Ka, _ as qa } from './CuM-YyGO-CH13c_hF.js'
import { W as Ya } from './index-34SRLpzw-DkiFU858.js'
import { c as Xa } from './4gY_iKkR-DeCI6236.js'
import { o as Qa, n as Za } from './B65z3CnO-OJlCnz48.js'
import { a as Ga } from './DSoQQcVL-Y2VEqwzK.js'
import { F as Ja } from './D20hsCCi-Xh8kMZZP.js'
import { H as za, B as er, F as ar } from './B0GuoXld-B4h3VkKS.js'
import { K as rr } from './BVhBa4zq-_d45PnP7.js'
import { $ as tr } from './DAb32yvy-BmrBEpa1.js'
import './DV1R1HpH-B2zSwPkU.js'
import './CKMV3d9m-CnLPPjWz.js'
import './BqHgjfn9-11qGeXKY.js'
import './pRtPHpCG-DEW353Mk.js'
import './k_VmSkRu-Cx14iVBh.js'
import './B7dEU72w-C8wNPyGV.js'
import './CGe1N--c-DUdKSoII.js'
import './CNej5qMx-K7coI5Gp.js'
import './DvgpvASn-8IyA9FCi.js'
import './Dhpf7QZy-TTL0LgTw.js'
import './BjkYHYOo-BQiYIWfW.js'
import './DDXnjaW6-DaCwWRBa.js'
import './Bf5X_KZD-citQ1pp4.js'
import './Cowj2eMc-BwF1BkKV.js'
import './CgPwxXzi-B0_RiYkM.js'
import './tU2_qLVY-FNxm7Iws.js'
import './BuraevXA-CpdRjtsm.js'
import './C8bChUvG-DSkgLcBv.js'
import './C3v6mQTU-DFWvzp9a.js'
import './DodOFLJr-BwOQj346.js'
import './BLJg9Jyq-DXcLBxlj.js'
import './D7TU_N_8-BoVKmCI4.js'
import './DypxgvZF-C5aSDpZ8.js'
import './HRrZTP5B-D6zRSo6o.js'
import './DdTKmNAK-CUu4Ax5w.js'
import './Bj2qxZEN-15s_HrF8.js'
import './DxU3QKWF-CsN19OUK.js'
import './DEn40Xb6-Da9yFGY2.js'
import './DkN5UWTS-D12We3Td.js'
import './BAu_Tfdg-DgFfVyF4.js'
import './aX0UL-Hf-BSaLq6rG.js'
import './BPeEBDE4-BuBLi-Ei.js'
import './lI0WZM5x-CihKXwk0.js'
import './hNRpCA60-B32OJCS4.js'
import './B9IZXY9k-OszGhIYD.js'
import './Dj01Sznd-Bq9nsSQw.js'
import './DPbbTVSp-CQj1fkIG.js'
import './BrnD9j3J-DSpU_8ye.js'
import './B5nizUJi-DcvF7TAQ.js'
import './-8dasHCD-B_JFq9my.js'
import './B-Ys4TlA-Cu1gkVps.js'
import './Dp6LCIy6-DQSWhp-h.js'
import './BfDMAeCY-BuTtnRpv.js'
import './DPLlMZJV-C-CanYli.js'
import './CmEupu3R-B1ENopaP.js'
const pe = Object.freeze({
    getDepositAddress: (a, e) =>
      k
        .post(a, {
          body: {
            currency: e,
          },
        })
        .then((r) => r.json()),
    withdraw: (a, e, r, i, n, m, A) =>
      k
        .post(a, {
          body: {
            currency: e,
            address: r,
            amount: i,
            totp: n,
            tag: m,
            network: A,
          },
        })
        .then((O) => O.text()),
    getRamperWallets: (a) => k.get(a).then((e) => e.text()),
    startKYCVerification: (a) => k.post(a).then((e) => e.json()),
    checkKYCStatus: (a) => k.get(a).then((e) => e.json()),
    kycFinished: (a, e) =>
      k
        .post(a, {
          body: {
            referenceId: e,
          },
        })
        .then((r) => r.json()),
  }),
  V = ce(
    `${d}/getDepositAddress`,
    async ({ url: a, currency: e }, { rejectWithValue: r, dispatch: i }) => {
      try {
        return await pe.getDepositAddress(a, e)
      } catch (n) {
        return (i(Ne(await ue.parseError(n))), r(n.status))
      }
    },
  ),
  q = ce(
    `${d}/withdraw`,
    async (
      { url: a, currency: e, address: r, amount: i, totp: n, tag: m, network: A },
      { rejectWithValue: O },
    ) => {
      try {
        return await pe.withdraw(a, e, r, i, n, m, A)
      } catch (S) {
        const l = await ue.parseJsonError(S)
        return O(l)
      }
    },
  ),
  Y = ce(`${d}/getRamperWallets`, async ({ url: a }, { rejectWithValue: e, dispatch: r }) => {
    try {
      return await pe.getRamperWallets(a)
    } catch (i) {
      return (r(Ne(await ue.parseError(i))), e(i.status))
    }
  }),
  le = {
    500: 'CASHIER_ERRORS_UNEXPECTED',
    404: 'CASHIER_ERRORS_ADDRESS-NOT-FOUND',
  },
  Ve = {
    422: 'CASHIER_ERRORS_WITHDRAW_VALIDATION',
    500: 'CASHIER_ERRORS_WITHDRAW_UNEXPECTED',
  },
  de = {
    500: 'CASHIER_ERRORS_UNEXPECTED',
  },
  je = {
    show: !1,
    address: '',
    depositLoader: !0,
    depositError: '',
    withdrawLoader: !1,
    withdrawError: '',
    withdrawSuccess: !1,
    withdrawStep: w.WITHDRAW_FORM,
    preselectedCurrency: '',
    selectedTabIndex: 0,
    mfaWithdrawalPrefValue: !1,
    mfaFactorValue: !1,
    tag: '',
    buyCryptoProviderWallets: '',
    buyCryptoProviderWalletsLoader: !1,
    buyCryptoProviderWalletsError: '',
    kycStatus: null,
    kycVerificationUrl: '',
    kycVerificationLoader: !1,
    kycVerificationError: '',
    kycVerificationId: '',
  },
  or = Fa(je, (a) => {
    a.addCase(Ue, (e, r) => {
      ;((e.show = !0), (e.selectedTabIndex = r.payload ?? je.selectedTabIndex))
    })
      .addCase(He, (e) => {
        ;((e.show = !1),
          (e.selectedTabIndex = 0),
          (e.preselectedCurrency = ''),
          (e.withdrawError = ''))
      })
      .addCase(V.pending, (e) => {
        ;((e.depositLoader = !0), (e.depositError = ''))
      })
      .addCase(V.fulfilled, (e, r) => {
        ;((e.tag = r.payload.tag), (e.address = r.payload.address), (e.depositLoader = !1))
      })
      .addCase(V.rejected, (e, r) => {
        ;((e.depositLoader = !1), (e.depositError = le[r.payload] ? le[r.payload] : le[500]))
      })
      .addCase(q.pending, (e) => {
        ;((e.withdrawLoader = !0), (e.withdrawError = ''), (e.withdrawStep = w.WITHDRAW_FORM))
      })
      .addCase(q.rejected, (e, r) => {
        var i
        if (((e.withdrawLoader = !1), ((i = r.payload.data) == null ? void 0 : i.type) === Ka)) {
          const n = r.payload.data
          e.withdrawError = `${qa}__${n.period}__${n.available}__${r.meta.arg.currency}`
        } else e.withdrawError = Ve[r.payload.status] ?? Ve[500]
        e.withdrawStep = w.WITHDRAW_FORM
      })
      .addCase(q.fulfilled, (e) => {
        ;((e.withdrawLoader = !1), (e.withdrawStep = w.SUCCESS), (e.withdrawSuccess = !0))
      })
      .addCase(Le, (e) => {
        e.withdrawSuccess = !1
      })
      .addCase(ne, (e) => {
        ;((e.withdrawStep = w.WITHDRAW_FORM), (e.withdrawError = ''), (e.withdrawLoader = !1))
      })
      .addCase(xe, (e, r) => {
        ;((e.withdrawError = ''),
          (e.withdrawLoader = !1),
          (e.withdrawSuccess = !1),
          e.mfaWithdrawalPrefValue
            ? (e.withdrawStep = e.mfaFactorValue ? w.WITHDRAW_FORM : w.ENABLE_2FA)
            : (e.withdrawStep = w.WITHDRAW_FORM),
          (e.selectedTabIndex = r.payload))
      })
      .addCase(Na, (e, r) => {
        e.preselectedCurrency = r.payload
      })
      .addCase(K, (e, r) => {
        e.withdrawStep = w[r.payload]
      })
      .addCase(Be, (e, r) => {
        ;((e.mfaWithdrawalPrefValue = r.payload.mfaWithdrawalEnabled),
          (e.mfaFactorValue = r.payload.factorVerified))
      })
      .addCase($a.fulfilled, (e, r) => {
        var i, n, m
        e.mfaWithdrawalPrefValue =
          (m = (n = (i = r.meta) == null ? void 0 : i.arg) == null ? void 0 : n.body) == null
            ? void 0
            : m.withdrawalMfa
      })
      .addCase(Ma.fulfilled, (e, r) => {
        e.mfaFactorValue = r.payload
      })
      .addCase(Y.pending, (e) => {
        ;((e.buyCryptoProviderWalletsLoader = !0), (e.buyCryptoProviderWalletsError = ''))
      })
      .addCase(Y.fulfilled, (e, r) => {
        ;((e.buyCryptoProviderWallets = r.payload), (e.buyCryptoProviderWalletsLoader = !1))
      })
      .addCase(Y.rejected, (e, r) => {
        ;((e.buyCryptoProviderWallets = ''),
          (e.buyCryptoProviderWalletsLoader = !1),
          (e.buyCryptoProviderWalletsError = de[r.payload] ? de[r.payload] : de[500]))
      })
      .addDefaultCase((e) => e)
  }),
  sr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.show
  },
  lr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.address
  },
  dr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.tag
  },
  ir = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.depositLoader
  },
  nr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.depositError
  },
  cr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.withdrawError
  },
  ur = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.withdrawLoader
  },
  pr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.withdrawStep
  },
  yr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.withdrawSuccess
  },
  wr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.preselectedCurrency
  },
  fr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.selectedTabIndex
  },
  Cr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.mfaWithdrawalPrefValue
  },
  mr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.mfaFactorValue
  },
  hr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.buyCryptoProviderWallets
  },
  vr = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.buyCryptoProviderWalletsLoader
  },
  br = (a) => {
    var e
    return (e = a[p][d]) == null ? void 0 : e.buyCryptoProviderWalletsError
  },
  Er = () => u((a) => sr(a)),
  Sr = () => u((a) => lr(a)),
  Ir = () => u((a) => dr(a)),
  Rr = () => u((a) => ir(a)),
  Wr = () => u((a) => nr(a)),
  kr = () => u((a) => cr(a)),
  Ar = () => u((a) => ur(a)),
  Or = () => u((a) => pr(a)),
  Pr = () => u((a) => yr(a)),
  gr = () => u((a) => wr(a)),
  _r = () => u((a) => fr(a)),
  Dr = () => u((a) => Cr(a)),
  Tr = () => u((a) => mr(a)),
  Fr = () => u((a) => hr(a)),
  Vr = () => u((a) => vr(a)),
  jr = () => u((a) => br(a)),
  Hr = 'CashierOverlay-module_piq_ltCWg',
  Lr = 'CashierOverlay-module_dialogPaper_tBTXb',
  xr = 'CashierOverlay-module_dialogContent_oUUa-',
  ie = {
    piq: Hr,
    dialogPaper: Lr,
    dialogContent: xr,
  },
  $t = ({
    depositCurrencies: a,
    depositURLNew: e,
    withdrawCurrencies: r,
    withdrawalURLNew: i,
    factorVerified: n,
    mfaWithdrawalEnabled: m,
    profilePageRedirectUrl: A,
    cancelBonusesOnWithdrawal: O,
    buyCryptoProvider: S,
    kycVerification: l,
    usePIQ: $e = !1,
    paymentIQData: Me,
    balances: Ke,
    currencies: qe,
    uploadFilesUrl: Ye,
  }) => {
    var ye, we, fe
    const { t: E } = ha(),
      s = va(),
      [Ce] = Ta(),
      c = Er(),
      P = ba(),
      [me, Xe] = o.useState(!1),
      [b, g] = o.useState(''),
      [j, H] = o.useState(''),
      [_, Qe] = o.useState(!1),
      he = Ea(),
      ve = Sa(Ua.XS_SM),
      Ze = Sr(),
      Ge = Ir(),
      Je = Rr(),
      ze = Ar(),
      ea = Wr(),
      aa = kr(),
      X = Or(),
      D = Ia(),
      I = Xa(),
      be = Ra(!1),
      Q = Wa(),
      Ee = ka(),
      ra = Pr(),
      L = gr(),
      R = _r(),
      x = Dr(),
      B = Tr(),
      Z = Aa(),
      T = M.isBrandKYCEnabled(),
      Se = Oa(),
      [F, U] = o.useState(!1),
      { account: v } = Ya(),
      ta = Pa.getAmount()
    o.useEffect(() => {
      ga.disableOverlayV2Logic(_a.Cashier)
    }, [])
    const oa = o.useMemo(
        () =>
          Object.keys(r).reduce(
            (t, f) => ({
              ...t,
              [f]: {
                ...r[f],
                ...I[f],
                currencyCode: f,
              },
            }),
            {},
          ),
        [I, r],
      ),
      Ie = o.useMemo(() => (Q ? I[Q] : null), [I, Q]),
      sa = o.useCallback(() => {
        Qe(!_)
      }, [_]),
      Re = o.useMemo(() => {
        const t = Object.keys(r),
          f = Z.filter((h) => t.includes(h.currency)),
          C = be
            .filter((h) => t.includes(h.currency))
            .map((h) => ({
              ...h,
              fullPrecisionBalance: f.find(($) => h.currency === $.currency).balance,
            }))
        let W = []
        return (
          _ &&
            (W = C.map((h) => {
              const $ = I[h.currency],
                ma = $ ? $.rate : 1
              return {
                ...h,
                withdrawableBalance: Da(+h.withdrawableBalance * ma, !0, Ee),
              }
            })),
          {
            withdrawableBalancesFiat: W,
            withdrawableBalancesCrypto: C,
          }
        )
      }, [I, Z, _, Ee, be, r]),
      G = o.useCallback(
        (t) => {
          i &&
            t &&
            s(
              q({
                url: i,
                currency: t.currencyCode,
                address: t.currencyAddress,
                amount: t.withdrawAmount,
                totp: t.totp,
                tag: t.tag,
                network: t.network,
                walletAddress: v == null ? void 0 : v.address,
              }),
            )
        },
        [i, s, v == null ? void 0 : v.address],
      ),
      la = o.useCallback(
        (t) => {
          switch (X) {
            case w.ENTER_2FA_CODE: {
              G(t)
              break
            }
            case w.WITHDRAW_FORM: {
              x ? B && s(K(w.ENTER_2FA_CODE)) : G(t)
              break
            }
          }
        },
        [s, x, B, X, G],
      ),
      da = o.useMemo(() => {
        const t = [
          {
            tabName: E('CASHIER_DEPOSIT'),
          },
          {
            tabName: E('CASHIER_WITHDRAW'),
          },
        ]
        return (
          S &&
            t.push({
              tabName: E('CASHIER_BUY-CRYPTO'),
            }),
          t
        )
      }, [E, S])
    ;(o.useEffect(() => {
      Ce(d, or)
    }, [Ce]),
      o.useEffect(() => {
        Xe(he || ve)
      }, [he, ve]))
    const We = o.useCallback(() => {
        ;(U(!1), s(He()))
      }, [s]),
      ke = o.useCallback(
        (t) => {
          if (Object.keys(a).includes(t) && a[t].networkData) {
            const f = Object.keys(a[t].networkData).find((W) => W === t),
              C = Object.keys(a[t].networkData)[0]
            H(f || C)
          } else H('')
        },
        [a],
      ),
      ia = o.useCallback((t) => {
        g(t)
      }, [])
    o.useEffect(() => {
      b && ke(b)
    }, [b, ke])
    const na = o.useCallback((t) => {
        H(t)
      }, []),
      J = o.useMemo(() => Object.keys(a), [a])
    o.useEffect(
      () => (
        c && (L ? g(L) : D && J.includes(D) ? g(D) : g(J[0])),
        () => {
          c && (g(''), H(''))
        }
      ),
      [D, J, L, c],
    )
    const z = o.useMemo(
      () =>
        T &&
        c &&
        F &&
        [re.IDV_VERIFICATION, re.POA_VERIFICATION, re.VERIFICATION_BOTH].includes(Se),
      [F, Se, T, c],
    )
    ;(o.useEffect(() => {
      c &&
        P &&
        e &&
        b &&
        (a[b].networkData ||
          s(
            V({
              url: e,
              currency: b,
            }),
          ))
    }, [a, P, e, b, c, s]),
      o.useEffect(() => {
        c &&
          P &&
          e &&
          j &&
          s(
            V({
              url: e,
              currency: j,
            }),
          )
      }, [j, P, e, c, s]))
    const ca = o.useMemo(
        () => ({
          paper: ie.dialogPaper,
        }),
        [],
      ),
      ua = o.useMemo(
        () => ({
          root: ie.dialogContent,
        }),
        [],
      ),
      pa = o.useCallback(async (t) => {
        await ge(t)
      }, []),
      ya = o.useCallback(async (t) => {
        await ge(t)
      }, []),
      wa = o.useCallback(() => {
        s(ne())
        const t = setTimeout(() => {
          s(Le())
        }, 500)
        return () => {
          clearTimeout(t)
        }
      }, [s]),
      fa = o.useCallback(() => {
        s(ne())
      }, [s]),
      Ca = o.useCallback(
        (t) => {
          ;(U(!1), s(xe(t)))
        },
        [s],
      )
    ;(o.useEffect(() => {
      s(x ? K(B ? w.WITHDRAW_FORM : w.ENABLE_2FA) : K(w.WITHDRAW_FORM))
    }, [s, x, B]),
      o.useEffect(() => {
        m !== void 0 &&
          n !== void 0 &&
          s(
            Be({
              mfaWithdrawalEnabled: m,
              factorVerified: n,
            }),
          )
      }, [s, m, n]))
    const N = Va('--cashier-overlay-variant')
    ;(o.useEffect(() => {
      ;(c && R === te.WITHDRAW && _e.broadcast(De.WITHDRAWAL_OPEN, null),
        c &&
          R === te.DEPOSIT &&
          _e.broadcast(De.DEPOSIT_OPEN, {
            walletAddress: v == null ? void 0 : v.address,
          }))
    }, [c, R, v == null ? void 0 : v.address]),
      o.useEffect(() => {
        const t = new URLSearchParams(window.location.search),
          f = Qa.CashierOverlay,
          C = Za.CashierOverlay
        if (Te() && t.get(f)) {
          const W = t.has(C) ? parseInt(t.get(C)) : 0
          ;(s(Ue(W)),
            t.delete(f),
            t.delete(C),
            window.history.replaceState(
              null,
              '',
              decodeURIComponent(`${window.location.pathname}?${t}`),
            ))
        }
      }, [s]))
    const ee = o.useCallback(() => {
        var t, f, C
        s(
          ja({
            idv: oe[(t = l == null ? void 0 : l.kycIdv) == null ? void 0 : t.playerKycStatus],
            poa: oe[(f = l == null ? void 0 : l.kycPoa) == null ? void 0 : f.playerKycStatus],
            sof: oe[(C = l == null ? void 0 : l.kycSof) == null ? void 0 : C.playerKycStatus],
          }),
        )
      }, [
        s,
        (ye = l == null ? void 0 : l.kycIdv) == null ? void 0 : ye.playerKycStatus,
        (we = l == null ? void 0 : l.kycPoa) == null ? void 0 : we.playerKycStatus,
        (fe = l == null ? void 0 : l.kycSof) == null ? void 0 : fe.playerKycStatus,
      ]),
      Ae = M.brandKycIdvInterventions(),
      Oe = M.brandKycPoaInterventions(),
      Pe = M.brandKycSofInterventions()
    o.useEffect(() => {
      T && c && l != null && l.checkPlayerKycInfoUrl
        ? s(
            Ha({
              url: l.checkPlayerKycInfoUrl,
              updateDisplayKyc: !0,
              tab: R === te.WITHDRAW ? Fe.WITHDRAWAL : Fe.DEPOSIT,
              kycIdvInterventions: Ae,
              kycPoaInterventions: Oe,
              kycSofInterventions: Pe,
            }),
          ).then((t) => {
            ;(U(!0), t.error && ee())
          })
        : (c && U(!0), T && ee())
    }, [T, s, l == null ? void 0 : l.checkPlayerKycInfoUrl, R, c, ee, Ae, Oe, Pe])
    const ae = () =>
      y.jsx(tr, {
        kycIdvData: l.kycIdv,
        kycPoaData: l.kycPoa,
        kycSofData: l.kycSof,
        checkPlayerKycInfoUrl: l.checkPlayerKycInfoUrl,
        uploadFilesUrl: Ye,
      })
    return P && Te()
      ? y.jsx(La, {
          open: !!c,
          fullScreen: me,
          titlePosition: 'inline',
          handleClose: We,
          colorVariant: N,
          rootClasses: ca,
          contentClasses: ua,
          dialogTitle: E('CASHIER_DIALOG-TITLE'),
          noOverflow: !0,
          TransitionComponent: Ga,
          children: $e
            ? y.jsx('div', {
                className: ie.piq,
                children:
                  !Object.keys(a).length || !Object.keys(r).length
                    ? y.jsx(xa, {
                        variant: 'h4',
                        padding: '32px 0',
                        children: E('CASHIER_ERRORS_NO-CURRENCIES-CONFIGURED'),
                      })
                    : y.jsx(za, {
                        paymentIQData: Me,
                        balances: Ke,
                        stateBalances: Z,
                        currencies: qe,
                        colorVariant: 'light',
                        piqAmount: ta,
                      }),
              })
            : y.jsxs(Ja, {
                tabs: da,
                id: 'cashier-overlay-tabs',
                styleVariant: N,
                tabStringIndexValues: Ba.concat(),
                tabContentHeight: 'stretch',
                onChange: Ca,
                selectedTabIndex: R,
                children: [
                  F
                    ? z
                      ? y.jsx(ae, {})
                      : y.jsx(er, {
                          preferredFiatCurrency: Ie,
                          userActiveCurrency: b,
                          userActiveCurrencyNetwork: j,
                          address: Ze,
                          colorVariant: N,
                          depositLoader: Je,
                          depositCurrencies: a,
                          depositCurrencyOnChange: ia,
                          depositCurrencyNetworkOnChange: na,
                          fullscreen: me,
                          copyAddress: pa,
                          depositError: E(ea),
                          copyTag: ya,
                          tag: Ge,
                          walletConnectAccount: v,
                        })
                    : y.jsx(se, {}),
                  F
                    ? z
                      ? y.jsx(ae, {})
                      : y.jsx(ar, {
                          withdrawCurrencies: oa,
                          colorVariant: N,
                          withdrawableBalancesCrypto: Re.withdrawableBalancesCrypto,
                          withdrawableBalancesFiat: Re.withdrawableBalancesFiat,
                          userActiveCurrency: L || D,
                          preferredFiatCurrency: Ie,
                          submitHandler: la,
                          footerToggleHandler: sa,
                          withdrawError: aa,
                          withdrawLoader: ze,
                          footerToggleChecked: _,
                          successContinueHandler: wa,
                          errorContinueHandler: fa,
                          withdrawStep: X,
                          withdrawSuccess: ra,
                          profilePageRedirectUrl: A,
                          closeCashier: We,
                          cancelBonusesOnWithdrawal: O,
                        })
                    : y.jsx(se, {}),
                  S
                    ? F
                      ? z
                        ? y.jsx(ae, {})
                        : y.jsx(rr, {
                            provider: S,
                            getBuyCryptoProviderWalletsAsyncAction: Y,
                            useCashierBuyCryptoProviderWalletsErrors: jr,
                            useCashierBuyCryptoProviderWalletsLoader: Vr,
                            useCashierBuyCryptoProviderWallets: Fr,
                          })
                      : y.jsx(se, {})
                    : null,
                ],
              }),
        })
      : null
  }
export { $t as default }
