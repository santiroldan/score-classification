import { ClassificationStrategy } from "../classification-strategy";

export class ExcellentStrategy implements ClassificationStrategy {
    isMatch(score: number): boolean {
        return score > 90;
    }

    getClassification(): string {
        return "Excellent";
    }
}
