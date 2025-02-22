## API Report File for "@fluentui/react-nav-preview"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const Nav: ForwardRefComponent<NavProps>;

// @public (undocumented)
export const navClassNames: SlotClassNames<NavSlots>;

// @public
export const NavLink: ForwardRefComponent<NavLinkProps>;

// @public (undocumented)
export const navLinkClassNames: SlotClassNames<NavLinkSlots>;

// @public
export const NavLinkGroup: ForwardRefComponent<NavLinkGroupProps>;

// @public (undocumented)
export const navLinkGroupClassNames: SlotClassNames<NavLinkGroupSlots>;

// @public
export type NavLinkGroupProps = ComponentProps<NavLinkGroupSlots> & {};

// @public (undocumented)
export type NavLinkGroupSlots = {
    root: Slot<'div'>;
};

// @public
export type NavLinkGroupState = ComponentState<NavLinkGroupSlots>;

// @public
export type NavLinkProps = ComponentProps<NavLinkSlots> & {};

// @public (undocumented)
export type NavLinkSlots = {
    root: Slot<'div'>;
};

// @public
export type NavLinkState = ComponentState<NavLinkSlots>;

// @public
export type NavProps = ComponentProps<NavSlots> & {};

// @public (undocumented)
export type NavSlots = {
    root: Slot<'div'>;
};

// @public
export type NavState = ComponentState<NavSlots>;

// @public
export const renderNav_unstable: (state: NavState) => JSX.Element;

// @public
export const renderNavLink_unstable: (state: NavLinkState) => JSX.Element;

// @public
export const renderNavLinkGroup_unstable: (state: NavLinkGroupState) => JSX.Element;

// @public
export const useNav_unstable: (props: NavProps, ref: React_2.Ref<HTMLElement>) => NavState;

// @public
export const useNavLink_unstable: (props: NavLinkProps, ref: React_2.Ref<HTMLElement>) => NavLinkState;

// @public
export const useNavLinkGroup_unstable: (props: NavLinkGroupProps, ref: React_2.Ref<HTMLElement>) => NavLinkGroupState;

// @public
export const useNavLinkGroupStyles_unstable: (state: NavLinkGroupState) => NavLinkGroupState;

// @public
export const useNavLinkStyles_unstable: (state: NavLinkState) => NavLinkState;

// @public
export const useNavStyles_unstable: (state: NavState) => NavState;

// (No @packageDocumentation comment for this package)

```
