// Theme colors matching mobile app
export const COLORS = {
  // Primary
  primary: '#1E40AF',
  primaryLight: '#EFF6FF',
  
  // Accent
  accent: '#DC2626',
  accentLight: '#FEE2E2',
  
  // Status
  success: '#10B981',
  successLight: '#ECFDF5',
  danger: '#EF4444',
  dangerLight: '#FEF2F2',
  warning: '#F59E0B',
  warningLight: '#FFFBEB',
  
  // Text
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textLight: '#9CA3AF',
  
  // Background
  background: '#F9FAFB',
  cardBackground: '#FFFFFF',
  border: '#E5E7EB',
};

export const COMMON_STYLES = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: '0',
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: COLORS.accent,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: `1px solid ${COLORS.border}`,
    fontSize: '14px',
    fontFamily: 'inherit',
  },
};
