---
title: Iframe Embeds (external visualizations)
layout: secondary-page.njk
layoutStyle: one-column
---

This page demonstrates iframes inside Markdown. This is useful for embedding visualizations from other platforms.

## Simple iframe

<iframe
  title="Example embedded visualization"
  src="https://example.com"
  width="100%"
  height="420"
  style="border: 1px solid rgba(0,0,0,0.2); border-radius: 8px;"
  loading="lazy"
></iframe>

## Responsive iframe wrapper

Use a wrapper to keep a consistent aspect ratio.

<div style="position: relative; width: 100%; padding-top: 56.25%;">
  <iframe
    title="Responsive embed placeholder"
    src="https://example.com"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    loading="lazy"
  ></iframe>
</div>

## Accessibility tips

- Always include a descriptive `title` attribute.
- Prefer platforms that support keyboard navigation and captions/alt text.
- Avoid auto-playing audio.

## Embedding Google Maps

<iframe
  title="Harvard Yard Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.123!2d-71.1167!3d42.3744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDLCsDIyJzI3LjgiTiA3McKwMDcnMDIuMSJX!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
  width="100%"
  height="300"
  style="border:0; border-radius: 8px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

## Troubleshooting

- If an embed does not appear, check the browser console for errors.
- Some sites block embedding (X-Frame-Options error).
- Use HTTPS links for best compatibility.

---

You can also embed:
- YouTube videos
- Datawrapper charts
- Observable notebooks

Always test embeds for accessibility and responsiveness.
