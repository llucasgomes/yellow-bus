import { cva, type VariantProps } from 'class-variance-authority';

/**
 * The panel floats: it is inset from the viewport on every edge and fully rounded,
 * so the page stays visible around it. `m-2` is that inset — the enter/exit
 * transform in the component adds it back so the drawer still leaves the screen.
 */
export const drawerVariants = cva('bg-popover text-popover-foreground fixed z-50 flex h-auto min-h-0 flex-col text-sm will-change-transform group/drawer pointer-events-auto outline-none select-none', {
  variants: {
    zPlacement: {
      top: 'inset-x-0 top-0 origin-top rounded-b-xl border-b',
      right: 'inset-y-0 right-0 w-3/4 origin-right flex-row rounded-s-xl border-s sm:w-96',
      bottom: 'inset-x-0 bottom-0 origin-bottom rounded-t-xl border-t',
      left: 'inset-y-0 left-0 w-3/4 origin-left flex-row rounded-e-xl border-e sm:w-96',
    },
    /**
     * A drawer with snap points is laid out at full height and only translated, so
     * the content-driven height that caps a plain vertical drawer has to go.
     */
    zSnapping: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { zPlacement: ['top', 'bottom'], zSnapping: false, class: 'max-h-[calc(100dvh-6rem)]' },
    { zPlacement: ['top', 'bottom'], zSnapping: true, class: 'h-dvh' },
  ],
  defaultVariants: {
    zPlacement: 'bottom',
    zSnapping: false,
  },
});

/**
 * The grab strip. It only reserves space — the pill itself is an `::after` drawn by
 * the panel's stylesheet, so the slot stays a single element in the DOM.
 */
export const drawerHandleVariants = cva('after:bg-muted relative z-10 flex shrink-0 cursor-grab after:block after:shrink-0 after:rounded-full active:cursor-grabbing', {
  variants: {
    zPlacement: {
      top: 'order-last h-3 w-full items-start justify-center after:h-1 after:w-24',
      right: 'h-full w-3 items-center justify-start after:h-24 after:w-1',
      bottom: 'h-3 w-full items-end justify-center after:h-1 after:w-24',
      left: 'order-last h-full w-3 items-center justify-end after:h-24 after:w-1',
    },
  },
  defaultVariants: {
    zPlacement: 'bottom',
  },
});

/** Everything the consumer projects, kept scrollable and clipped by the panel radius. */
export const drawerBodyVariants = cva('flex min-h-0 w-full flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] select-text');

export const drawerHeaderVariants = cva('flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[axis=y]/drawer:text-center md:gap-0.5 md:text-start');

export const drawerTitleVariants = cva('text-foreground text-base font-medium wrap-anywhere font-heading');

export const drawerDescriptionVariants = cva('text-muted-foreground text-sm text-balance wrap-anywhere');

export const drawerFooterVariants = cva('mt-auto flex shrink-0 flex-col gap-2 p-4 pt-0');

/** Mask classes handed to the CDK overlay backdrop. */
export const DRAWER_BACKDROP_CLASSES = [
  // The marker carries the mask (colour and blur) of the style; the CDK takes one class per entry.
  ...'bg-black/10 supports-backdrop-filter:backdrop-blur-xs'.split(' ').filter(Boolean),
  'transition-opacity',
  'duration-450',
  'ease-[cubic-bezier(0.32,0.72,0,1)]',
];

export type ZardDrawerVariants = VariantProps<typeof drawerVariants>;
export type ZardDrawerPlacement = NonNullable<ZardDrawerVariants['zPlacement']>;
