import { NextRequest, NextResponse } from 'next/server';

// In a real app, this would connect to your database
// For now, we'll simulate the tracking logic

interface ReferralData {
  referralCode: string;
  email: string;
  timestamp: number;
  tier?: string;
  status: 'pending' | 'converted' | 'credited';
}

export async function POST(request: NextRequest) {
  try {
    const { referralCode, email, tier = 'free' } = await request.json();

    if (!referralCode || !email) {
      return NextResponse.json(
        { error: 'Referral code and email are required' },
        { status: 400 }
      );
    }

    // Validate referral code format (should be 8 chars, alphanumeric)
    if (!/^[A-Z0-9]{8}$/.test(referralCode)) {
      return NextResponse.json(
        { error: 'Invalid referral code format' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Look up the referrer by their referral code
    // 2. Validate the email hasn't already been referred
    // 3. Save the referral to your database
    // 4. Send confirmation emails
    // 5. Update referrer's stats

    const referralRecord: ReferralData = {
      referralCode,
      email: email.toLowerCase(),
      timestamp: Date.now(),
      tier,
      status: tier === 'free' ? 'pending' : 'converted',
    };

    // Mock database save
    console.log('📊 Referral tracked:', referralRecord);

    // If it's a paid tier, immediately mark as converted
    if (tier !== 'free') {
      // In a real app: update referrer's successful referral count
      // If they hit 3 referrals, credit their account with free month
      console.log('🎉 Paid referral converted:', { referralCode, email, tier });
    }

    return NextResponse.json({
      success: true,
      referralCode,
      status: referralRecord.status,
      message: tier === 'free' 
        ? 'Referral tracked. Will convert when user upgrades.' 
        : 'Referral converted! Referrer will be credited.',
    });

  } catch (error: any) {
    console.error('Referral tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track referral' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const referralCode = searchParams.get('code');

  if (!referralCode) {
    return NextResponse.json(
      { error: 'Referral code is required' },
      { status: 400 }
    );
  }

  try {
    // In a real app: look up referral stats from database
    // For demo purposes, return mock data
    const mockStats = {
      referralCode,
      totalReferrals: Math.floor(Math.random() * 10),
      convertedReferrals: Math.floor(Math.random() * 5),
      creditsEarned: Math.floor(Math.random() * 2),
      nextMilestone: 3,
    };

    return NextResponse.json({
      success: true,
      stats: mockStats,
    });

  } catch (error: any) {
    console.error('Failed to get referral stats:', error);
    return NextResponse.json(
      { error: 'Failed to get referral stats' },
      { status: 500 }
    );
  }
}