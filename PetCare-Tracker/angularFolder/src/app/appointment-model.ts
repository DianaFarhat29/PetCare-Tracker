import { AnimalModel } from './animal-model'; // Import du modèle Animal
import { OwnerModel } from './owner-model';  // Import du modèle Owner
import { Appointment } from './appointment';  // Import du modèle Owner


export class AppointmentModel implements Appointment {
  constructor(
    public id: number,
    public dateTime: string,
    public location: string,
    public type: string ,
    public notes: string,
    public animal: AnimalModel,
    public owner: OwnerModel
  ) {}

}

