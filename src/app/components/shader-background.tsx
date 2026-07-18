"use client";

import {
  MeshGradient,
  type MeshGradientProps,
  GrainGradient,
  type GrainGradientProps,
  Warp,
  type WarpProps,
  Waves,
  type WavesProps,
  Voronoi,
  type VoronoiProps,
  Swirl,
  type SwirlProps,
  Spiral,
  type SpiralProps,
  DotOrbit,
  type DotOrbitProps,
  DotGrid,
  type DotGridProps,
  GodRays,
  type GodRaysProps,
  Metaballs,
  type MetaballsProps,
  NeuroNoise,
  type NeuroNoiseProps,
  PerlinNoise,
  type PerlinNoiseProps,
  SimplexNoise,
  type SimplexNoiseProps,
  SmokeRing,
  type SmokeRingProps,
  Water,
  type WaterProps,
  StaticMeshGradient,
  type StaticMeshGradientProps,
  StaticRadialGradient,
  type StaticRadialGradientProps,
  Dithering,
  type DitheringProps,
  PulsingBorder,
  type PulsingBorderProps,
  ColorPanels,
  type ColorPanelsProps,
} from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type ShaderVariantProps = {
  "mesh-gradient": MeshGradientProps;
  "grain-gradient": GrainGradientProps;
  warp: WarpProps;
  waves: WavesProps;
  voronoi: VoronoiProps;
  swirl: SwirlProps;
  "dot-orbit": DotOrbitProps;
  "dot-grid": DotGridProps;
  "smoke-ring": SmokeRingProps;
  "static-radial-gradient": StaticRadialGradientProps;
  "neuro-noise": NeuroNoiseProps;
  metaballs: MetaballsProps;
  "god-rays": GodRaysProps;
  spiral: SpiralProps;
  dithering: DitheringProps;
  "pulsing-border": PulsingBorderProps;
  "color-panels": ColorPanelsProps;
  "static-mesh-gradient": StaticMeshGradientProps;
  "simplex-noise": SimplexNoiseProps;
  "perlin-noise": PerlinNoiseProps;
  water: WaterProps;
};

export type ShaderVariant = keyof ShaderVariantProps;

export type ShaderBackgroundProps = {
  [K in ShaderVariant]: { variant: K } & ShaderVariantProps[K];
}[ShaderVariant] & { className?: string };

const VARIANT_COMPONENTS: {
  [K in ShaderVariant]: ComponentType<ShaderVariantProps[K]>;
} = {
  "mesh-gradient": MeshGradient,
  "grain-gradient": GrainGradient,
  warp: Warp,
  waves: Waves,
  voronoi: Voronoi,
  swirl: Swirl,
  "dot-orbit": DotOrbit,
  "dot-grid": DotGrid,
  "smoke-ring": SmokeRing,
  "static-radial-gradient": StaticRadialGradient,
  "neuro-noise": NeuroNoise,
  metaballs: Metaballs,
  "god-rays": GodRays,
  spiral: Spiral,
  dithering: Dithering,
  "pulsing-border": PulsingBorder,
  "color-panels": ColorPanels,
  "static-mesh-gradient": StaticMeshGradient,
  "simplex-noise": SimplexNoise,
  "perlin-noise": PerlinNoise,
  water: Water,
};

export function ShaderBackground({ variant, className, ...rest }: ShaderBackgroundProps) {
  const reducedMotion = useReducedMotion();
  const Shader = VARIANT_COMPONENTS[variant] as ComponentType<Record<string, unknown>>;
  const props = rest as Record<string, unknown>;
  const speedProps = reducedMotion && "speed" in props ? { speed: 0 } : {};

  return <Shader {...props} {...speedProps} className={cn("h-full w-full", className)} />;
}

export const shaderPresets: { variant: ShaderVariant; props: Record<string, unknown> }[] = [
  {
    variant: "mesh-gradient",
    props: { colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"], distortion: 0.8, swirl: 0.3, speed: 0.4 },
  },
  {
    variant: "grain-gradient",
    props: { colors: ["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"], colorBack: "#000000", softness: 0.6, speed: 0.5 },
  },
  {
    variant: "warp",
    props: { colors: ["#121212", "#9470ff", "#121212", "#8838ff"], speed: 0.4 },
  },
  {
    variant: "waves",
    props: { colorFront: "#ffbb00", colorBack: "#000000" },
  },
  {
    variant: "voronoi",
    props: { colors: ["#ff8247", "#ffe53d"], speed: 0.3 },
  },
  {
    variant: "swirl",
    props: { colorBack: "#180018", colors: ["#ffd1d1", "#ff8a8a", "#660000"], speed: 0.2 },
  },
  {
    variant: "dot-orbit",
    props: { colors: ["#ffc96b", "#ff6200", "#ff2f00"], colorBack: "#000000", speed: 0.6 },
  },
  {
    variant: "god-rays",
    props: { colors: ["#ffcc66", "#ff6a00"], colorBack: "#000000", speed: 0.4 },
  },
  {
    variant: "metaballs",
    props: { colors: ["#ff5cf4", "#4d9eff", "#000000"], colorBack: "#000000", speed: 0.5 },
  },
  {
    variant: "neuro-noise",
    props: { colorFront: "#ffffff", colorMid: "#47a6ff", colorBack: "#000000", speed: 0.4 },
  },
  {
    variant: "color-panels",
    props: { colors: ["#ff3d68", "#ffb800", "#3d7aff", "#00ffb2"], speed: 0.3 },
  },
  {
    variant: "static-mesh-gradient",
    props: { colors: ["#ff8a3d", "#ff3d9a", "#3d5aff", "#0a0a0a"] },
  },
  {
    variant: "simplex-noise",
    props: { colors: ["#ff6ec7", "#6ec7ff", "#000000"], speed: 0.4 },
  },
];
