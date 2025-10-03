'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useStore } from '@/lib/store'
import { LEAGUES, PRICING } from '@/lib/constants'
import { calculateBoostPrice, calculateLeaguePrice, getLeagueIndex, formatPrice } from '@/lib/utils'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function BoostCalculator() {
  const [activeTab, setActiveTab] = useState<'trophies' | 'ranked'>('trophies')
  const [currentTrophies, setCurrentTrophies] = useState(4000)
  const [targetTrophies, setTargetTrophies] = useState(6000)
  const [currentLeague, setCurrentLeague] = useState('Herald')
  const [targetLeague, setTargetLeague] = useState('Champion')
  const [express, setExpress] = useState(false)
  
  const { addToCart } = useStore()
  
  const boostPrice = useMemo(() => {
    if (activeTab === 'trophies') {
      return calculateBoostPrice(currentTrophies, targetTrophies)
    } else {
      const currentIndex = getLeagueIndex(currentLeague)
      const targetIndex = getLeagueIndex(targetLeague)
      return calculateLeaguePrice(currentIndex, targetIndex)
    }
  }, [activeTab, currentTrophies, targetTrophies, currentLeague, targetLeague])
  
  const finalPrice = useMemo(() => {
    const basePrice = boostPrice
    const expressFee = express ? basePrice * 0.3 : 0
    return basePrice + expressFee
  }, [boostPrice, express])
  
  const chartData = useMemo(() => {
    const labels = []
    const data = []
    
    if (activeTab === 'trophies') {
      for (let i = 0; i <= PRICING.maxTrophies; i += 500) {
        labels.push(i)
        data.push(calculateBoostPrice(currentTrophies, i))
      }
    } else {
      LEAGUES.forEach((league, index) => {
        labels.push(league)
        data.push(calculateLeaguePrice(getLeagueIndex(currentLeague), index))
      })
    }
    
    return {
      labels,
      datasets: [
        {
          label: 'Boost Price ($)',
          data,
          borderColor: '#7C3AED',
          backgroundColor: 'rgba(124, 58, 237, 0.1)',
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#7C3AED',
        },
      ],
    }
  }, [activeTab, currentTrophies, currentLeague])
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          callback: (value: number) => `$${value}`,
        },
      },
    },
  }
  
  const handleAddToCart = () => {
    const boostConfig = {
      type: activeTab,
      currentTrophies,
      targetTrophies,
      currentLeague,
      targetLeague,
      express,
    }
    addToCart('boost', boostConfig, finalPrice)
  }
  
  return (
    <section id="calculator" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-dark" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Boost Calculator</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Calculate the exact cost for your trophy boost. Transparent pricing with no hidden fees.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="glass-card p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('trophies')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'trophies'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Trophy Boost
              </button>
              <button
                onClick={() => setActiveTab('ranked')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'ranked'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                League Boost
              </button>
            </div>
          </div>
          
          {/* Calculator Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {activeTab === 'trophies' ? (
                <>
                  <div>
                    <label className="block text-white/80 mb-2">Current Trophies</label>
                    <input
                      type="range"
                      min="0"
                      max={PRICING.maxTrophies}
                      step="100"
                      value={currentTrophies}
                      onChange={(e) => setCurrentTrophies(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-center text-white font-bold text-lg mt-2">
                      {currentTrophies.toLocaleString()}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2">Target Trophies</label>
                    <input
                      type="range"
                      min="0"
                      max={PRICING.maxTrophies}
                      step="100"
                      value={targetTrophies}
                      onChange={(e) => setTargetTrophies(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-center text-white font-bold text-lg mt-2">
                      {targetTrophies.toLocaleString()}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-white/80 mb-2">Current League</label>
                    <select
                      value={currentLeague}
                      onChange={(e) => setCurrentLeague(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {LEAGUES.map((league) => (
                        <option key={league} value={league}>
                          {league}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2">Target League</label>
                    <select
                      value={targetLeague}
                      onChange={(e) => setTargetLeague(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {LEAGUES.map((league) => (
                        <option key={league} value={league}>
                          {league}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              
              {boostPrice === 0 && (
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl mb-2">👑</div>
                  <div className="text-white font-bold">Already there, King!</div>
                </div>
              )}
              
              <div className="flex items-center justify-between glass-card p-4">
                <label className="text-white font-medium">Express 24h (+30%)</label>
                <button
                  onClick={() => setExpress(!express)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    express ? 'bg-primary' : 'bg-white/20'
                  }`}
                >
                  <motion.div
                    animate={{ x: express ? 24 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                  />
                </button>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="text-white/60 mb-2">Total Price</div>
                <div className="text-4xl font-bold gradient-text mb-4">
                  {formatPrice(finalPrice)}
                </div>
                {express && (
                  <div className="text-sm text-white/60">
                    Includes ${formatPrice(boostPrice * 0.3)} express fee
                  </div>
                )}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                disabled={boostPrice === 0}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-lg glow-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {boostPrice === 0 ? 'Already There!' : 'Add to Cart'}
              </motion.button>
            </div>
            
            {/* Chart */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Price Curve</h3>
              <div className="h-80">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}