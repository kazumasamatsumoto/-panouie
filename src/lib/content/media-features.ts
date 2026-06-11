import type { Feature } from "@/types/article";
import { features as epanouieFeatures } from "@/lib/content/features";
import { lueurFeatures } from "@/lib/content/lueur-features";

/**
 * メディア横断の特集アクセサ。
 * 特集の実体は各メディアのファイル（features.ts / lueur-features.ts）が持ち、
 * ページからはこのモジュール経由で media slug を指定して取得する。
 */
const featuresByMedia: Record<string, Feature[]> = {
  epanouie: epanouieFeatures,
  lueur: lueurFeatures,
};

export function getPublishedFeatures(media: string): Feature[] {
  return (featuresByMedia[media] ?? []).filter((f) => f.published);
}

export function getFeatureBySlug(
  media: string,
  slug: string,
): Feature | undefined {
  return (featuresByMedia[media] ?? []).find((f) => f.slug === slug);
}
