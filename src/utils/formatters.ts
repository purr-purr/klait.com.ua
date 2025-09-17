export const importDoc = (file: string): string => `/assets/documents/${file}`;
export const openExternalLink = (link: string) =>
	window.open(link, '_blank', 'noopener,noreferrer');
