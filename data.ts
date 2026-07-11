

// 1. Your updated array with specific active/inactive icons for each route
export const tabsConfig = [
  { 
    name: "index", 
    title: "Home", 
    activeIcon: "home" as const, 
    inactiveIcon: "home-outline" as const 
  },
  { 
    name: "rewards", 
    title: "Rewards", 
    activeIcon: "gift" as const, 
    inactiveIcon: "gift-outline" as const 
  },
  { 
    name: "finance", 
    title: "Finance", 
    activeIcon: "wallet" as const, // Perfect for account balances/tracking
    inactiveIcon: "wallet-outline" as const 
  },
  { 
    name: "cards", 
    title: "Cards", 
    activeIcon: "card" as const, // Great for virtual/physical card management
    inactiveIcon: "card-outline" as const 
  },
  { 
    name: "me", 
    title: "Me", 
    activeIcon: "person" as const, // Standard user profile layout style
    inactiveIcon: "person-outline" as const 
  }
];

