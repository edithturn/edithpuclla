# Edith Puclla - Personal Website

Personal website and blog built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugopapermod) theme.

🌐 **Live Site:** [edithpuclla.com](https://edithpuclla.com/)

## About

This is my personal website where I share blog posts, music, videos, graphics, and other content. The site features:

- **Blog** with categories (Developer, Outside Work)
- **Music** page
- **Videos** page
- **Graphics** showcase
- **Social** links
- **Favorites** collection
- **Giscus** comments integration

## Tech Stack

- **Static Site Generator:** Hugo
- **Theme:** PaperMod
- **Deployment:** Netlify
- **Comments:** Giscus

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (version 0.146.3 or compatible)
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/edithturn/edithpuclla.git
   cd edithpuclla
   ```

2. **Run the development server**
   ```bash
   hugo server
   ```
   
   The site will be available at `http://localhost:1313`

3. **Build for production**
   ```bash
   hugo --gc --minify
   ```
   
   The generated site will be in the `public/` directory.

## Project Structure

```
edithpuclla/
├── content/          # Site content (blog posts, pages)
├── layouts/          # Custom templates
├── static/           # Static assets (CSS, images)
├── themes/           # Hugo themes
├── config.toml       # Site configuration
└── netlify.toml      # Netlify deployment config
```

## Development

- **Create a new blog post:**
  ```bash
  hugo new blog/my-post.md
  ```

- **Create a new page:**
  ```bash
  hugo new my-page.md
  ```

- **Preview drafts:**
  ```bash
  hugo server -D
  ```

## Deployment

The site is automatically deployed to Netlify. The build command is configured in `netlify.toml`:

- **Build command:** `hugo --gc --minify`
- **Publish directory:** `public`
- **Hugo version:** 0.146.3

## Customization

- **Theme:** PaperMod theme is located in `themes/papermod/`
- **Custom CSS:** Add custom styles in `static/css/custom.css`
- **Configuration:** Edit `config.toml` for site settings

## License

This project is open source and available under the [MIT License](LICENSE) (or your preferred license).

## Contact

- **Website:** [edithpuclla.com](https://edithpuclla.com/)
- **GitHub:** [@edithturn](https://github.com/edithturn)

---

Made with ❤️ using Hugo and PaperMod
