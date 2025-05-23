export interface ClassificationStrategy {
    isMatch(score: number): boolean;
    getClassification(): string;
}
