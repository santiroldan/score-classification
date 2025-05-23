import { ClassificationStrategy } from "../../classification-strategy";

export class AverageStrategy implements ClassificationStrategy {
    isMatch(_score: number): boolean {
        return true;
    }

    getClassification(): string {
        return "Average";
    }
}