export interface Game {
    name: string;
    available: boolean;
    getGameElement(): HTMLElement;
}