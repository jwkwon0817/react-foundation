import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
});

export const horizontal = style({
  flexDirection: 'row',
});

export const vertical = style({
  flexDirection: 'column',
});
