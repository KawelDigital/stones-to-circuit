// Stones to Circuit: baut beim ersten Start die Startinsel (nur in der Ozean-Stein-Insel-Welt).
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
  run('forceload add -16 -16 16 16')

  // Stein-Kern, Erde, Gras (ungefaehr rund)
  run('fill -6 48 -4 6 62 4 minecraft:stone')
  run('fill -4 48 -6 4 62 6 minecraft:stone')
  run('fill -5 63 -3 5 64 3 minecraft:dirt')
  run('fill -3 63 -5 3 64 5 minecraft:dirt')
  run('fill -4 63 -4 4 64 4 minecraft:dirt')
  run('fill -5 65 -3 5 65 3 minecraft:grass_block')
  run('fill -3 65 -5 3 65 5 minecraft:grass_block')
  run('fill -4 65 -4 4 65 4 minecraft:grass_block')

  // Ein kleiner Baum
  run('fill -3 66 -3 -3 69 -3 minecraft:oak_log')
  run('fill -5 69 -5 -1 70 -1 minecraft:oak_leaves')
  run('fill -4 71 -4 -2 71 -2 minecraft:oak_leaves')
  run('setblock -3 70 -3 minecraft:oak_log')

  // Truhe mit Starter-Ausruestung
  run('setblock 2 66 0 minecraft:chest[facing=west]')
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
