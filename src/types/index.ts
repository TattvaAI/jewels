export type ProductCategory = 
  | "all"
  | "earrings"
  | "necklaces"
  | "pendants"
  | "stacks";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "earrings" | "necklaces" | "pendants" | "stacks";
  priceINR: number;
  originalPriceINR?: number;
  tagline: string;
  description: string;
  material: string;
  core: string;
  coating: string;
  waterproof: boolean;
  hypoallergenic: boolean;
  dimensions: string;
  weightGrams?: number;
  images: string[];
  instagramCode?: string;
  instagramCaption?: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  inStock: boolean;
  stackLayer?: "choker" | "base-chain" | "focal-pendant" | "stud" | "huggie" | "drop";
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: "Yellow Gold" | "White Gold / Silver" | "Rose Gold";
}

export interface StackSelection {
  layer1: Product | null;
  layer2: Product | null;
  layer3: Product | null;
}
