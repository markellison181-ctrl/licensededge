'use client';

import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  referralCount: number;
  creditsEarned: number;
  joinedMonth: string;
  isCurrentUser?: boolean;
}

interface LeaderboardStats {
  totalReferrers: number;
  totalReferrals: number;
  totalCredits: number;
  lastUpdated: string;
}

export default function ReferralLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [stats, setStats] = useState<LeaderboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch('/api/referral/leaderboard');
        if (response.ok) {
          const data = await response.json();
          setLeaderboard(data.leaderboard);
          setStats(data.stats);
        }
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-yellow-900 text-sm font-bold">👑</span>
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-gray-800 text-sm font-bold">🥈</span>
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-orange-900 text-sm font-bold">🥉</span>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full flex items-center justify-center">
            <span className="text-gold text-sm font-bold">#{rank}</span>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
        <p className="text-gray-400">Loading leaderboard...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
          🏆 Referral Champions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Top referrers who are helping grow the ContractPulse community. Join them by sharing with your network!
        </p>
        {stats && (
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date(stats.lastUpdated).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* Top 3 Podium */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {leaderboard.slice(0, 3).map((entry) => (
          <div
            key={entry.rank}
            className={`text-center p-6 rounded-2xl backdrop-blur-xl border shadow-2xl transform transition-all duration-300 hover:scale-105 ${
              entry.rank === 1
                ? 'bg-gradient-to-br from-gold/30 to-gold/10 border-gold/50 shadow-gold/20'
                : entry.rank === 2
                ? 'bg-gradient-to-br from-gray-400/20 to-gray-600/10 border-gray-400/30'
                : 'bg-gradient-to-br from-orange-400/20 to-orange-600/10 border-orange-400/30'
            }`}
          >
            <div className="flex justify-center mb-4">
              {getRankIcon(entry.rank)}
            </div>
            <h3 className="font-bold text-white text-lg mb-2">{entry.name}</h3>
            <div className="text-2xl font-bold text-gold mb-2">{entry.referralCount}</div>
            <p className="text-gray-400 text-sm mb-2">Successful Referrals</p>
            <div className="text-sm text-gray-500">
              <p>💰 ${entry.creditsEarned * 29} in credits earned</p>
              <p>📅 Joined {entry.joinedMonth}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Leaderboard */}
      <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 bg-gradient-to-r from-gold/20 to-gold/10 border-b border-white/10">
          <h3 className="text-xl font-bold text-white text-center">Complete Leaderboard</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-gray-300 font-medium">Rank</th>
                <th className="text-left p-4 text-gray-300 font-medium">Name</th>
                <th className="text-center p-4 text-gray-300 font-medium">Referrals</th>
                <th className="text-center p-4 text-gray-300 font-medium">Credits</th>
                <th className="text-center p-4 text-gray-300 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr
                  key={entry.rank}
                  className={`border-b border-white/5 transition-colors hover:bg-white/10 ${
                    entry.isCurrentUser ? 'bg-gold/10' : ''
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {getRankIcon(entry.rank)}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`font-medium ${entry.isCurrentUser ? 'text-gold' : 'text-white'}`}>
                      {entry.name}
                      {entry.isCurrentUser && (
                        <span className="ml-2 text-xs bg-gold text-forest px-2 py-1 rounded-full">
                          You
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-2xl font-bold text-gold">{entry.referralCount}</span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-green-400 font-semibold">
                      ${entry.creditsEarned * 29}
                    </div>
                    <div className="text-xs text-gray-500">
                      {entry.creditsEarned} months free
                    </div>
                  </td>
                  <td className="p-4 text-center text-gray-400 text-sm">
                    {entry.joinedMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-white mb-6">Referral Milestones</h3>
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">🌱</div>
            <div className="font-semibold text-green-300 text-sm">First Referral</div>
            <div className="text-xs text-gray-400">Share the love</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold text-blue-300 text-sm">3 Referrals</div>
            <div className="text-xs text-gray-400">1 month free</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-semibold text-purple-300 text-sm">10 Referrals</div>
            <div className="text-xs text-gray-400">Community Star</div>
          </div>
          <div className="bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 rounded-xl p-4">
            <div className="text-2xl mb-2">👑</div>
            <div className="font-semibold text-gold text-sm">25+ Referrals</div>
            <div className="text-xs text-gray-400">Champion Status</div>
          </div>
        </div>
      </div>
    </div>
  );
}