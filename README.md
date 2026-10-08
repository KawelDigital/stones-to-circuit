# Stones to Circuit

Ein großes Modpack für **Minecraft 1.21.1 (NeoForge 21.1.256)**. Du startest auf einer winzigen Insel in einem Ozean mit Steinboden und baust dich über Sieben, Create, Mekanism, Immersive Engineering, Applied Energistics 2 und programmierbare Computer (CC: Tweaked) bis zur vollautomatischen Fabrik hoch.

Ein deutsches Questbuch mit über 200 Quests erklärt dir jede Mod Schritt für Schritt (ein Kapitel pro Mod). Alles ist freiwillig.

Das Pack aktualisiert sich bei jedem Spielstart von selbst. Du musst nie wieder etwas herunterladen.

## Enthaltene Mods (Auswahl)

* **Ressourcen:** Ex Deorum, Ex Compressum (Sieben und Hämmern), Mystical Agriculture, Productive Bees, Aquaculture
* **Technik:** Create (+ Additions, Enchantment Industry, Central Kitchen), Mekanism (+ Generators, Additions, Tools), Immersive Engineering, Industrial Foregoing, PneumaticCraft, Powah, Iron Furnaces
* **Lager:** Applied Energistics 2 (+ Wireless Terminals, ME Requester, Extended AE, AppFlux, Applied Mekanistics), Refined Storage, Sophisticated Storage und Backpacks, Functional Storage, Tom's Simple Storage
* **Computer:** CC: Tweaked und unser eigener Mod **CC Network Storage** (digitaler Speicher, Scanner, Drucker, Auto-Crafting; Programme `me`, `pocket_me`, `schloss`)
* **Magie:** Ars Nouveau, Occultism, Iron's Spells 'n Spellbooks
* **Essen:** Farmer's Delight, End's Delight
* **FTB:** Quests, Chunks, Teams, Ultimine, Essentials, Backups
* **Komfort und Technik:** JEI, Jade, AppleSkin, Xaero's Minimap und Weltkarte, Waystones, Lootr, Carry On, Curios, Polymorph, KubeJS, Almost Unified
* **Leistung:** ModernFix, FerriteCore, Lithium, ImmediatelyFast, Entity Culling, Sodium (+ Extra), Iris (optional, für Shader), Spark, Chunky

## Installation (einmalig, ca. 5 Minuten)

Du brauchst **Prism Launcher** (empfohlen, kostenlos) oder die **Modrinth App**. Die CurseForge App kann sich nicht selbst aktualisieren, siehe unten. Das Pack braucht **Java 21** und etwa **6 GB Arbeitsspeicher** für Minecraft.

### Mit Prism Launcher (empfohlen)

1. Prism Launcher installieren: https://prismlauncher.org
2. Neue Instanz anlegen: **Minecraft 1.21.1**, Modloader **NeoForge 21.1.256**.
3. Lade den **packwiz-installer-bootstrap** herunter: https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest (Datei `packwiz-installer-bootstrap.jar`).
4. Rechtsklick auf die Instanz → **Ordner → Minecraft-Ordner**. Lege die Datei dort hinein.
5. Instanz bearbeiten → **Einstellungen → Benutzerdefinierte Befehle** → Haken bei „Benutzerdefinierte Befehle überschreiben“ → bei **Pre-Launch-Befehl** eintragen:

   ```
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar -g -s client https://raw.githubusercontent.com/KawelDigital/stones-to-circuit/main/pack.toml
   ```
6. Unter **Einstellungen → Java** den maximalen Arbeitsspeicher auf mindestens **6144 MB** stellen.
7. Instanz starten. Beim ersten Start lädt das Pack alle Mods herunter. Das dauert einige Minuten.

### Mit der Modrinth App

1. Neue Instanz anlegen: **Minecraft 1.21.1**, Loader **NeoForge**.
2. Instanz öffnen → **Einstellungen → Starten (Hooks)** → **Pre-Launch**:

   ```
   java -jar packwiz-installer-bootstrap.jar -g -s client https://raw.githubusercontent.com/KawelDigital/stones-to-circuit/main/pack.toml
   ```
3. Die Datei `packwiz-installer-bootstrap.jar` (siehe oben) in den Instanz-Ordner legen (Instanz öffnen → **Ordner öffnen**).
4. Speicher auf mindestens 6 GB stellen und starten. Du brauchst eine installierte Java-Version, die der Befehl `java` findet.

### CurseForge App

Die CurseForge App kann dieses Pack nicht von selbst aktualisieren. Frage den Pack-Ersteller nach dem aktuellen ZIP und importiere es (**Create Custom Profile → Import**). Bei jedem Update brauchst du ein neues ZIP.

## Spielen

1. Neue Welt erstellen → **Weltart: „Ozean-Stein-Insel“**.
2. Beim ersten Start entsteht eine kleine Insel mit einer Truhe, die deine Starter-Ausrüstung enthält (inklusive Questbuch).
3. Öffne das Questbuch (Taste im Steuerungsmenü, Gruppe „FTB Quests“) und folge dem Kapitel **Willkommen**.

## Fehler?

Schick dem Pack-Ersteller die Datei `logs/latest.log` deiner Instanz.
