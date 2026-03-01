export const ContractIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="contract-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#F4D03F" />
      </linearGradient>
      <linearGradient id="contract-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B3D2E" />
        <stop offset="100%" stopColor="#0F4A35" />
      </linearGradient>
    </defs>
    <rect x="12" y="8" width="40" height="48" rx="4" fill="url(#contract-shadow)" opacity="0.3" transform="translate(2, 2)" />
    <rect x="12" y="8" width="40" height="48" rx="4" fill="#fff" stroke="url(#contract-grad)" strokeWidth="2" />
    <rect x="16" y="16" width="32" height="2" rx="1" fill="url(#contract-grad)" />
    <rect x="16" y="22" width="24" height="2" rx="1" fill="url(#contract-grad)" opacity="0.7" />
    <rect x="16" y="28" width="28" height="2" rx="1" fill="url(#contract-grad)" opacity="0.7" />
    <rect x="16" y="34" width="20" height="2" rx="1" fill="url(#contract-grad)" opacity="0.7" />
    <circle cx="44" cy="44" r="6" fill="url(#contract-grad)" />
    <path d="M42 44l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DatabaseIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="db-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#F4D03F" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="16" rx="20" ry="6" fill="url(#db-grad)" />
    <rect x="12" y="16" width="40" height="32" fill="url(#db-grad)" opacity="0.8" />
    <ellipse cx="32" cy="48" rx="20" ry="6" fill="url(#db-grad)" />
    <ellipse cx="32" cy="32" rx="20" ry="6" fill="#fff" opacity="0.3" />
    <rect x="28" y="20" width="8" height="24" fill="#fff" opacity="0.2" />
    <rect x="20" y="22" width="4" height="20" fill="#fff" opacity="0.15" />
    <rect x="40" y="22" width="4" height="20" fill="#fff" opacity="0.15" />
  </svg>
);

export const AnalyticsIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="analytics-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#F4D03F" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="48" height="48" rx="6" fill="url(#analytics-grad)" opacity="0.1" />
    <rect x="12" y="40" width="8" height="16" rx="2" fill="url(#analytics-grad)" />
    <rect x="24" y="32" width="8" height="24" rx="2" fill="url(#analytics-grad)" opacity="0.8" />
    <rect x="36" y="24" width="8" height="32" rx="2" fill="url(#analytics-grad)" opacity="0.9" />
    <rect x="48" y="16" width="8" height="40" rx="2" fill="url(#analytics-grad)" />
    <circle cx="16" cy="20" r="2" fill="url(#analytics-grad)" />
    <circle cx="28" cy="18" r="2" fill="url(#analytics-grad)" />
    <circle cx="40" cy="14" r="2" fill="url(#analytics-grad)" />
    <circle cx="52" cy="12" r="2" fill="url(#analytics-grad)" />
    <path d="M16 20 L28 18 L40 14 L52 12" stroke="url(#analytics-grad)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const APIIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="api-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#F4D03F" />
      </linearGradient>
    </defs>
    <rect x="8" y="24" width="48" height="16" rx="8" fill="url(#api-grad)" />
    <circle cx="20" cy="32" r="4" fill="#fff" opacity="0.9" />
    <circle cx="32" cy="32" r="4" fill="#fff" opacity="0.7" />
    <circle cx="44" cy="32" r="4" fill="#fff" opacity="0.9" />
    <rect x="16" y="12" width="8" height="8" rx="2" fill="url(#api-grad)" opacity="0.6" />
    <rect x="28" y="8" width="8" height="8" rx="2" fill="url(#api-grad)" opacity="0.8" />
    <rect x="40" y="12" width="8" height="8" rx="2" fill="url(#api-grad)" opacity="0.6" />
    <rect x="16" y="48" width="8" height="8" rx="2" fill="url(#api-grad)" opacity="0.6" />
    <rect x="28" y="52" width="8" height="8" rx="2" fill="url(#api-grad)" opacity="0.8" />
    <rect x="40" y="48" width="8" height="8" rx="2" fill="url(#api-grad)" opacity="0.6" />
    <line x1="20" y1="20" x2="20" y2="24" stroke="url(#api-grad)" strokeWidth="2" />
    <line x1="32" y1="16" x2="32" y2="24" stroke="url(#api-grad)" strokeWidth="2" />
    <line x1="44" y1="20" x2="44" y2="24" stroke="url(#api-grad)" strokeWidth="2" />
    <line x1="20" y1="40" x2="20" y2="48" stroke="url(#api-grad)" strokeWidth="2" />
    <line x1="32" y1="40" x2="32" y2="52" stroke="url(#api-grad)" strokeWidth="2" />
    <line x1="44" y1="40" x2="44" y2="48" stroke="url(#api-grad)" strokeWidth="2" />
  </svg>
);

export const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#F4D03F" />
      </linearGradient>
    </defs>
    <path d="M12 2L13.2 8.8L20 10L13.2 11.2L12 18L10.8 11.2L4 10L10.8 8.8L12 2Z" fill="url(#sparkle-grad)" />
    <path d="M18 4L18.6 6.4L21 7L18.6 7.6L18 10L17.4 7.6L15 7L17.4 6.4L18 4Z" fill="url(#sparkle-grad)" opacity="0.7" />
    <path d="M6 16L6.4 17.6L8 18L6.4 18.4L6 20L5.6 18.4L4 18L5.6 17.6L6 16Z" fill="url(#sparkle-grad)" opacity="0.7" />
  </svg>
);

export const ShieldIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#F4D03F" />
      </linearGradient>
    </defs>
    <path d="M32 8L16 16V32C16 44 32 56 32 56C32 56 48 44 48 32V16L32 8Z" fill="url(#shield-grad)" />
    <path d="M32 12L20 18V32C20 42 32 52 32 52C32 52 44 42 44 32V18L32 12Z" fill="#fff" opacity="0.2" />
    <path d="M28 32L30 34L36 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);