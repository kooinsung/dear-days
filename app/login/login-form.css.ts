import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const container = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.background,
  padding: vars.space.xl,
})

export const card = style({
  backgroundColor: vars.color.white,
  padding: '40px',
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  maxWidth: '400px',
  width: '100%',
})

export const title = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: 'bold',
  color: vars.color.text,
  marginBottom: vars.space.xl,
  textAlign: 'center',
})

export const userInfo = style({
  marginBottom: vars.space.lg,
  textAlign: 'center',
})

export const userEmail = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  marginBottom: vars.space.md,
})

export const formGroup = style({
  marginBottom: vars.space.md,
})

export const input = style({
  width: '100%',
  padding: '12px 16px',
  fontSize: vars.fontSize.md,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary,
  },
})

export const button = style({
  width: '100%',
  padding: '12px 16px',
  fontSize: vars.fontSize.md,
  fontWeight: '600',
  border: 'none',
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
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

export const divider = style({
  height: '1px',
  backgroundColor: vars.color.border,
  margin: `${vars.space.lg} 0`,
})

export const message = style({
  padding: '12px',
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  marginBottom: vars.space.md,
  backgroundColor: vars.color.danger,
  color: vars.color.white,
})

export const oauthButtonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
})
