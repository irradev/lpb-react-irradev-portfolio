import { IProject, TStatus } from '../data/projects';

interface SeparateByStatus {
   Actualizado: IProject[];
   Terminado: IProject[];
   Desarrollando: IProject[];
   Antiguo: IProject[];
}

export const orderProjectByStatus = (array: IProject[]): IProject[] => {
   const separateByStatus: SeparateByStatus = {
      Actualizado: [],
      Terminado: [],
      Desarrollando: [],
      Antiguo: [],
   };

   for (const project of array) {
      // Ensure that project.status is a valid key for separateByStatus
      if (project.status in separateByStatus) {
         separateByStatus[project.status].push(project);
      }
      // Optionally, handle cases where status might not be one of the predefined keys,
      // though TStatus should enforce this. For now, we assume valid status.
   }

   const statusOrder: TStatus[] = [
      'Actualizado',
      'Terminado',
      'Desarrollando',
      'Antiguo',
   ];

   const result: IProject[] = [];
   for (const status of statusOrder) {
      result.push(...separateByStatus[status]);
   }

   return result;
};
