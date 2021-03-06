// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdAnimation {
  constructor(): void;
  setName(name: string): void;
  getName(): string;
  setDirectionsCount(count: number): void;
  getDirectionsCount(): number;
  getDirection(index: number): gdDirection;
  setDirection(direction: gdDirection, index: number): void;
  hasNoDirections(): boolean;
  useMultipleDirections(): boolean;
  setUseMultipleDirections(enable: boolean): void;
  delete(): void;
  ptr: number;
};