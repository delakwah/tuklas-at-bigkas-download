# Tuklas at Bigkas downloads

Website: **https://delakwah.github.io/tuklas-at-bigkas-download/**

A public, lightweight download page for the Android app. This repository contains the website, artwork and QR codes. APKs are attached to GitHub Releases; application source and signing credentials are kept elsewhere.

## Current release

- Version 0.1.2, Android version code 4
- Android 7.0+ (API 24), ARM64
- [Download APK](https://github.com/delakwah/tuklas-at-bigkas-download/releases/download/v0.1.2/Tuklas-at-Bigkas-0.1.2-20261118.apk)
- 566,285,098 bytes
- SHA-256: `0f50498a51c4baeeaa9bf25f85c34955f1c77725e320f3aa7cf87a1955c8bce5`

## Share or print

- [PNG QR code](assets/download-qr.png)
- [SVG QR code](assets/download-qr.svg)

Both QR codes open the permanent website address, not a particular APK. They continue working when the app is updated.

## Publish an update

1. Build and verify a signed APK with the same package ID and signing certificate, and a higher Android version code. Keep the APK outside this Git repository.
2. Create a new GitHub Release in this public repository, attach the APK and its checksum, and publish it. Verify that the asset downloads without signing in.
3. Update `index.html`: the APK and release-note URLs, version/code, size, update date, compatibility if changed, and checksum. Update this README too.
4. Commit and push to `main`. GitHub Pages publishes from the repository root. Wait for Pages deployment to succeed, then check the page and download link.

Keep the repository name and website URL unchanged to preserve printed QR codes. No QR regeneration is needed for an ordinary app update.

The page uses plain HTML, CSS and JavaScript with no build step or runtime dependencies. Main download, installation instructions and QR downloads also work with JavaScript disabled. All asset paths are relative so they work under the GitHub Pages project URL.
