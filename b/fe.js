const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'static/index-C36Lp-s9-XOXBRprS.js',
      'static/index-BQXB1I3i.js',
      'static/index-Kjxpn7dk.css',
      'static/index-CjogDlxN.js',
      'static/ChainAdapterBlueprint-gEIXbkEo.js',
      'static/index-iBA7828I.js',
      'static/index-nibyPLVP.js',
    ]),
) => i.map((i) => d[i])
import { r as d, bc as m } from './index-BQXB1I3i.js'
const _ = '2.36.0'
let u = {
  getDocsUrl: ({ docsBaseUrl: i, docsPath: e = '', docsSlug: t }) =>
    e ? `${i ?? 'https://viem.sh'}${e}${t ? `#${t}` : ''}` : void 0,
  version: `viem@${_}`,
}
class p extends Error {
  constructor(e, t = {}) {
    var a
    const n = (() => {
        var l
        return t.cause instanceof p
          ? t.cause.details
          : (l = t.cause) != null && l.message
            ? t.cause.message
            : t.details
      })(),
      s = (t.cause instanceof p && t.cause.docsPath) || t.docsPath,
      r =
        (a = u.getDocsUrl) == null
          ? void 0
          : a.call(u, {
              ...t,
              docsPath: s,
            }),
      o = [
        e || 'An error occurred.',
        '',
        ...(t.metaMessages ? [...t.metaMessages, ''] : []),
        ...(r ? [`Docs: ${r}`] : []),
        ...(n ? [`Details: ${n}`] : []),
        ...(u.version ? [`Version: ${u.version}`] : []),
      ].join(`
`)
    ;(super(
      o,
      t.cause
        ? {
            cause: t.cause,
          }
        : void 0,
    ),
      Object.defineProperty(this, 'details', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'docsPath', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'metaMessages', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'shortMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'version', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'BaseError',
      }),
      (this.details = n),
      (this.docsPath = s),
      (this.metaMessages = t.metaMessages),
      (this.name = t.name ?? this.name),
      (this.shortMessage = e),
      (this.version = _))
  }
  walk(e) {
    return y(this, e)
  }
}
function y(i, e) {
  return e != null && e(i)
    ? i
    : i && typeof i == 'object' && 'cause' in i && i.cause !== void 0
      ? y(i.cause, e)
      : e
        ? null
        : i
}
const C = {
    gwei: 9,
    wei: 18,
  },
  D = {
    ether: -9,
    wei: 9,
  },
  M = {
    ether: -18,
    gwei: -9,
  }
function f(i) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...i,
  }
}
class I extends p {
  constructor({ value: e }) {
    super(`Number \`${e}\` is not a valid decimal number.`, {
      name: 'InvalidDecimalNumberError',
    })
  }
}
function S(i, e) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(i))
    throw new I({
      value: i,
    })
  let [t, a = '0'] = i.split('.')
  const n = t.startsWith('-')
  if ((n && (t = t.slice(1)), (a = a.replace(/(0+)$/, '')), e === 0))
    (Math.round(+`.${a}`) === 1 && (t = `${BigInt(t) + 1n}`), (a = ''))
  else if (a.length > e) {
    const [s, r, o] = [a.slice(0, e - 1), a.slice(e - 1, e), a.slice(e)],
      l = Math.round(+`${r}.${o}`)
    ;(l > 9 ? (a = `${BigInt(s) + BigInt(1)}0`.padStart(s.length + 1, '0')) : (a = `${s}${l}`),
      a.length > e && ((a = a.slice(1)), (t = `${BigInt(t) + 1n}`)),
      (a = a.slice(0, e)))
  } else a = a.padEnd(e, '0')
  return BigInt(`${n ? '-' : ''}${t}${a}`)
}
function b(i, e = 'wei') {
  return S(i, C[e])
}
const U = f({
    id: 42161,
    name: 'Arbitrum One',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockTime: 250,
    rpcUrls: {
      default: {
        http: ['https://arb1.arbitrum.io/rpc'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Arbiscan',
        url: 'https://arbiscan.io',
        apiUrl: 'https://api.arbiscan.io/api',
      },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 7654707,
      },
    },
  }),
  k = f({
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockTime: 12e3,
    rpcUrls: {
      default: {
        http: ['https://eth.merkle.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: 'https://etherscan.io',
        apiUrl: 'https://api.etherscan.io/api',
      },
    },
    contracts: {
      ensUniversalResolver: {
        address: '0xeeeeeeee14d718c2b47d9923deab1335e144eeee',
        blockCreated: 23085558,
      },
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 14353601,
      },
    },
  }),
  E = f({
    id: 11155111,
    name: 'Sepolia',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://sepolia.drpc.org'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: 'https://sepolia.etherscan.io',
        apiUrl: 'https://api-sepolia.etherscan.io/api',
      },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 751532,
      },
      ensUniversalResolver: {
        address: '0xeeeeeeee14d718c2b47d9923deab1335e144eeee',
        blockCreated: 8928790,
      },
    },
    testnet: !0,
  })
function c(i) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...i,
  }
}
c({
  id: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
  name: 'Solana',
  network: 'solana-mainnet',
  nativeCurrency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.walletconnect.org/v1'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Solscan',
      url: 'https://solscan.io',
    },
  },
  testnet: !1,
  chainNamespace: 'solana',
  caipNetworkId: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
  deprecatedCaipNetworkId: 'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ',
})
c({
  id: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
  name: 'Solana Devnet',
  network: 'solana-devnet',
  nativeCurrency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.walletconnect.org/v1'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Solscan',
      url: 'https://solscan.io',
    },
  },
  testnet: !0,
  chainNamespace: 'solana',
  caipNetworkId: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
  deprecatedCaipNetworkId: 'solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K',
})
c({
  id: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
  name: 'Solana Testnet',
  network: 'solana-testnet',
  nativeCurrency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.walletconnect.org/v1'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Solscan',
      url: 'https://solscan.io',
    },
  },
  testnet: !0,
  chainNamespace: 'solana',
  caipNetworkId: 'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
})
c({
  id: '000000000019d6689c085ae165831e93',
  caipNetworkId: 'bip122:000000000019d6689c085ae165831e93',
  chainNamespace: 'bip122',
  name: 'Bitcoin',
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 8,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.walletconnect.org/v1'],
    },
  },
})
c({
  id: '000000000933ea01ad0ee984209779ba',
  caipNetworkId: 'bip122:000000000933ea01ad0ee984209779ba',
  chainNamespace: 'bip122',
  name: 'Bitcoin Testnet',
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 8,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.walletconnect.org/v1'],
    },
  },
  testnet: !0,
})
c({
  id: '00000008819873e925422c1ff0f99f7c',
  caipNetworkId: 'bip122:00000008819873e925422c1ff0f99f7c',
  chainNamespace: 'bip122',
  name: 'Bitcoin Signet',
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 8,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.walletconnect.org/v1'],
    },
  },
  testnet: !0,
})
const {
    projectId: h,
    name: x,
    description: A,
    url: T,
    icons: $,
    demoDeposit: g,
    featuredWalletIds: B,
  } = window.env.WALLET_CONNECT || {},
  v = {
    name: x,
    description: A,
    url: T,
    icons: $,
    featuredWalletIds: B,
  },
  N = [k, U, E]
class w {
  constructor() {
    ;((this._initializing = !1),
      (this.initialized = !1),
      h && ((this._demo = g), (this._chain = g ? E : k)))
  }
  static getInstance() {
    return h ? (this._instance || (this._instance = new w()), this._instance) : null
  }
  async init() {
    if (!(this.initialized || this._initializing)) {
      if (
        ((this._initializing = !0),
        this._wagmi ||
          (this._wagmi = await m(
            () => import('./index-C36Lp-s9-XOXBRprS.js'),
            __vite__mapDeps([0, 1, 2]),
          ).then((e) => e.h)),
        !this._adapter)
      ) {
        const { WagmiAdapter: e } = await m(
          async () => {
            const { WagmiAdapter: t } = await import('./index-CjogDlxN.js').then((a) => a.bp)
            return {
              WagmiAdapter: t,
            }
          },
          __vite__mapDeps([3, 4, 1, 2]),
        )
        this._adapter = new e({
          projectId: h,
          networks: N,
        })
      }
      if (
        (this.config ||
          ((this.config = this._adapter.wagmiConfig), await this._wagmi.reconnect(this.config)),
        !this._modal)
      ) {
        const { createAppKit: e } = await m(
          async () => {
            const { createAppKit: t } = await import('./index-iBA7828I.js').then((a) => a.k)
            return {
              createAppKit: t,
            }
          },
          __vite__mapDeps([5, 1, 2, 4, 6]),
        )
        this._modal = e({
          adapters: [this._adapter],
          networks: [this._chain],
          metadata: v,
          projectId: h,
          themeVariables: {
            '--w3m-z-index': 99999999,
          },
          featuredWalletIds: v.featuredWalletIds,
          features: {
            analytics: !0,
            email: !1,
            socials: !1,
            swaps: !1,
            send: !1,
            history: !1,
            onramp: !1,
          },
        })
      }
      ;((this._initializing = !1), (this.initialized = !0))
    }
  }
  async fetchBalance(e) {
    return (
      await this.init(),
      this._wagmi.getBalance(this.config, {
        address: e,
      })
    )
  }
  async switchChain() {
    if ((await this.init(), (await this.getAccount()).chainId !== this._chain.id))
      return this._wagmi.switchChain(this.config, {
        chainId: this._chain.id,
      })
  }
  async sendTransaction({ address: e, amount: t }) {
    var a, n
    await this.init()
    const s = await this._wagmi.estimateGas(this.config, {
        to: e,
        value: b(t),
        chainId: (a = this._chain) == null ? void 0 : a.id,
        data: '0x',
      }),
      r = await this._wagmi.sendTransaction(this.config, {
        to: e,
        value: b(t),
        chainId: (n = this._chain) == null ? void 0 : n.id,
        data: '0x',
        gas: s,
      })
    return await this._wagmi.waitForTransactionReceipt(this.config, {
      hash: r,
    })
  }
  isDemo() {
    return this._demo
  }
  async watchAccount(e) {
    return (
      await this.init(),
      this._wagmi.watchAccount(this.config, {
        onChange: (t) => e(t),
      })
    )
  }
  async getAccount() {
    return (await this.init(), this._wagmi.getAccount(this.config))
  }
  async disconnect() {
    if ((await this.init(), this._modal && this.config)) return this._wagmi.disconnect(this.config)
  }
  async reconnect() {
    await this.init()
  }
  async connect() {
    ;(await this.init(), this._modal.open())
  }
  async signMessage(e) {
    ;(await this.init(), await this.switchChain())
    const t = await this._wagmi.signMessage(this.config, {
      message: e,
      account: void 0,
    })
    return (this._modal.close(), t)
  }
  async subscribeState(e) {
    ;(await this.init(), this._modal.subscribeState((t) => (e == null ? void 0 : e(t))))
  }
}
const P = w.getInstance()
function j() {
  return P
}
function O() {
  const i = j(),
    [e, t] = d.useState(null),
    [a, n] = d.useState(null)
  return (
    d.useEffect(() => {
      if (!i) return
      let s
      return (
        (async () => {
          const r = await i.getAccount()
          ;(n(r), (s = await i.watchAccount((o) => n(o))))
        })(),
        () => {
          s && s()
        }
      )
    }, [i]),
    d.useEffect(() => {
      i &&
        a != null &&
        a.isConnected &&
        a != null &&
        a.address &&
        i.fetchBalance(a.address).then((s) => t(s))
    }, [a, i]),
    {
      account: a,
      balance: e,
    }
  )
}
export { M as D, C as E, D as P, O as W, p as d, j }
