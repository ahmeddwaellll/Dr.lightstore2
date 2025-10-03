'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@/lib/store'
import { allCards } from '@/lib/mockData'
import { Card } from '@/lib/constants'

export function DeckBuilder() {
  const [filter, setFilter] = useState<'all' | 'non-evo' | 'evo'>('all')
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const [cardLevel, setCardLevel] = useState(14)
  const [hasEvolution, setHasEvolution] = useState(false)
  
  const { selectedCards, addCardToDeck, removeCardFromDeck, clearDeck } = useStore()
  
  const filteredCards = useMemo(() => {
    return allCards.filter(card => {
      if (filter === 'non-evo' && card.hasEvolution) return false
      if (filter === 'evo' && !card.hasEvolution) return false
      return true
    })
  }, [filter])
  
  const handleAddCard = (card: Card) => {
    if (selectedCards.length >= 8) return
    const exists = selectedCards.find(c => c.cardId === card.id)
    if (exists) return
    
    setSelectedCard(card)
    setCardLevel(14)
    setHasEvolution(card.hasEvolution)
  }
  
  const confirmAddCard = () => {
    if (selectedCard) {
      addCardToDeck(selectedCard.id, cardLevel, hasEvolution)
      setSelectedCard(null)
    }
  }
  
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400'
      case 'rare': return 'border-blue-400'
      case 'epic': return 'border-purple-400'
      case 'legendary': return 'border-yellow-400'
      case 'champion': return 'border-red-400'
      default: return 'border-gray-400'
    }
  }
  
  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-400/20'
      case 'rare': return 'bg-blue-400/20'
      case 'epic': return 'bg-purple-400/20'
      case 'legendary': return 'bg-yellow-400/20'
      case 'champion': return 'bg-red-400/20'
      default: return 'bg-gray-400/20'
    }
  }
  
  return (
    <section id="deck-builder" className="section-padding relative">
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
            <span className="gradient-text">Deck Builder</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Select your perfect 8-card deck with levels and evolutions. Build the ultimate strategy for your boost.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Selected Deck */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4">Your Deck</h3>
              <div className="text-sm text-white/60 mb-4">
                {selectedCards.length}/8 cards selected
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Array.from({ length: 8 }).map((_, index) => {
                  const card = selectedCards[index]
                  return (
                    <div
                      key={index}
                      className="aspect-square glass-card flex items-center justify-center relative"
                    >
                      {card ? (
                        <>
                          <div className="text-center">
                            <div className="text-xs font-bold text-white">
                              {allCards.find(c => c.id === card.cardId)?.name || 'Unknown'}
                            </div>
                            <div className="text-xs text-white/60">Lv.{card.level}</div>
                            {card.evo && (
                              <div className="text-xs text-primary">✨</div>
                            )}
                          </div>
                          <button
                            onClick={() => removeCardFromDeck(card.cardId)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"
                          >
                            ×
                          </button>
                        </>
                      ) : (
                        <div className="text-white/30 text-2xl">+</div>
                      )}
                    </div>
                  )
                })}
              </div>
              
              {selectedCards.length > 0 && (
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-white/60">
                    Average Level: {(selectedCards.reduce((sum, card) => sum + card.level, 0) / selectedCards.length).toFixed(1)}
                  </div>
                  <div className="text-sm text-white/60">
                    Evolutions: {selectedCards.filter(card => card.evo).length}
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={selectedCards.length === 0}
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Deck
                </motion.button>
                
                <button
                  onClick={clearDeck}
                  className="w-full py-2 text-white/60 hover:text-white transition-colors"
                >
                  Clear Deck
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Card Selection */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'glass-card hover:bg-white/10'
                  }`}
                >
                  All Cards
                </button>
                <button
                  onClick={() => setFilter('non-evo')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'non-evo'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'glass-card hover:bg-white/10'
                  }`}
                >
                  Non-Evo
                </button>
                <button
                  onClick={() => setFilter('evo')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'evo'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'glass-card hover:bg-white/10'
                  }`}
                >
                  Evolution
                </button>
              </div>
              
              {/* Card Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-h-96 overflow-y-auto">
                {filteredCards.map((card) => {
                  const isSelected = selectedCards.some(c => c.cardId === card.id)
                  const canAdd = selectedCards.length < 8
                  
                  return (
                    <motion.div
                      key={card.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        glass-card p-4 cursor-pointer transition-all
                        ${getRarityBg(card.rarity)}
                        ${isSelected ? 'opacity-50' : ''}
                        ${!canAdd && !isSelected ? 'opacity-30 cursor-not-allowed' : ''}
                      `}
                      onClick={() => !isSelected && canAdd && handleAddCard(card)}
                    >
                      <div className={`w-full aspect-square rounded-lg ${getRarityColor(card.rarity)} border-2 mb-3 flex items-center justify-center`}>
                        <div className="text-4xl">
                          {card.type === 'troop' ? '⚔️' : card.type === 'spell' ? '✨' : '🏰'}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-bold text-white text-sm mb-1">{card.name}</div>
                        <div className="text-xs text-white/60 mb-2">{card.elixir} Elixir</div>
                        {card.hasEvolution && (
                          <div className="text-xs text-primary">✨ Evolution</div>
                        )}
                        {isSelected && (
                          <div className="text-xs text-green-400 mt-1">In Deck</div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Card Selection Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedCard.name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/80 mb-2">Card Level</label>
                    <div className="flex gap-2">
                      {[11, 12, 13, 14].map((level) => (
                        <button
                          key={level}
                          onClick={() => setCardLevel(level)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            cardLevel === level
                              ? 'bg-gradient-to-r from-primary to-secondary text-white'
                              : 'glass-card hover:bg-white/10'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {selectedCard.hasEvolution && (
                    <div className="flex items-center justify-between glass-card p-4">
                      <label className="text-white font-medium">Evolution Unlocked</label>
                      <button
                        onClick={() => setHasEvolution(!hasEvolution)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          hasEvolution ? 'bg-primary' : 'bg-white/20'
                        }`}
                      >
                        <motion.div
                          animate={{ x: hasEvolution ? 24 : 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                        />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="flex-1 py-3 glass-card hover:bg-white/10 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={confirmAddCard}
                    className="flex-1 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold"
                  >
                    Add to Deck
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