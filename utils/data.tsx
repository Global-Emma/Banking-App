// Unified icon imports
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// ==========================================
// DESIGN TOKEN SYNC FOR NATIVE PROPS
// ==========================================
export const COLORS = {
  brand: "#1DCF9F",
  brandMuted: "#DBECE8",
  appBg: "#F8F9FB",
  charcoal: "#111827",
};

// ==========================================
// 1. DYNAMIC ICON RENDERER HELPERS
// ==========================================
export type IconLibrary =
  | "FontAwesome"
  | "FontAwesome5"
  | "FontAwesome6"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons";

export interface IconProps {
  library: IconLibrary;
  name: string;
  size: number;
  color: string;
}

export const DynamicIcon = ({ library, name, size, color }: IconProps) => {
  const IconComponent = {
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
  }[library];

  if (!IconComponent) return null;
  // @ts-ignore - Dynamic name assignment safe across vector icon families
  return <IconComponent name={name} size={size} color={color} />;
};
