'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'
import { LEAGUES, getLeagueIndex } from '@/lib/constants'

export function CheckoutDrawer() {
  const { isCheckoutOpen, toggleCheckout, cart, removeFromCart, clearCart } = useStore()
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
  
  const getItemName = (item: any) => {
    if (item.type === 'account') {
      return item.item.name
    } else {
      const boost = item.item
      if (boost.type === 'trophies') {
        return `Trophy Boost (${boost.currentTrophies}-${boost.targetTrophies})`
      } else {
        return `League Boost (${boost.currentLeague}-${boost.targetLeague})`
      }
    }
  }
  
  const getItemDetails = (item: any) => {
    if (item.type === 'account') {
      const account = item.item
      return `${account.trophies.toLocaleString()} trophies, ${account.champions} champions`
    } else {
      const boost = item.item
      if (boost.express) {
        return 'Express 24h delivery'
      }
      return 'Standard delivery'
    }
  }
  
  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={toggleCheckout}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-dark border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Checkout</h2>
                <button
                  onClick={toggleCheckout}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
                  <p className="text-white/60">Add some items to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass-card p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-white">{getItemName(item)}</h3>
                          <p className="text-sm text-white/60">{getItemDetails(item)}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-white/40 hover:text-red-400 transition-colors ml-4"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold gradient-text">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-white/10 p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Processing Fee</span>
                    <span>{formatPrice(0)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white border-t border-white/10 pt-4">
                    <span>Total</span>
                    <span className="gradient-text">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-lg glow-button mb-3"
                >
                  Proceed to Payment
                </motion.button>
                
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  Clear Cart
                </button>
                
                <div className="mt-4 text-center">
                  <div className="text-xs text-white/40">
                    🔒 Secure payment with Stripe
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}