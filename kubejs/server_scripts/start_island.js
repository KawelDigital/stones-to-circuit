// Stones to Circuit: baut beim ersten Start die Startinsel (nur in der Ozean-Stein-Insel-Welt).
// Eine runde Insel (Radius 13) mit Hütte, zwei Bäumen, Teich, Steg, Steinhügel und Blumen.
ServerEvents.loaded(event => {
  const server = event.server
  const data = server.persistentData
  if (data.getBoolean('stc_island_built')) return

  const level = server.getLevel('minecraft:overworld')
  // Nur bauen, wenn dort wirklich Wasser ist (Ozean-Welt), sonst normale Welt nicht veraendern
  if (!level || level.getBlock(0, 60, 0).id !== 'minecraft:water') {
    data.putBoolean('stc_island_built', true)
    return
  }

  const run = cmd => server.runCommandSilent(cmd)
  run('forceload add -32 -32 32 32')

  // Kreisscheibe: eine fill-Zeile je z-Reihe
  const disc = (y, r, block) => {
    const zr = Math.floor(r)
    for (let z = -zr; z <= zr; z++) {
      const hx = Math.floor(Math.sqrt(r * r - z * z))
      run('fill ' + (-hx) + ' ' + y + ' ' + z + ' ' + hx + ' ' + y + ' ' + z + ' ' + block)
    }
  }
  const box = (x1, y1, z1, x2, y2, z2, block, mode) =>
    run('fill ' + x1 + ' ' + y1 + ' ' + z1 + ' ' + x2 + ' ' + y2 + ' ' + z2 + ' ' + block + (mode ? ' ' + mode : ''))
  const set = (x, y, z, block) => run('setblock ' + x + ' ' + y + ' ' + z + ' ' + block)

  // --- Insel-Körper: Stein unten, Erde, Gras oben (Unterseite läuft spitz zu) ---
  for (let y = 48; y <= 61; y++) disc(y, Math.max(3, 3 + (y - 48) * 0.55), 'minecraft:stone')
  disc(62, 11.5, 'minecraft:dirt')
  disc(63, 12.5, 'minecraft:dirt')
  disc(64, 13, 'minecraft:dirt')
  disc(65, 12.5, 'minecraft:grass_block')
  // Sandstrand an einer Seite (Süden)
  for (let z = 8; z <= 12; z++) box(-5, 65, z, 5, 65, z, 'minecraft:sand')

  // --- Teich (Osten) mit Zuckerrohr ---
  box(6, 65, 3, 9, 65, 6, 'minecraft:water')
  box(6, 64, 3, 9, 64, 6, 'minecraft:clay')
  set(5, 65, 4, 'minecraft:dirt'); set(5, 66, 4, 'minecraft:sugar_cane')
  set(10, 65, 5, 'minecraft:dirt'); set(10, 66, 5, 'minecraft:sugar_cane'); set(10, 67, 5, 'minecraft:sugar_cane')
  set(7, 66, 4, 'minecraft:lily_pad')

  // --- Große Eiche (Nordwesten) ---
  box(-8, 66, -6, -8, 71, -6, 'minecraft:oak_log')
  box(-11, 70, -9, -5, 72, -3, 'minecraft:oak_leaves')
  box(-10, 73, -8, -6, 73, -4, 'minecraft:oak_leaves')
  box(-9, 74, -7, -7, 74, -5, 'minecraft:oak_leaves')
  box(-8, 69, -6, -8, 72, -6, 'minecraft:oak_log')

  // --- Kleine Birke (Südwesten) ---
  box(-8, 66, 5, -8, 69, 5, 'minecraft:birch_log')
  box(-10, 68, 3, -6, 70, 7, 'minecraft:birch_leaves')
  box(-9, 71, 4, -7, 71, 6, 'minecraft:birch_leaves')
  box(-8, 68, 5, -8, 70, 5, 'minecraft:birch_log')

  // --- Holzhütte (Nordosten) ---
  box(4, 65, -10, 9, 65, -5, 'minecraft:oak_planks')
  box(4, 66, -10, 9, 68, -5, 'minecraft:oak_planks', 'hollow')
  for (const [cx, cz] of [[4, -10], [9, -10], [4, -5], [9, -5]]) box(cx, 66, cz, cx, 68, cz, 'minecraft:oak_log')
  box(3, 69, -11, 10, 69, -4, 'minecraft:spruce_slab')
  box(4, 70, -10, 9, 70, -5, 'minecraft:spruce_slab')
  box(5, 66, -5, 5, 67, -5, 'minecraft:air')
  set(5, 66, -5, 'minecraft:oak_door[facing=south,half=lower]')
  set(5, 67, -5, 'minecraft:oak_door[facing=south,half=upper]')
  set(7, 67, -5, 'minecraft:glass_pane'); set(9, 67, -8, 'minecraft:glass_pane'); set(4, 67, -8, 'minecraft:glass_pane')
  set(8, 66, -9, 'minecraft:crafting_table')
  set(7, 66, -9, 'minecraft:furnace[facing=south]')
  set(6, 66, -9, 'minecraft:barrel[facing=up]')
  set(8, 66, -6, 'minecraft:red_bed[facing=north,part=foot]')
  set(8, 66, -7, 'minecraft:red_bed[facing=north,part=head]')
  set(6, 68, -8, 'minecraft:lantern[hanging=true]')

  // --- Steinhügel (Süden) ---
  box(-4, 66, 6, 0, 66, 9, 'minecraft:cobblestone')
  box(-3, 67, 7, -1, 67, 8, 'minecraft:andesite')
  set(-2, 68, 7, 'minecraft:stone')
  set(0, 67, 9, 'minecraft:gravel'); set(-4, 67, 6, 'minecraft:gravel')

  // --- Steg (Westen) mit Laterne ---
  box(-19, 65, -1, -13, 65, 1, 'minecraft:oak_planks')
  for (const px of [-19, -16, -13]) { set(px, 66, -1, 'minecraft:oak_fence'); set(px, 66, 1, 'minecraft:oak_fence') }
  set(-19, 67, -1, 'minecraft:lantern'); set(-19, 67, 1, 'minecraft:lantern')

  // --- Weg und Fackeln um den Spawn ---
  for (const [tx, tz] of [[-2, -2], [3, 2], [-2, 3], [3, -3]]) { set(tx, 66, tz, 'minecraft:oak_fence'); set(tx, 67, tz, 'minecraft:torch') }
  box(0, 65, -4, 0, 65, 4, 'minecraft:dirt_path')
  box(-4, 65, 0, 4, 65, 0, 'minecraft:dirt_path')
  set(0, 65, 0, 'minecraft:grass_block')

  // --- Blumen und Gras ---
  const flowers = ['minecraft:poppy', 'minecraft:dandelion', 'minecraft:cornflower', 'minecraft:azure_bluet', 'minecraft:short_grass', 'minecraft:short_grass']
  for (const [fx, fz] of [[-3, -8], [1, -6], [-5, 1], [4, 7], [11, -1], [2, 10], [-11, -1], [-1, -10], [10, 8], [-6, 9], [7, 1], [3, 5]]) {
    set(fx, 66, fz, flowers[(fx * 3 + fz * 5 + 60) % flowers.length])
  }

  // --- Truhe mit Starter-Ausruestung ---
  set(2, 66, 0, 'minecraft:chest[facing=west]')
  const items = [
    'minecraft:oak_sapling 4', 'minecraft:bone_meal 16', 'minecraft:bread 16', 'minecraft:torch 32',
    'exdeorum:crook 1', 'exdeorum:wooden_hammer 1', 'exdeorum:oak_sieve 1', 'exdeorum:string_mesh 1',
    'exdeorum:oak_barrel 1', 'exdeorum:oak_crucible 1', 'minecraft:dirt 32', 'minecraft:gravel 16', 'minecraft:water_bucket 1', 'minecraft:lava_bucket 1', 'ftbquests:book 1'
  ]
  items.forEach((it, i) => run('item replace block 2 66 0 container.' + i + ' with ' + it))

  run('setworldspawn 0 66 0')
  run('gamerule spawnRadius 0')
  data.putBoolean('stc_island_built', true)
  console.info('[Stones to Circuit] Startinsel gebaut')
})
