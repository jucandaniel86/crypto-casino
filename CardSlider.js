import { r, $ as G, d8 as I, h as p } from './index-DQ3ePjPQ.js'
import { M as z } from './Bmc_3Wym-BLO-Wy-2.js'
const K = 'CardSliderComponent-module_viewport_EIaax',
  Q = 'CardSliderComponent-module_prevArrow_aMCHR',
  Y = 'CardSliderComponent-module_nextArrow_zzUr4',
  Z = 'CardSliderComponent-module_defaultList_PxCHl',
  ee = 'CardSliderComponent-module_list_X-MWV',
  te = 'CardSliderComponent-module_dimmed_Jsxt3',
  d = {
    viewport: K,
    prevArrow: Q,
    nextArrow: Y,
    defaultList: Z,
    list: ee,
    dimmed: te,
  },
  $ = 1,
  re = ({
    loadMore: v,
    totalCount: M,
    portionsBeforeLoadMore: b,
    scrollingChanged: x,
    listClass: k,
    listItemClass: V,
    viewportClass: W,
    dimOutOfViewport: y,
    scrollToElementIndex: E = 0,
    scrollToFirstOnResize: _,
    children: o = [],
  }) => {
    const u = G(),
      UlElement = r.useRef(null),
      [l, O] = r.useState(0),
      [currentIndex, setCurrentIndex] = r.useState($),
      [B, P] = r.useState(0),
      [ArrowDisabled, setArrowDisabled] = r.useState(false),
      SliderContainer = r.useRef(null),
      T = r.useRef(true),
      g = r.useRef(false),
      f = I(),
      [A, H] = r.useState(o)
    ;(r.useEffect(() => {
      ArrowDisabled || H(o)
    }, [o, ArrowDisabled]),
      r.useEffect(() => {
        x && x(ArrowDisabled)
      }, [ArrowDisabled, x]))
    const L = r.useMemo(() => currentIndex + l, [currentIndex, l]),
      S = () => {
        const e = Number(
          getComputedStyle(UlElement.current).getPropertyValue('row-gap').slice(0, -2),
        )
        return isNaN(e) ? 0 : e
      },
      N = () => {
        var e, t
        if (
          (t = (e = UlElement.current) == null ? void 0 : e.children) != null &&
          t.length &&
          SliderContainer.current.clientWidth > 0
        ) {
          const s = Math.floor(
            SliderContainer.current.clientWidth /
              UlElement.current.children[0].getBoundingClientRect().width,
          )
          O(s)
        }
      },
      ScrollCallback = r.useCallback(() => {
        if (T.current && UlElement.current.children.length) {
          T.current = false
          const e = Number(
              getComputedStyle(UlElement.current).getPropertyValue('paddingLeft').slice(0, -2),
            ),
            t = E * UlElement.current.children[0].getBoundingClientRect().width + E * S() - e
          UlElement.current.scroll({
            left: t,
          })
          let s = 1
          for (const c of UlElement.current.children) {
            const w = c.getBoundingClientRect(),
              C = SliderContainer.current.getBoundingClientRect()
            if (w.left >= C.left && w.right <= C.right) break
            s++
          }
          ;(setCurrentIndex(s), N())
        }
      }, [E])
    ;(r.useEffect(() => {
      const e = new ResizeObserver(() => {
        SliderContainer.current && SliderContainer.current.clientWidth > 0 && ScrollCallback()
      })
      return (
        e.observe(SliderContainer.current),
        () => {
          e.disconnect()
        }
      )
    }, [ScrollCallback]),
      r.useEffect(() => {
        if (!u) {
          let e
          const t = () => {
            ;(e && clearTimeout(e),
              (e = setTimeout(() => {
                ;(N(),
                  _ &&
                    (UlElement.current.scroll({
                      left: 0,
                      behavior: 'smooth',
                    }),
                    setCurrentIndex(1)))
              }, 500)))
          }
          return (
            window.addEventListener('resize', t),
            () => {
              window.removeEventListener('resize', t)
            }
          )
        }
      }, [u, _]),
      r.useEffect(() => {
        let e, t
        const s = (w) => {
            const C = w.target.scrollLeft
            ;(e && clearTimeout(e),
              (e = setTimeout(() => {
                P(C)
                const q = UlElement.current.children[0].getBoundingClientRect().width,
                  D = 1 + Math.round(C / q)
                setCurrentIndex(D)
              }, 50)),
              t && clearTimeout(t),
              (t = setTimeout(() => {
                setArrowDisabled(false)
              }, 100)))
          },
          c = UlElement.current
        return (
          c.addEventListener('scroll', s),
          () => {
            c.removeEventListener('scroll', s)
          }
        )
      }, [u]),
      r.useEffect(() => {
        currentIndex !== $ && !(g != null && g.current) && (g.current = true)
      }, [currentIndex]),
      r.useEffect(() => {
        if (v && g != null && g.current) {
          const e = o.length - b * l
          o.length > 0 && o.length < M && L >= e && v()
        }
      }, [v, M, o.length, l, L, b]))
    const F = r.useMemo(() => !u && currentIndex > 1, [u, currentIndex]),
      J = r.useMemo(() => !u && o.length >= currentIndex + l, [u, l, currentIndex, o.length]),
      NextAction = () => {
        setArrowDisabled(true)
        const e = UlElement.current,
          t = UlElement.current.children[0].getBoundingClientRect().width,
          s =
            Math.round(B / t) * t +
            (l * UlElement.current.children[0].getBoundingClientRect().width + l * S()) *
              (f ? -1 : 1)
        ;(e.scroll({
          left: s,
          behavior: 'smooth',
        }),
          setCurrentIndex((c) => (c + l > o.length - l ? o.length - l + 1 : c + l)))
      },
      PrevAction = () => {
        setArrowDisabled(true)
        const e = UlElement.current,
          t = UlElement.current.children[0].getBoundingClientRect().width,
          s =
            Math.round(B / t) * t -
            (l * UlElement.current.children[0].getBoundingClientRect().width + l * S()) *
              (f ? -1 : 1)
        ;(e.scroll({
          left: s,
          behavior: 'smooth',
        }),
          setCurrentIndex((c) => (c - l <= 1 ? 1 : c - l)))
      }
    return p.jsxs('div', {
      ref: SliderContainer,
      className: `${d.viewport} ${W}`,
      children: [
        p.jsx('ul', {
          className: [k ?? d.defaultList, d.list].join(' '),
          ref: UlElement,
          children:
            A == null
              ? void 0
              : A.map((e, t) =>
                  p.jsx(
                    'li',
                    {
                      className: `${V ?? ''} ${y ? (u || (t >= currentIndex - 1 && t < currentIndex + l - 1) ? '' : d.dimmed) : ''}`,
                      children: e,
                    },
                    t,
                  ),
                ),
        }),
        F &&
          p.jsx(z, {
            onClick: PrevAction,
            disabled: ArrowDisabled,
            className: f ? d.nextArrow : d.prevArrow,
            orientation: f ? 'right' : 'left',
            variant: 'slide',
          }),
        J &&
          p.jsx(z, {
            onClick: NextAction,
            disabled: ArrowDisabled,
            className: f ? d.prevArrow : d.nextArrow,
            orientation: f ? 'left' : 'right',
            variant: 'slide',
          }),
      ],
    })
  },
  oe = r.memo(re)
export { oe as a }
