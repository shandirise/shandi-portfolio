/* Which way an icon moves on hover — it follows the arrow. */
const map: Record<string, [number, number]> = {
  'arrow-up-right': [2, -2],
  'arrow-down': [0, 3],
  download: [0, 3],
  'arrow-up': [0, -3],
  mail: [3, 0],
};

export function nudge(icon?: string): string | undefined {
  if (!icon) return undefined;
  const [x, y] = map[icon] ?? [2, -2];
  return `--nx:${x}px;--ny:${y}px`;
}
