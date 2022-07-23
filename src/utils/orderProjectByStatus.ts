import { IProject, TStatus } from '../data/projects';

interface SeparateByStatus {
   Actualizado: IProject[];
   Terminado: IProject[];
   Desarrollando: IProject[];
   Antiguo: IProject[];
}

export const orderProjectByStatus = (array: IProject[]): IProject[] => {
   const orderBy: TStatus[] = [
      'Actualizado',
      'Terminado',
      'Desarrollando',
      'Antiguo',
   ];

   let separateByStatus: SeparateByStatus = {
      Actualizado: [],
      Terminado: [],
      Desarrollando: [],
      Antiguo: [],
   };

   return array.reduce((tempArr, currentItem, currentIndex, originalArray) => {
      for (const iterator of orderBy) {
         if (iterator === currentItem.status) {
            separateByStatus[iterator].push(currentItem);
         }
      }
      let toReturn: IProject[] = [];

      if (currentIndex >= originalArray.length - 1) {
         for (const iterator of orderBy) {
            toReturn.push(...separateByStatus[iterator]);
         }
      }
      return toReturn;
   }, array);
};
