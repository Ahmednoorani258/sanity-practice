export const COUPON_CODES = {
    BFRIDAY: 'BFRIDAY',
    CHRISTMAS: 'CHRISTMAS',
    NEWYEAR: 'NEWYEAR'
} as const;

export type CouponCode = keyof typeof COUPON_CODES