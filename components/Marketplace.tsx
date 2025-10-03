'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@/lib/store'
import { mockAccounts } from '@/lib/mockData'
import { formatPrice } from '@/lib/utils'
import { Account } from '@/lib/constants'

interface Filters {
  arena: string
  maxTrophies: string
  champions: string
  emotes: string
  towerSkins: string
  priceRange: [number, number]
}

export function Marketplace() {
  const [filters, setFilters] = useState<Filters>({
    arena: 'all',
    maxTrophies: 'all',
    champions: 'all',
    emotes: 'all',
    towerSkins: 'all',
    priceRange: [0, 500]
  })
  
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)
  const { addToCart } = useStore()
  
  const filteredAccounts = useMemo(() => {
    return mockAccounts.filter(account => {
      if (filters.arena !== 'all' && account.arena !== parseInt(filters.arena)) return false
      if (filters.champions !== 'all') {
        const champFilter = parseInt(filters.champions)
        if (champFilter === 0 && account.champions > 0) return false
        if (champFilter === 1 && account.champions < 1) return false
        if (champFilter === 2 && account.champions < 2) return false
        if (champFilter === 4 && account.champions < 4) return false
      }
      if (account.price < filters.priceRange[0] || account.price > filters.priceRange[1]) return false
      return true
    })
  }, [filters])
  
  const handleBuyNow = (account: Account) => {
    addToCart('account', account, account.price)
  }
  
  return (
    <section id="marketplace" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-primary/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Account Marketplace</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Browse our collection of premium Clash Royale accounts. Each account is verified and ready for instant delivery.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <select
              value={filters.arena}
              onChange={(e) => setFilters({ ...filters, arena: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Arenas</option>
              {[...Array(15)].map((_, i) => (
                <option key={i + 1} value={i + 1}>Arena {i + 1}</option>
              ))}
            </select>
            
            <select
              value={filters.champions}
              onChange={(e) => setFilters({ ...filters, champions: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Champions</option>
              <option value="0">No Champions</option>
              <option value="1">1+ Champions</option>
              <option value="2">2+ Champions</option>
              <option value="4">4 Champions</option>
            </select>
            
            <select
              value={filters.emotes}
              onChange={(e) => setFilters({ ...filters, emotes: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Emotes</option>
              <option value="50">50+ Emotes</option>
              <option value="100">100+ Emotes</option>
            </select>
            
            <select
              value={filters.towerSkins}
              onChange={(e) => setFilters({ ...filters, towerSkins: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Skins</option>
              <option value="10">10+ Skins</option>
              <option value="20">20+ Skins</option>
            </select>
            
            <div className="col-span-2 md:col-span-1">
              <input
                type="range"
                min="0"
                max="500"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-white/70 mt-1">Max: ${filters.priceRange[1]}</div>
            </div>
          </div>
        </motion.div>
        
        {/* Account Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredAccounts.map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 hover:shadow-glow transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAccount(account)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{account.name}</h3>
                  <div className="flex gap-2">
                    {account.maxDeck && (
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        Max Deck
                      </span>
                    )}
                    {account.starLevel3 && (
                      <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full">
                        Star 3
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-white/60">Trophies</span>
                    <div className="text-white font-bold">{account.trophies.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Max Trophies</span>
                    <div className="text-white font-bold">{account.maxTrophies.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Arena</span>
                    <div className="text-white font-bold">{account.arena}</div>
                  </div>
                  <div>
                    <span className="text-white/60">League</span>
                    <div className="text-white font-bold">{account.league}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Champions</span>
                    <div className="text-white font-bold">{account.champions}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Emotes</span>
                    <div className="text-white font-bold">{account.emotes}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold gradient-text">
                    {formatPrice(account.price)}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleBuyNow(account)
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium glow-button"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredAccounts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No accounts found</h3>
            <p className="text-white/60">Try adjusting your filters to see more results.</p>
          </motion.div>
        )}
      </div>
      
      {/* Account Detail Modal */}
      <AnimatePresence>
        {selectedAccount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAccount(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-white">{selectedAccount.name}</h2>
                  <button
                    onClick={() => setSelectedAccount(null)}
                    className="text-white/60 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="glass-card p-4">
                    <div className="text-white/60 text-sm">Current Trophies</div>
                    <div className="text-2xl font-bold text-white">{selectedAccount.trophies.toLocaleString()}</div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-white/60 text-sm">Max Trophies</div>
                    <div className="text-2xl font-bold text-white">{selectedAccount.maxTrophies.toLocaleString()}</div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-white/60 text-sm">Arena</div>
                    <div className="text-2xl font-bold text-white">{selectedAccount.arena}</div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-white/60 text-sm">League</div>
                    <div className="text-2xl font-bold text-white">{selectedAccount.league}</div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-white/60 text-sm">Champions</div>
                    <div className="text-2xl font-bold text-white">{selectedAccount.champions}</div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-white/60 text-sm">Emotes</div>
                    <div className="text-2xl font-bold text-white">{selectedAccount.emotes}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4">Card Collection</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {selectedAccount.cards.map((card) => (
                      <div key={card.cardId} className="glass-card p-2 text-center">
                        <div className="text-xs text-white/60">Level {card.level}</div>
                        <div className="text-sm font-bold text-white">{card.cardId.replace('-', ' ')}</div>
                        {card.evolution && (
                          <div className="text-xs text-primary">Evo ✨</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold gradient-text">
                    {formatPrice(selectedAccount.price)}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleBuyNow(selectedAccount)
                      setSelectedAccount(null)
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-lg glow-button"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}