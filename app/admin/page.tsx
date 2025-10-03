'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/lib/store'
import { mockAccounts } from '@/lib/mockData'
import { formatPrice } from '@/lib/utils'

const mockOrders = [
  {
    id: 'ORD-001',
    buyer: 'john.doe@email.com',
    type: 'account' as const,
    price: 299.99,
    deckAvg: 14,
    status: 'waiting_review' as const,
    createdAt: new Date('2024-01-15'),
    item: mockAccounts[0]
  },
  {
    id: 'ORD-002',
    buyer: 'jane.smith@email.com',
    type: 'boost' as const,
    price: 45.99,
    deckAvg: 13.5,
    status: 'in_progress' as const,
    createdAt: new Date('2024-01-16'),
    item: {
      type: 'trophies',
      currentTrophies: 4000,
      targetTrophies: 5000,
      express: false
    }
  },
  {
    id: 'ORD-003',
    buyer: 'player123@email.com',
    type: 'boost' as const,
    price: 89.99,
    deckAvg: 14,
    status: 'completed' as const,
    createdAt: new Date('2024-01-14'),
    item: {
      type: 'ranked',
      currentLeague: 'Guardian',
      targetLeague: 'Champion',
      express: true
    }
  },
  {
    id: 'ORD-004',
    buyer: 'clash.king@email.com',
    type: 'account' as const,
    price: 199.99,
    deckAvg: 13,
    status: 'pending_payment' as const,
    createdAt: new Date('2024-01-17'),
    item: mockAccounts[1]
  }
]

export default function AdminDashboard() {
  const [orders, setOrders] = useState(mockOrders)
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [filter, setFilter] = useState('all')
  
  const filteredOrders = useMemo(() => {
    if (filter === 'all') return orders
    return orders.filter(order => order.status === filter)
  }, [orders, filter])
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting_review': return 'text-yellow-400 bg-yellow-400/20'
      case 'in_progress': return 'text-blue-400 bg-blue-400/20'
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'pending_payment': return 'text-orange-400 bg-orange-400/20'
      case 'refunded': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }
  
  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }
  
  const getTotalRevenue = () => {
    return orders.reduce((sum, order) => sum + order.price, 0)
  }
  
  const getOrderStats = () => {
    const stats = {
      total: orders.length,
      pending: orders.filter(o => o.status === 'waiting_review').length,
      inProgress: orders.filter(o => o.status === 'in_progress').length,
      completed: orders.filter(o => o.status === 'completed').length
    }
    return stats
  }
  
  const stats = getOrderStats()
  
  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-white/60">Manage orders and track performance</p>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="glass-card p-6">
            <div className="text-white/60 text-sm">Total Revenue</div>
            <div className="text-3xl font-bold gradient-text">
              {formatPrice(getTotalRevenue())}
            </div>
          </div>
          
          <div className="glass-card p-6">
            <div className="text-white/60 text-sm">Total Orders</div>
            <div className="text-3xl font-bold text-white">{stats.total}</div>
          </div>
          
          <div className="glass-card p-6">
            <div className="text-white/60 text-sm">In Progress</div>
            <div className="text-3xl font-bold text-blue-400">{stats.inProgress}</div>
          </div>
          
          <div className="glass-card p-6">
            <div className="text-white/60 text-sm">Completed</div>
            <div className="text-3xl font-bold text-green-400">{stats.completed}</div>
          </div>
        </motion.div>
        
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'glass-card hover:bg-white/10 text-white/70'
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setFilter('waiting_review')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'waiting_review'
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'glass-card hover:bg-white/10 text-white/70'
            }`}
          >
            Pending Review
          </button>
          <button
            onClick={() => setFilter('in_progress')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'in_progress'
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'glass-card hover:bg-white/10 text-white/70'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'completed'
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'glass-card hover:bg-white/10 text-white/70'
            }`}
          >
            Completed
          </button>
        </motion.div>
        
        {/* Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Buyer</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/60">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredOrders.map((order, index) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-white font-mono text-sm">{order.id}</td>
                    <td className="px-6 py-4 text-white/80 text-sm">{order.buyer}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.type === 'account' ? 'bg-blue-400/20 text-blue-400' : 'bg-purple-400/20 text-purple-400'
                      }`}>
                        {order.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white font-medium">
                      {formatPrice(order.price)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/60 text-sm">
                      {order.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="px-3 py-1 glass-card hover:bg-white/10 text-white text-sm rounded transition-colors"
                        >
                          View
                        </button>
                        {order.status === 'waiting_review' && (
                          <>
                            <button
                              onClick={() => handleStatusChange(order.id, 'in_progress')}
                              className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded hover:bg-green-500/30 transition-colors"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleStatusChange(order.id, 'refunded')}
                              className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded hover:bg-red-500/30 transition-colors"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {order.status === 'in_progress' && (
                          <button
                            onClick={() => handleStatusChange(order.id, 'completed')}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded hover:bg-blue-500/30 transition-colors"
                          >
                            Complete
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-white">Order Details</h2>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-white/60 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm">Order ID</div>
                      <div className="text-white font-bold">{selectedOrder.id}</div>
                    </div>
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm">Buyer</div>
                      <div className="text-white font-bold">{selectedOrder.buyer}</div>
                    </div>
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm">Type</div>
                      <div className="text-white font-bold capitalize">{selectedOrder.type}</div>
                    </div>
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm">Price</div>
                      <div className="text-white font-bold">{formatPrice(selectedOrder.price)}</div>
                    </div>
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm">Status</div>
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                        {selectedOrder.status.replace('_', ' ')}
                      </div>
                    </div>
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm">Date</div>
                      <div className="text-white font-bold">{selectedOrder.createdAt.toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  {selectedOrder.type === 'boost' && selectedOrder.deckAvg && (
                    <div className="glass-card p-4">
                      <div className="text-white/60 text-sm mb-2">Deck Average Level</div>
                      <div className="text-white font-bold">{selectedOrder.deckAvg}</div>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="flex-1 py-3 glass-card hover:bg-white/10 font-medium transition-colors"
                  >
                    Close
                  </button>
                  {selectedOrder.status === 'waiting_review' && (
                    <button
                      onClick={() => {
                        handleStatusChange(selectedOrder.id, 'in_progress')
                        setSelectedOrder(null)
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold"
                    >
                      Accept Order
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}