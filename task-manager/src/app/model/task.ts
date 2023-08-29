import { State } from "../state";

export class Task {
    id? : number
    titre? : string;
    description? : string;
    etat? : State
    statut? : string
}