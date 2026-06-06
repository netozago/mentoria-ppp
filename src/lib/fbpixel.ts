export const FB_PIXEL_ID = "1011875944934035";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

/**
 * Registra um evento de visualização de página no Facebook Pixel
 */
export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

/**
 * Registra um evento personalizado ou padrão no Facebook Pixel
 * @param name Nome do evento (ex: 'Lead', 'Purchase', 'AddToCart')
 * @param options Parâmetros adicionais do evento
 */
export const event = (name: string, options = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  }
};
