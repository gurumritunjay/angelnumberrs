# Image Assets Guide

## Where to Place Images from Your Original Website

### 1. Profile/About Images
**Location:** `public/images/profile/`
- `sudha-profile.jpg` - Your profile photo (the one from your "Know Me More" section)

### 2. Hero/Background Images
**Location:** `public/images/hero/`
- `numbered-stones.jpg` - The numbered stones image from your homepage
- Any other decorative images

### 3. Service Images (if any)
**Location:** `public/images/services/`
- Service-related images or icons

### 4. Blog/Content Images
**Location:** `public/images/blog/`
- Any blog post images
- Content illustrations

## How to Download Images from Your Original Site

1. Visit https://www.angelnumberrs.com/
2. Right-click on images → "Save Image As..."
3. Save them to the appropriate folders above

## Key Images to Download:
- [ ] sudha profile image (from About section)
- [ ] Numbered stones image (from hero section)
- [ ] Any service-specific images
- [ ] Blog post images (if any)

## After Adding Images:
Run the dev server to see them:
```bash
npm run dev
```

Images in `public/images/` can be referenced as:
```jsx
<img src="/images/profile/sudha-profile.jpg" alt="Sudha Goswami" />
```
