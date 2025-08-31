/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TabType } from '~/core/types/Game'

export const PROFILE_TABS: TabType[] = [
  {
    icon: '',
    label: 'Account Info',
    id: 'account-info',
    file: '',
  },
  {
    icon: '',
    label: 'Settings',
    id: 'settings',
    file: '',
  },
  {
    icon: '',
    label: 'Activity',
    id: 'activity',
    file: '',
  },
  {
    icon: '',
    label: 'Bonus History',
    id: 'bonus-history',
    file: '',
  },
]

export type ProfileActivityItem = {
  id: string
  label: string
  type: 'SELECT' | 'TIME'
  visible: boolean
  values?: any[]
  cols: number
}

export type ProfileActivityFilterT = {
  id: string
  label: string
  items: ProfileActivityItem[]
  fetchUrl: string
}

export const ProfileActivityFilters: ProfileActivityFilterT[] = [
  {
    id: 'transactions',
    label: 'Transactions',
    fetchUrl: '/json/responses/transactions.json',
    items: [
      {
        id: 'type',
        label: 'Type',
        type: 'SELECT',
        visible: true,
        cols: 6,
        values: [
          { label: 'All', value: '' },
          { label: 'Deposit', value: 'DEPOSIT' },
          { label: 'Withdrawal', value: 'WITHDRAWAL' },
          { label: 'Manual Deposit', value: 'MANUAL_DEPOSIT' },
          { label: 'Manual Deduction', value: 'MANUAL_WITHDRAWAL' },
        ],
      },
      {
        id: 'currency',
        label: 'Currency',
        type: 'SELECT',
        visible: true,
        cols: 6,
        values: [
          {
            label: 'USD',
            value: 'USD',
          },
          {
            label: 'EUR',
            value: 'EUR',
          },
          {
            label: 'CAD',
            value: 'CAD',
          },
          {
            label: 'DKK',
            value: 'DKK',
          },
          {
            label: 'NOK',
            value: 'NOK',
          },
          {
            label: 'PLN',
            value: 'PLN',
          },
          {
            label: 'BRL',
            value: 'BRL',
          },
          {
            label: 'NZD',
            value: 'NZD',
          },
          {
            label: 'JPY',
            value: 'JPY',
          },
        ],
      },
      {
        id: 'time',
        cols: 12,
        type: 'TIME',
        visible: true,
        label: '',
      },
    ],
  },
  {
    id: 'bets',
    label: 'Bets',
    fetchUrl: '/json/responses/bets.json',
    items: [
      {
        id: 'game',
        type: 'SELECT',
        visible: true,
        label: 'Game',
        cols: 6,
        values: [
          {
            label: 'All',
            value: '',
          },
        ],
      },
      {
        id: 'currency',
        label: 'Currency',
        type: 'SELECT',
        visible: true,
        cols: 6,
        values: [
          {
            label: 'USD',
            value: 'USD',
          },
          {
            label: 'EUR',
            value: 'EUR',
          },
          {
            label: 'CAD',
            value: 'CAD',
          },
          {
            label: 'DKK',
            value: 'DKK',
          },
          {
            label: 'NOK',
            value: 'NOK',
          },
          {
            label: 'PLN',
            value: 'PLN',
          },
          {
            label: 'BRL',
            value: 'BRL',
          },
          {
            label: 'NZD',
            value: 'NZD',
          },
          {
            label: 'JPY',
            value: 'JPY',
          },
        ],
      },
      {
        id: 'time',
        cols: 12,
        type: 'TIME',
        visible: true,
        label: '',
      },
    ],
  },
  //sports
  {
    id: 'sports',
    label: 'Sport Bets',
    fetchUrl: '/json/responses/sports.json',
    items: [
      {
        id: 'currency',
        label: 'Currency',
        type: 'SELECT',
        visible: true,
        cols: 12,
        values: [
          {
            label: 'USD',
            value: 'USD',
          },
          {
            label: 'EUR',
            value: 'EUR',
          },
          {
            label: 'CAD',
            value: 'CAD',
          },
          {
            label: 'DKK',
            value: 'DKK',
          },
          {
            label: 'NOK',
            value: 'NOK',
          },
          {
            label: 'PLN',
            value: 'PLN',
          },
          {
            label: 'BRL',
            value: 'BRL',
          },
          {
            label: 'NZD',
            value: 'NZD',
          },
          {
            label: 'JPY',
            value: 'JPY',
          },
        ],
      },
      {
        id: 'time',
        cols: 12,
        type: 'TIME',
        visible: true,
        label: '',
      },
    ],
  },
]

export const ProfileBonusFilters: ProfileActivityFilterT[] = [
  {
    id: 'history',
    label: 'History',
    fetchUrl: '/json/responses/history.json',
    items: [
      {
        id: 'type',
        label: 'Type',
        type: 'SELECT',
        visible: true,
        cols: 6,
        values: [
          { label: 'All', value: '' },
          { label: 'Deposit', value: 'DEPOSIT' },
          { label: 'Withdrawal', value: 'WITHDRAWAL' },
          { label: 'Manual Deposit', value: 'MANUAL_DEPOSIT' },
          { label: 'Manual Deduction', value: 'MANUAL_WITHDRAWAL' },
        ],
      },
      {
        id: 'currency',
        label: 'Currency',
        type: 'SELECT',
        visible: true,
        cols: 6,
        values: [
          {
            label: 'USD',
            value: 'USD',
          },
          {
            label: 'EUR',
            value: 'EUR',
          },
          {
            label: 'CAD',
            value: 'CAD',
          },
          {
            label: 'DKK',
            value: 'DKK',
          },
          {
            label: 'NOK',
            value: 'NOK',
          },
          {
            label: 'PLN',
            value: 'PLN',
          },
          {
            label: 'BRL',
            value: 'BRL',
          },
          {
            label: 'NZD',
            value: 'NZD',
          },
          {
            label: 'JPY',
            value: 'JPY',
          },
        ],
      },
      {
        id: 'time',
        cols: 12,
        type: 'TIME',
        visible: true,
        label: '',
      },
    ],
  },
]
