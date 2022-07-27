export const toggleFavorite = (url: string) => {
   let favorites: string[] = JSON.parse(
      localStorage.getItem('favoriteProjects_irradev') || '[]'
   );

   if (favorites.includes(url)) {
      favorites = favorites.filter((projectUrl) => projectUrl !== url);
   } else {
      favorites.push(url);
   }

   localStorage.setItem('favoriteProjects_irradev', JSON.stringify(favorites));
};

export const existInFavorites = (url: string): boolean => {
   if (typeof window === 'undefined') return false;

   const favorites: string[] = JSON.parse(
      localStorage.getItem('favoriteProjects_irradev') || '[]'
   );

   return favorites.includes(url);
};

export const favoriteProjects = (): string[] => {
   return JSON.parse(localStorage.getItem('favoriteProjects_irradev') || '[]');
};
