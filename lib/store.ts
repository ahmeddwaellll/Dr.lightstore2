import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Card, Account, Order, BoostConfig } from './constants';

interface AppState {
  // Cart & Orders
  cart: Array<{
    type: 'account' | 'boost';
    item: Account | BoostConfig;
    price: number;
  }>;
  orders: Order[];
  
  // Deck Builder
  selectedCards: Array<{
    cardId: string;
    level: number;
    evo: boolean;
  }>;
  
  // UI State
  isCheckoutOpen: boolean;
  selectedAccount: Account | null;
  
  // Actions
  addToCart: (type: 'account' | 'boost', item: Account | BoostConfig, price: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  addOrder: (order: Order) => void;
  toggleCheckout: () => void;
  setSelectedAccount: (account: Account | null) => void;
  addCardToDeck: (cardId: string, level: number, evo: boolean) => void;
  removeCardFromDeck: (cardId: string) => void;
  clearDeck: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      cart: [],
      orders: [],
      selectedCards: [],
      isCheckoutOpen: false,
      selectedAccount: null,
      
      // Actions
      addToCart: (type, item, price) => 
        set((state) => ({
          cart: [...state.cart, { type, item, price }]
        })),
      
      removeFromCart: (index) =>
        set((state) => ({
          cart: state.cart.filter((_, i) => i !== index)
        })),
      
      clearCart: () =>
        set({ cart: [] }),
      
      addOrder: (order) =>
        set((state) => ({
          orders: [...state.orders, order]
        })),
      
      toggleCheckout: () =>
        set((state) => ({
          isCheckoutOpen: !state.isCheckoutOpen
        })),
      
      setSelectedAccount: (account) =>
        set({ selectedAccount: account }),
      
      addCardToDeck: (cardId, level, evo) =>
        set((state) => {
          if (state.selectedCards.length >= 8) return state;
          const exists = state.selectedCards.find(c => c.cardId === cardId);
          if (exists) return state;
          return {
            selectedCards: [...state.selectedCards, { cardId, level, evo }]
          };
        }),
      
      removeCardFromDeck: (cardId) =>
        set((state) => ({
          selectedCards: state.selectedCards.filter(c => c.cardId !== cardId)
        })),
      
      clearDeck: () =>
        set({ selectedCards: [] }),
    }),
    {
      name: 'clash-royale-store',
      partialize: (state) => ({
        cart: state.cart,
        orders: state.orders,
        selectedCards: state.selectedCards
      })
    }
  )
);