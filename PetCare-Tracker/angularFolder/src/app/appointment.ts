import { AnimalModel } from './animal-model'; // Import du modèle Animal
import { OwnerModel } from './owner-model';  // Import du modèle Owner

export interface Appointment {
  id: number;
  dateTime: string;
  location: string;
  type: string ;
  notes: string;
  animal: AnimalModel;
  owner: OwnerModel;
}
