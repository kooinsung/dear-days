import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const loadingContainer = style({
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const loadingText = style({
  color: vars.color.textMuted,
})

export const errorContainer = style({
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const errorText = style({
  color: vars.color.danger,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.md,
})

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 'bold',
})

export const pastLink = style({
  color: vars.color.textMuted,
  textDecoration: 'none',
  fontSize: vars.fontSize.sm,
  ':hover': {
    color: vars.color.primary,
  },
})

export const emptyState = style({
  backgroundColor: vars.color.white,
  padding: '48px',
  borderRadius: vars.radius.lg,
  textAlign: 'center',
  color: vars.color.textMuted,
})

export const emptyTitle = style({
  fontSize: vars.fontSize.md,
  marginBottom: vars.space.xs,
})

export const emptyDescription = style({
  fontSize: vars.fontSize.sm,
})

export const eventList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
})

export const eventCard = style({
  backgroundColor: vars.color.white,
  padding: vars.space.md,
  borderRadius: vars.radius.lg,
  display: 'flex',
  gap: vars.space.md,
  alignItems: 'center',
  border: `1px solid ${vars.color.border}`,
  cursor: 'pointer',
  transition: 'all 0.2s',
  textDecoration: 'none',
  ':hover': {
    borderColor: vars.color.primary,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
})

export const ddayContainer = style({
  minWidth: '70px',
  textAlign: 'center',
})

export const ddayToday = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: vars.color.danger,
})

export const ddayNormal = style({
  fontSize: vars.fontSize.md,
  fontWeight: 'bold',
  color: vars.color.primary,
})

export const eventInfo = style({
  flex: 1,
})

export const eventTitleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  marginBottom: vars.space.xs,
})

export const eventIcon = style({
  fontSize: '20px',
})

export const eventTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: '600',
  color: vars.color.text,
})

export const eventDateRow = style({
  display: 'flex',
  gap: vars.space.xs,
  alignItems: 'center',
})

export const eventDate = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
})

export const calendarBadge = style({
  fontSize: vars.fontSize.xs,
  padding: '2px 8px',
  backgroundColor: vars.color.gray100,
  borderRadius: vars.radius.sm,
  color: vars.color.textSecondary,
})

export const eventNote = style({
  fontSize: '13px',
  color: vars.color.textLight,
  marginTop: '4px',
})

export const categoryLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
})
