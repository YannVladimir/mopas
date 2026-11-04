# Mopas

> **This repository is a byte-for-byte duplicate of [`gia`](https://github.com/YannVladimir/gia)** — same WordPress site ("Property Talks" real estate, Kallyas theme), same commit history, same original README. It's likely a stale backup pushed under a different name rather than a separate project. Worth considering whether to keep both or archive/delete this one once you've reviewed `gia`.

A WordPress site built on the premium **Kallyas** theme (via a `kallyas-child` child theme).

## This cleanup pass

Like `gia`, this repo had the entire WordPress core, every third-party theme and plugin, and the full media library committed (~9,700 files) — none of it this project's own code — plus `wp-config.php` (a live database password and WordPress secret keys) and a full database dump containing live Twitter API credentials, both **publicly exposed** since ~2017. Both have been purged from the entire git history and force-pushed. If this site is still live anywhere, treat those credentials as compromised and rotate them, regardless of the history rewrite.

Going forward, this repo tracks only the project's own code — see `gia`'s README for the full explanation, which applies identically here:

- `wp-content/themes/kallyas-child/` — the child theme (still unmodified Kallyas boilerplate).
- `.htaccess`, `wp-config-sample.php`.

## Continuous integration

Every push lints the tracked PHP files with `php -l` (`.github/workflows/ci.yml`).

## License

This is a client/business site, not an open-source project — no license file is included.
