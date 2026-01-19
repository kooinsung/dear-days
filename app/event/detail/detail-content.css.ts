import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const pageContainer = style({
  minHeight: '100vh',
  backgroundColor: vars.color.background,
})

export const header = style({
  backgroundColor: vars.color.white,
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.color.border}`,
})

export const headerContent = style({
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const backLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  textDecoration: 'none',
  ':hover': {
    color: vars.color.primary,
  },
})

export const editButton = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.primary,
  textDecoration: 'none',
  fontWeight: '600',
  ':hover': {
    color: vars.color.primaryHover,
  },
})

export const content = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: vars.space.xl,
})

export const ddayCard = style({
  backgroundColor: vars.color.white,
  padding: vars.space.xxl,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  marginBottom: vars.space.lg,
  textAlign: 'center',
})

export const ddayLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  marginBottom: vars.space.sm,
})

export const ddayValue = style({
  fontSize: vars.fontSize.xxxl,
  fontWeight: 'bold',
  marginBottom: vars.space.md,
})

export const ddayToday = style({
  color: vars.color.danger,
})

export const ddayFuture = style({
  color: vars.color.primary,
})

export const eventTitle = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: 'bold',
  color: vars.color.text,
})

export const infoCard = style({
  backgroundColor: vars.color.white,
  padding: vars.space.xl,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  marginBottom: vars.space.lg,
})

export const infoSection = style({
  marginBottom: vars.space.lg,
  ':last-child': {
    marginBottom: 0,
  },
})

export const infoLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  marginBottom: '4px',
})

export const infoValue = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text,
})

export const categoryBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.gray100,
  borderRadius: vars.radius.lg,
  fontSize: vars.fontSize.md,
})

export const categoryIcon = style({
  fontSize: vars.fontSize.xl,
})

export const dateGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: vars.space.md,
})

export const deleteButton = style({
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: vars.fontSize.md,
  fontWeight: '600',
  border: 'none',
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  backgroundColor: vars.color.danger,
  color: vars.color.white,
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: vars.color.dangerHover,
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
