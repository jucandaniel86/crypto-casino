import {
  r as i,
  c as Q,
  ao as Y,
  c8 as Z,
  h as a,
  _ as ee,
  b5 as ae,
  s as D,
  a9 as g,
  aa as S,
  Q as _,
  c9 as z,
  aw as te,
  ax as ne,
  ay as W,
  aA as A,
  aB as le,
  ca as oe,
  K as v,
  aC as H,
  aD as re,
  bj as ie,
  cb as $,
  cc as V,
  aF as se,
  aE as ce,
} from './index-BQXB1I3i.js'
import { f as de, v as ue } from './DvgpvASn-8IyA9FCi.js'
import { k as me } from './Dhpf7QZy-TTL0LgTw.js'
import { y as Ce } from './C3v6mQTU-DFWvzp9a.js'
import { W as pe, j as fe } from './index-34SRLpzw-DkiFU858.js'
import { j as he } from './BLJg9Jyq-DXcLBxlj.js'
import { j as ve } from './DodOFLJr-BwOQj346.js'
import { J as xe } from './D7TU_N_8-BoVKmCI4.js'
function Ee(e) {
  return ce('MuiAlert', e)
}
const P = se('MuiAlert', [
    'root',
    'action',
    'icon',
    'message',
    'filled',
    'filledSuccess',
    'filledInfo',
    'filledWarning',
    'filledError',
    'outlined',
    'outlinedSuccess',
    'outlinedInfo',
    'outlinedWarning',
    'outlinedError',
    'standard',
    'standardSuccess',
    'standardInfo',
    'standardWarning',
    'standardError',
  ]),
  Le = v(
    a.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
    'SuccessOutlined',
  ),
  Te = v(
    a.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
    'ReportProblemOutlined',
  ),
  ge = v(
    a.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'ErrorOutline',
  ),
  Se = v(
    a.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
    'InfoOutlined',
  ),
  Ae = v(
    a.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close',
  )
var w
const Ne = [
    'action',
    'children',
    'className',
    'closeText',
    'color',
    'icon',
    'iconMapping',
    'onClose',
    'role',
    'severity',
    'variant',
  ],
  je = (e) => {
    const { variant: n, color: o, severity: d, classes: l } = e,
      u = {
        root: ['root', `${n}${H(o || d)}`, `${n}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      }
    return re(u, Ee, l)
  },
  be = A(ie, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, n) => {
      const { ownerState: o } = e
      return [n.root, n[o.variant], n[`${o.variant}${H(o.color || o.severity)}`]]
    },
  })(({ theme: e, ownerState: n }) => {
    const o = e.palette.mode === 'light' ? $ : V,
      d = e.palette.mode === 'light' ? V : $,
      l = n.color || n.severity
    return W(
      {},
      e.typography.body2,
      {
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
      },
      l &&
        n.variant === 'standard' && {
          color: o(e.palette[l].light, 0.6),
          backgroundColor: d(e.palette[l].light, 0.9),
          [`& .${P.icon}`]: {
            color: e.palette.mode === 'dark' ? e.palette[l].main : e.palette[l].light,
          },
        },
      l &&
        n.variant === 'outlined' && {
          color: o(e.palette[l].light, 0.6),
          border: `1px solid ${e.palette[l].light}`,
          [`& .${P.icon}`]: {
            color: e.palette.mode === 'dark' ? e.palette[l].main : e.palette[l].light,
          },
        },
      l &&
        n.variant === 'filled' && {
          color: '#fff',
          fontWeight: e.typography.fontWeightMedium,
          backgroundColor: e.palette.mode === 'dark' ? e.palette[l].dark : e.palette[l].main,
        },
    )
  }),
  Oe = A('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (e, n) => n.icon,
  })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  Me = A('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (e, n) => n.message,
  })({
    padding: '8px 0',
  }),
  R = A('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (e, n) => n.action,
  })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  F = {
    success: a.jsx(Le, {
      fontSize: 'inherit',
    }),
    warning: a.jsx(Te, {
      fontSize: 'inherit',
    }),
    error: a.jsx(ge, {
      fontSize: 'inherit',
    }),
    info: a.jsx(Se, {
      fontSize: 'inherit',
    }),
  },
  ye = i.forwardRef(function (e, n) {
    const o = te({
        props: e,
        name: 'MuiAlert',
      }),
      {
        action: d,
        children: l,
        className: u,
        closeText: f = 'Close',
        color: N,
        icon: x,
        iconMapping: j = F,
        onClose: E,
        role: b = 'alert',
        severity: h = 'success',
        variant: O = 'standard',
      } = o,
      L = ne(o, Ne),
      m = W({}, o, {
        color: N,
        severity: h,
        variant: O,
      }),
      C = je(m)
    return a.jsxs(
      be,
      W(
        {
          role: b,
          elevation: 0,
          ownerState: m,
          className: le(C.root, u),
          ref: n,
        },
        L,
        {
          children: [
            x !== !1
              ? a.jsx(Oe, {
                  ownerState: m,
                  className: C.icon,
                  children: x || j[h] || F[h],
                })
              : null,
            a.jsx(Me, {
              ownerState: m,
              className: C.message,
              children: l,
            }),
            d != null
              ? a.jsx(R, {
                  className: C.action,
                  children: d,
                })
              : null,
            d == null && E
              ? a.jsx(R, {
                  ownerState: m,
                  className: C.action,
                  children: a.jsx(oe, {
                    size: 'small',
                    'aria-label': f,
                    title: f,
                    color: 'inherit',
                    onClick: E,
                    children:
                      w ||
                      (w = a.jsx(Ae, {
                        fontSize: 'small',
                      })),
                  }),
                })
              : null,
          ],
        },
      ),
    )
  }),
  Ie = ({ severity: e, children: n }) =>
    a.jsx(ye, {
      variant: 'filled',
      severity: e,
      children: n,
    }),
  _e = i.memo(Ie),
  We = ({
    colorVariant: e = 'dark',
    address: n,
    currency: o,
    fiatCurrencySymbol: d,
    fiatCurrencyPrecision: l = 0,
    minAmount: u,
    onCancel: f,
    title: N = 'WALLET-CONNECT_DEPOSIT_TITLE',
    connectedLabel: x = 'WALLET-CONNECT_DEPOSIT_CONNECTED',
    addressLabel: j = 'WALLET-CONNECT_DEPOSIT_ADDRESS-LABEL',
    maxLabel: E = 'WALLET-CONNECT_DEPOSIT_MAX',
    depositLabel: b = 'WALLET-CONNECT_DEPOSIT_DEPOSIT',
    waitingForSignatureLabel: h = 'WALLET-CONNECT_DEPOSIT_WAITING-FOR-SIGNATURE',
    backLabel: O = 'WALLET-CONNECT_DEPOSIT_BACK',
    insufficientFundsLabel: L = 'WALLET-CONNECT_DEPOSIT_INSUFFICIENT-FUNDS',
    minAmountLabel: m = 'WALLET-CONNECT_DEPOSIT_MIN-AMOUNT',
    walletBalanceLabel: C = 'WALLET-CONNECT_DEPOSIT_WALLET-BALANCE',
    amountLabel: B = 'WALLET-CONNECT_DEPOSIT_AMOUNT',
  }) => {
    const { t: s } = Q(),
      U = i.useMemo(() => Y(e), [e]),
      p = fe(),
      { account: t, balance: r } = pe(),
      [M, k] = i.useState(!1),
      [c, y] = i.useState(
        t != null && t.isConnected
          ? Math.min(Number(u), Number((r == null ? void 0 : r.formatted) ?? 0)).toString()
          : '0',
      ),
      [G, J] = i.useState(!1),
      K = i.useMemo(() => Z(c ? +c * (o == null ? void 0 : o.rate) : 0, !0, l), [o.rate, l, c])
    i.useEffect(() => {
      r && y(u)
    }, [r, u])
    const I = i.useMemo(
        () =>
          !t ||
          !(t != null && t.isConnected) ||
          (t != null && t.isConnecting) ||
          (t != null && t.isReconnecting) ||
          !r ||
          !c
            ? null
            : c < u
              ? s(m, {
                  amount: u,
                })
              : c > (r == null ? void 0 : r.formatted)
                ? s(L)
                : null,
        [c, u, r, t, s, L, m],
      ),
      X = i.useCallback(() => {
        ;(k(!0),
          p
            .sendTransaction({
              address: n,
              amount: c,
            })
            .then(
              (T) => {
                ;(T == null ? void 0 : T.status) === 'success' && J(!0)
              },
              () => {
                k(!1)
              },
            ))
      }, [n, c, p]),
      q = i.useMemo(
        () => (t != null && t.address ? `${t.address.slice(0, 5)}...${t.address.slice(-4)}` : null),
        [t == null ? void 0 : t.address],
      )
    return (
      i.useEffect(() => {
        t != null &&
          t.isConnected &&
          ee.broadcast(ae.WALLET_CONNECT_SUCCESS, {
            walletAddress: t == null ? void 0 : t.address,
          })
      }, [t == null ? void 0 : t.isConnected, t == null ? void 0 : t.address]),
      G
        ? a.jsx(Ce, {
            colorVariant: e,
            title: 'COMMON_TRANSACTION_SUCCESS_DEPOSIT-TEXT',
            description: `${c} ${o.code}`,
            onClick: f,
          })
        : a.jsxs(he, {
            alignItems: 'center',
            gap: '16px',
            children: [
              p.isDemo() &&
                a.jsx(_e, {
                  severity: 'warning',
                  children: 'DEMO mode! All transactions will be sent on the Sepolia Test Network.',
                }),
              a.jsxs(D, {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                children: [
                  a.jsx(g, {
                    colorVariant: S(e),
                    variant: 'h5',
                    children: s(N),
                  }),
                  a.jsx(de, {
                    colorVariant: e,
                  }),
                ],
              }),
              (t == null ? void 0 : t.isConnected) &&
                a.jsxs(g, {
                  variant: 'caption',
                  colorVariant: S(e),
                  children: [
                    s(x),
                    ' ',
                    a.jsx(ve, {
                      size: 14,
                      color: U.palette.custom.success,
                    }),
                  ],
                }),
              (t == null ? void 0 : t.isConnected) &&
                a.jsxs(a.Fragment, {
                  children: [
                    a.jsx(_, {
                      color: 'secondary',
                      value: q,
                      colorVariant: e,
                      onClick: () => p.connect(),
                    }),
                    a.jsx(me, {
                      value: s(C),
                      fullWidth: !0,
                      endIcon: r
                        ? a.jsxs(g, {
                            variant: 'h6',
                            colorVariant: S(e),
                            children: [
                              r == null ? void 0 : r.formatted.slice(0, 7),
                              ' ',
                              r == null ? void 0 : r.symbol,
                            ],
                          })
                        : a.jsx(z, {
                            size: 14,
                          }),
                      colorVariant: e,
                      disabled: !0,
                    }),
                  ],
                }),
              !(t != null && t.isConnected) &&
                !(t != null && t.isReconnecting) &&
                a.jsx(ue, {
                  colorVariant: e,
                  onClick: () => p.disconnect().then(() => p.connect()),
                }),
              a.jsx(xe, {
                currency: o,
                fullWidth: !0,
                disabled: M || !(t != null && t.isConnected),
                buttonLabel: s(E),
                amountCalculatedValue: d ? d + K.toString() : '',
                inputButtonAmountHandler: () => y((r == null ? void 0 : r.formatted) ?? '0'),
                value: r ? c : '',
                label: s(B),
                inputLabelVariant: e,
                onChange: (T) => y(T.target.value ?? '0'),
                error: !!I,
                errorText: I,
              }),
              a.jsx(g, {
                colorVariant: S(e),
                variant: 'caption',
                children: s(j, {
                  address: n,
                }),
              }),
              a.jsx(_, {
                fullWidth: !0,
                colorVariant: e,
                value: M
                  ? a.jsxs(D, {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      children: [
                        a.jsx(z, {
                          size: 16,
                        }),
                        s(h),
                      ],
                    })
                  : s(b),
                disabled: M || !(t != null && t.isConnected) || !!I,
                onClick: X,
              }),
              a.jsx(_, {
                fullWidth: !0,
                color: 'secondary',
                value: s(O),
                onClick: f,
                colorVariant: e,
              }),
            ],
          })
    )
  },
  Fe = i.memo(We)
export { Fe as J }
