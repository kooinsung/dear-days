import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const loadingContainer = style({
  padding: '48px',
  textAlign: 'center',
  color: vars.color.textMuted,
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
})

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
})

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: '600',
  color: vars.color.text,
})

export const required = style({
  color: vars.color.danger,
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

export const textarea = style({
  width: '100%',
  padding: '12px 16px',
  fontSize: vars.fontSize.md,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  minHeight: '100px',
  resize: 'vertical',
  fontFamily: 'inherit',
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary,
  },
})

export const categoryGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gap: vars.space.xs,
})

export const categoryButton = style({
  padding: '12px',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.xs,
  ':hover': {
    borderColor: vars.color.primary,
  },
})

export const categoryButtonActive = style({
  borderColor: vars.color.primary,
  backgroundColor: '#f0f0ff',
})

export const categoryIcon = style({
  fontSize: '24px',
})

export const categoryLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
})

export const radioGroup = style({
  display: 'flex',
  gap: vars.space.md,
})

export const radioLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  cursor: 'pointer',
  fontSize: vars.fontSize.sm,
})

export const radio = style({
  cursor: 'pointer',
})

export const buttonGroup = style({
  display: 'flex',
  gap: vars.space.sm,
  marginTop: vars.space.lg,
})

export const button = style({
  flex: 1,
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
