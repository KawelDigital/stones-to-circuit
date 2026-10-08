# Stones to Circuit

Ein Modpack für **Minecraft 26.1.2 (NeoForge)**: Eine Welt aus Stein, programmierbare Computer (CC: Tweaked), digitale Lager und Auto-Crafting (Applied Energistics 2 und unser eigener Netzwerkspeicher) und ein deutsches Questbuch, das dir jede Mod Schritt für Schritt erklärt.

Das Pack aktualisiert sich bei jedem Spielstart von selbst. Du musst nie wieder etwas herunterladen.

## Enthaltene Mods

CC: Tweaked · Applied Energistics 2 (+ GuideME) · CC Network Storage (unser Mod) · FTB Quests · FTB Chunks · FTB Teams · FTB Ultimine · FTB Library · FTB Backups · JEI · Jade · AppleSkin · Mouse Tweaks · Sodium · Iris (optional, für Shader) · Architectury API

## Installation (einmalig, ca. 5 Minuten)

Du brauchst **Prism Launcher** (empfohlen, kostenlos) oder die **Modrinth App**. Die CurseForge App kann sich nicht selbst aktualisieren, siehe unten.

### Mit Prism Launcher (empfohlen)

1. Prism Launcher installieren: https://prismlauncher.org
2. Neue Instanz anlegen: **Minecraft 26.1.2**, Modloader **NeoForge 26.1.2.114**.
3. Lade den **packwiz-installer-bootstrap** herunter: https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest (Datei `packwiz-installer-bootstrap.jar`).
4. Rechtsklick auf die Instanz → **Ordner → Minecraft-Ordner**. Lege die Datei `packwiz-installer-bootstrap.jar` dort hinein.
5. Instanz bearbeiten → **Einstellungen → Benutzerdefinierte Befehle** → Haken bei „Benutzerdefinierte Befehle überschreiben“ → bei **Pre-Launch-Befehl** eintragen:

   ```
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar -g -s client https://raw.githubusercontent.com/KawelDigital/stones-to-circuit/main/pack.toml
   ```
6. Instanz starten. Beim ersten Start lädt das Pack alle Mods herunter. Das dauert etwas.

### Mit der Modrinth App

1. Neue Instanz anlegen: **Minecraft 26.1.2**, Loader **NeoForge**.
2. Instanz öffnen → **Einstellungen → Starten (Hooks)** → **Pre-Launch**:

   ```
   java -jar packwiz-installer-bootstrap.jar -g -s client https://raw.githubusercontent.com/KawelDigital/stones-to-circuit/main/pack.toml
   ```
3. Die Datei `packwiz-installer-bootstrap.jar` (siehe oben) in den Instanz-Ordner legen (Instanz öffnen → **Ordner öffnen**).
4. Starten. Du brauchst eine installierte Java-Version, die der Befehl `java` findet.

### CurseForge App

Die CurseForge App kann dieses Pack nicht von selbst aktualisieren. Frage den Pack-Ersteller nach dem aktuellen ZIP und importiere es (**Create Custom Profile → Import**). Bei jedem Update brauchst du ein neues ZIP.

## Spielen

1. Neue Welt erstellen → **Weltvorlage: „Stein-Welt“** (unter „Weltart“).
2. Öffne das Questbuch (Taste im Steuerungsmenü, Gruppe „FTB Quests“) und folge dem Kapitel **Willkommen**.

## Fehler?

Schick dem Pack-Ersteller die Datei `logs/latest.log` deiner Instanz.
