<h1 align="center">Jinbei Studio</h1>

<p align="center">
  A living-room player for your own streaming server, in an Apple TV look.<br>
  For Mac, Windows, Linux, Android, Android TV, Fire TV, LG and Samsung TVs.
</p>

<p align="center">
  <a href="https://tv.jinbeistudio.com">Website and downloads</a> ·
  <a href="https://github.com/JinbeiStudio/jinbeistudio-tv/releases/latest">Latest release</a>
</p>

Jinbei Studio is a fork of [AIOStreams](https://github.com/Viren070/AIOStreams) by Viren070, which does all the real work: the server, the Jellyfin-compatible API, the web app and the players. This fork gives the web app and its apps an Apple TV style, a few TV-specific fixes, and its own releases for the family's devices. All credit for AIOStreams goes to its authors. For the server, its configuration and its documentation, see the [AIOStreams docs](https://docs.aiostreams.viren070.me).

## What this fork adds

- **An Apple TV look**, on by default: large artwork, a hero with the next title, liquid-glass buttons, menus and panels, a side menu opened with the remote's Left key, a search button and a Menu button in the top bar.
- **Catalogs named by language.** The app names every catalog from its own table, in English or French, whatever the server calls it. Rows carry a Movies, Series or Anime tag, and there is an Anime tab.
- **English and French**, chosen in Settings. The app sends its language to the server, so a server can switch its metadata addon by language. See [metadata in two languages](#metadata-in-two-languages).
- **TV fixes:** the webOS native player (embedded subtitles and audio, subtitles grouped into one folder per language), 1080p on webOS, safe margins in the player, Previous and Next episode buttons, a keyboard that opens on a text field, and a lighter refetch when the app returns to the front.
- **A history page** with one tab per profile, where "Now playing" follows the chosen profile.

## Download

The easiest way is the website, **[tv.jinbeistudio.com](https://tv.jinbeistudio.com)**, in English and French. It has the direct download for each device, with pictures and step-by-step install guides.

Every release also has all the files on one page: **[Latest release](https://github.com/JinbeiStudio/jinbeistudio-tv/releases/latest)**.

| Device | File |
| --- | --- |
| Mac, Apple silicon | `jinbei-studio-osx-arm64.zip` or `.pkg` (Intel: `-osx-x64`) |
| Windows | `jinbei-studio-win-x64.exe` (Arm PCs: `-win-arm64.exe`) |
| Linux | `jinbei-studio-linux-x64.flatpak` (or `-arm64`) |
| Android, Android TV, Fire TV | `jinbei-studio-android-arm64-v8a.apk` (Fire TV Stick: `-armeabi-v7a.apk`) |
| LG TV (webOS) | `jinbei-studio-webos-<version>.ipk` |
| Samsung TV (Tizen) | `jinbei-studio-tizen-<version>.wgt` |

The Mac, Windows and Android apps offer new versions themselves. The TV apps and Linux do not.

## Install

<details>
<summary><b>Mac</b></summary>

1. Download the file for your Mac: Apple silicon if it has an M chip, otherwise Intel.
2. Open the `.zip` and drag Jinbei Studio into Applications.
3. The first time, right-click the app, then Open, then Open. macOS warns because the app is not from the App Store.
4. If it still refuses: System Settings, Privacy & Security, scroll down, Open Anyway.
</details>

<details>
<summary><b>Windows</b></summary>

1. Download the installer and open it.
2. If Windows says "Windows protected your PC", click More info, then Run anyway.
3. Follow the installer, then open Jinbei Studio from the Start menu.
</details>

<details>
<summary><b>Linux</b></summary>

1. Download the `.flatpak` for your processor.
2. `flatpak install --user ./jinbei-studio-linux-x64.flatpak`
3. Start it from your applications menu.
</details>

<details>
<summary><b>Android, Android TV and Fire TV Stick</b></summary>

- **Phone or tablet:** download `jinbei-studio-android-arm64-v8a.apk`, open it, allow installs from your browser or file manager, and choose Install (Install anyway if Play Protect warns).
- **Android TV, Google TV, Fire TV:** install the free **Downloader** app. On Fire TV, turn on Install unknown apps for Downloader in Settings, My Fire TV, Developer options. In Downloader, type the address of the `.apk` from the latest release, then Install and Open. A Fire TV Stick needs the `armeabi-v7a` file.
</details>

<details>
<summary><b>LG TV (webOS)</b></summary>

1. Install **Developer Mode** from the LG Content Store and sign in with a free LG developer account. Turn on Dev Mode Status and Key Server.
2. On a computer, install [Dev Manager](https://github.com/webosbrew/dev-manager-desktop), add the TV by its IP address and pair.
3. In Dev Manager, Apps, Install IPK, choose the downloaded `.ipk`, then open Jinbei Studio from the TV.

The app keeps working only while Developer Mode is renewed, as LG requires.
</details>

<details>
<summary><b>Samsung TV (Tizen)</b></summary>

1. On the TV, open Apps, press 1 2 3 4 5, turn on Developer mode and enter your computer's IP address.
2. On a computer, install Tizen Studio with the TV Extensions, connect to the TV, and create a Samsung certificate that includes it.
3. Re-sign and install the downloaded `.wgt`.
</details>

## Connect to your server

On first start the app asks for your server's address and a profile. Jinbei Studio uses the Jellyfin-compatible API of an [AIOStreams](https://github.com/Viren070/AIOStreams) server, so you need one. The address looks like `https://your-server/p/<code>`, and each person can have their own profile and history.

## Metadata in two languages

The app sends its language (`en` or `fr`) with every request. A server that runs two metadata addons, one per language, can pick between them with two configuration variants:

```
# aiometadata-fr   when: resource == 'jellyfin' and header('accept-language') != 'en'
enable presets[options.name="AIOMetadata FR"]

# aiometadata-en   when: resource == 'jellyfin' and header('accept-language') == 'en'
enable presets[options.name="AIOMetadata EN"]
```

Both addons stay disabled in the base configuration. Other clients, such as Infuse, do not send the app's language and get the French one.

## About this repository

- The family website, [tv.jinbeistudio.com](https://tv.jinbeistudio.com), has its own small repository, [JinbeiStudio/tv-site](https://github.com/JinbeiStudio/tv-site).
- `main` is Jinbei Studio. Releases are tagged `tvos-v<version>` and build every platform.
- `upstream-main` follows AIOStreams, and its releases are merged into `main`.
- The tvOS style lives in `packages/web/src/components/tvos`, switched in Settings, Theme, Interface.

## Licence

Jinbei Studio is licensed under the [GNU Affero General Public License v3](LICENSE), like AIOStreams, whose copyright notices stay with the files. Because this is a modified version, its source is this repository.
