import ICharacter from "./ICharacter";

export default interface IStarwars {
  count: number;
  next: string;
  previous: string | null;
  results: ICharacter;
}