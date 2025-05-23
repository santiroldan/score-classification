import { ClassificationStrategy } from "../../classification-strategy";

export class AStrategy implements ClassificationStrategy {
    isMatch(score: number): boolean {
        return score > 90;
    }

    getClassification(): string {
        return "A";
    }
}
