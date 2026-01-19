import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const container = style({
  minHeight: '100vh',
  backgroundColor: vars.color.background,
  padding: vars.space.xl,
})

export const content = style({
  maxWidth: '600px',
  margin: '0 auto',
})

export const card = style({
  backgroundColor: vars.color.white,
  padding: vars.space.xxl,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
})

export const title = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: 'bold',
  color: vars.color.text,
  marginBottom: vars.space.xl,
  textAlign: 'center',
})

export const section = style({
  marginBottom: vars.space.xl,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: '600',
  color: vars.color.text,
  marginBottom: vars.space.md,
})

export const userInfo = style({
  backgroundColor: vars.color.gray50,
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  marginBottom: vars.space.md,
})

export const userEmail = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  marginBottom: vars.space.sm,
})

export const userId = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  fontFamily: 'monospace',
})

export const providerList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  marginBottom: vars.space.md,
})

export const providerItem = style({
  padding: vars.space.md,
  backgroundColor: vars.color.gray50,
  borderRadius: vars.radius.md,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const providerName = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  fontWeight: '500',
})

export const providerStatus = style({
  fontSize: vars.fontSize.sm,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
})

export const statusConnected = style({
  backgroundColor: vars.color.success,
  color: vars.color.white,
})

export const statusNotConnected = style({
  backgroundColor: vars.color.gray200,
  color: vars.color.textMuted,
})

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
})

export const button = style({
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: vars.fontSize.md,
  fontWeight: '600',
  border: 'none',
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: 'all 0.2s',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const primaryButton = style({
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  ':hover': {
    backgroundColor: vars.color.primaryHover,
  },
})

export const secondaryButton = style({
  backgroundColor: vars.color.white,
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  ':hover': {
    backgroundColor: vars.color.gray50,
  },
})

export const dangerButton = style({
  backgroundColor: vars.color.danger,
  color: vars.color.white,
  ':hover': {
    backgroundColor: vars.color.dangerHover,
  },
})

export const message = style({
  padding: vars.space.sm,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  marginBottom: vars.space.md,
})

export const messageSuccess = style({
  backgroundColor: vars.color.success,
  color: vars.color.white,
})

export const messageError = style({
  backgroundColor: vars.color.danger,
  color: vars.color.white,
})

export const backLink = style({
  display: 'inline-block',
  marginBottom: vars.space.lg,
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  textDecoration: 'none',
  ':hover': {
    color: vars.color.primary,
  },
})
