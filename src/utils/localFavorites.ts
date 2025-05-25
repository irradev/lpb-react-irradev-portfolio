const FAVORITES_STORAGE_KEY = 'favoriteProjects_irradev';

const getFavoritesFromStorage = (): string[] => {
   try {
      const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return favorites ? JSON.parse(favorites) : [];
   } catch (error) {
      // If JSON parsing fails, return an empty array
      console.error('Error parsing favorites from localStorage:', error);
      return [];
   }
};

export const toggleFavorite = (url: string) => {
   let favorites: string[] = getFavoritesFromStorage();

   if (favorites.includes(url)) {
      favorites = favorites.filter((projectUrl) => projectUrl !== url);
   } else {
      favorites.push(url);
   }

   localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
};

export const existInFavorites = (url: string): boolean => {
   if (typeof window === 'undefined') return false;

   const favorites: string[] = getFavoritesFromStorage();

   return favorites.includes(url);
};

export const favoriteProjects = (): string[] => {
   return getFavoritesFromStorage();
};
