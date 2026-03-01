import { NextRequest, NextResponse } from 'next/server';

interface LeaderboardEntry {
  rank: number;
  name: string; // Anonymized or display name
  referralCount: number;
  creditsEarned: number;
  joinedMonth: string;
  isCurrentUser?: boolean;
}

// Mock leaderboard data - in a real app, this comes from your database
const mockLeaderboard: Omit<LeaderboardEntry, 'rank' | 'isCurrentUser'>[] = [
  { name: 'Sarah C.', referralCount: 12, creditsEarned: 4, joinedMonth: 'Jan 2026' },
  { name: 'Mike T.', referralCount: 9, creditsEarned: 3, joinedMonth: 'Feb 2026' },
  { name: 'Alex R.', referralCount: 7, creditsEarned: 2, joinedMonth: 'Dec 2025' },
  { name: 'Jessica L.', referralCount: 6, creditsEarned: 2, joinedMonth: 'Jan 2026' },
  { name: 'David K.', referralCount: 5, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Maria S.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Tom H.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Lisa W.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'James P.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Dec 2025' },
  { name: 'Rachel M.', referralCount: 2, creditsEarned: 0, joinedMonth: 'Feb 2026' },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userCode = searchParams.get('userCode'); // Optional: highlight current user
    
    // In a real app: 
    // 1. Query your database for top referrers
    // 2. Sort by referral count descending
    // 3. Add rank numbers
    // 4. Anonymize names (first name + last initial)
    // 5. If userCode provided, mark their entry

    const leaderboard: LeaderboardEntry[] = mockLeaderboard
      .sort((a, b) => b.referralCount - a.referralCount)
      .map((entry, index) => ({
        ...entry,
        rank: index + 1,
        isCurrentUser: false, // In real app: check if this matches userCode
      }));

    // Add some variety to make it look realistic
    const totalReferrals = leaderboard.reduce((sum, entry) => sum + entry.referralCount, 0);
    const totalCredits = leaderboard.reduce((sum, entry) => sum + entry.creditsEarned, 0);

    return NextResponse.json({
      success: true,
      leaderboard,
      stats: {
        totalReferrers: leaderboard.length,
        totalReferrals,
        totalCredits,
        lastUpdated: new Date().toISOString(),
      }
    });

  } catch (error: any) {
    console.error('Leaderboard error:', error);
    return NextResponse.json(
      { error: 'Failed to load leaderboard' },
      { status: 500 }
    );
  }
}