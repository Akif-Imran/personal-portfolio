export const THEME_STORAGE_KEY = "theme";

/**
 * Inlined into <head> by the root layout. Runs synchronously before first
 * paint, so a returning visitor's saved theme never flashes.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;
