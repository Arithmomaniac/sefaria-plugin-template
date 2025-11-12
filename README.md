This is a template for creating Sefaria plugins. (See [this video](https://drive.google.com/file/d/16HZxYHxqEWubmoKToLdWl2WN0ZJ8zJGX/view) for a ) for a demo of how this works, though some of the details are no longer accurate.) It includes:

- The base component for development
- An html page that can be used in local development as a test harness
- A GitHub workflow to deploy both the plugin and the test harness to GitHub pages.
- An example of using [client-zip](https://github.com/Touffy/client-zip) for creating zip files (recommended over JSZip for better performance)

Some technical notes:
- This template uses Webpack, but you can use a different bundler. The only requirement is that there is a single `plugins.js` file for the output.
- Similarly, you can use a different GitHub Workflow, as long as it ensures `plugins.js` is available at `<username>.github.io/<project-name>/plugins.js`.
- This template uses Typescript in order to demonstrate how you can use non-vanilla JS to build a plugin, but that is not required.

The plugin is exported as a Web Component. You can use React inside (see [Arithmomanaic/sofer-ai-sefaria-plugin](https://github.com/Arithmomaniac/sofer-ai-sefaria-plugin) for an example), but if you're just looking to build a simple application, you may want to use [Lit](https://lit.dev/) or [WebJSX](https://webjsx.org/) to develop the root plugin, and use [Lion](https://lion.js.org/) as your component library.

## Using client-zip

This template includes an example of using [client-zip](https://github.com/Touffy/client-zip) for creating zip files. client-zip is recommended over JSZip because it:
- Is faster (no compression overhead for simple zips)
- Produces smaller bundle sizes
- Has a simpler API
- Supports streaming

The library is loaded from CDN in the HTML file:
```html
<script type="module">
    import { downloadZip } from 'https://cdn.jsdelivr.net/npm/client-zip/index.js';
    window.downloadZip = downloadZip;
</script>
```

And can be used in TypeScript by declaring it on the window object:
```typescript
const blob = await window.downloadZip([file]).blob();
```

See `src/plugin/plugin.ts` for a complete example of creating and downloading a zip file.
