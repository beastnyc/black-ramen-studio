# Image Management

## Folder Structure

### `/public/hero-images/`
Place hero carousel images here. These will scroll across the top of the homepage.
- Recommended size: 1920x1080 (16:9 aspect ratio)
- Format: JPG or PNG
- Naming: 01.jpg, 02.jpg, etc.

### `/public/projects/`
Each project gets its own subfolder:

```
/public/projects/
├── neon-futures/
│   ├── cover.jpg        (Main thumbnail - 4:5 aspect ratio recommended)
│   ├── 01.jpg           (Project images)
│   ├── 02.jpg
│   └── 03.jpg
├── ritual-commerce/
│   └── cover.jpg
├── community-os/
│   └── cover.jpg
└── ...
```

## Adding New Projects

1. Create a folder in `/public/projects/[project-slug]/`
2. Add a `cover.jpg` for the main grid
3. Add numbered images (01.jpg, 02.jpg, etc.) for project detail pages
4. Update `/src/data/projects.ts` with project metadata

## Image Requirements

- **Cover images**: 800x1000px (4:5 ratio) for grid display
- **Project images**: 1920x1080px or larger
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep file sizes under 500KB when possible
