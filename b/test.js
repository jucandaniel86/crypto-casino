import { r as l, D as s, h as P } from './index-BQXB1I3i.js'
import { a as $ } from './CgPwxXzi-B0_RiYkM.js'
const k = 'InputAtom-module_inputField_FsbEc',
  y = 'InputAtom-module_dark_wksQ0',
  F = 'InputAtom-module_light_Bs-At',
  L = 'InputAtom-module_multiline_ms7HO',
  v = 'InputAtom-module_singleline_AiHRx',
  S = 'InputAtom-module_withEndIcon_ZIA7A',
  j = 'InputAtom-module_withStartIcon_iypjL',
  C = 'InputAtom-module_ellipsis_hAStK',
  H = 'InputAtom-module_cursorPointer_uI0UL',
  M = 'InputAtom-module_disabled_uLUvZ',
  U = 'InputAtom-module_error_18JNb',
  t = {
    inputField: k,
    dark: y,
    light: F,
    multiline: L,
    singleline: v,
    withEndIcon: S,
    withStartIcon: j,
    ellipsis: C,
    cursorPointer: H,
    disabled: M,
    error: U,
  },
  Z = ({
    value: c = '',
    type: u = 'text',
    showPassword: _ = !1,
    startAdornment: n = null,
    endAdornment: r = null,
    classes: d = {
      root: '',
    },
    disabled: A = !1,
    onClick: I,
    onTouchEnd: h,
    colorVariant: e = 'dark',
    color: o,
    textEllipsis: m = !1,
    cursorPointer: a = !1,
    multiline: i = !1,
    maxLength: x,
    ...w
  }) => {
    const p = l.useMemo(() => ['primary', 'secondary'], []),
      g = l.useMemo(() => {
        const { root: E, ...f } = d
        return {
          root: `${t.inputField} ${i ? t.multiline : t.singleline} 
            ${n ? t.withStartIcon : ''} 
            ${r ? t.withEndIcon : ''}
            ${m ? t.ellipsis : ''}
            ${a ? t.cursorPointer : ''}
            ${t[e]}
            ${E}`,
          disabled: t.disabled,
          error: t.error,
          ...f,
        }
      }, [d, n, r, m, a, e, i]),
      b = l.useMemo(
        () =>
          o
            ? p.includes(o)
              ? s(`--palette-${o}-color`)
              : o
            : e === 'light'
              ? s('--input-light-text-color')
              : s('--input-text-color'),
        [o, p, e],
      )
    return P.jsx($, {
      value: c,
      classes: g,
      disabled: A,
      onClick: I,
      onTouchEnd: h,
      inputProps: {
        style: {
          color: b,
        },
        maxLength: x,
      },
      type: u === 'password' ? (_ ? 'text' : 'password') : u,
      startAdornment: n,
      endAdornment: r,
      multiline: i,
      ...w,
    })
  },
  R = l.memo(Z)
export { R as O }
