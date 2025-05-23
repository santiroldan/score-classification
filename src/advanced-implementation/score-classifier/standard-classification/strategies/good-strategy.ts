import { ClassificationStrategy } from "../../classification-strategy";

export class GoodStrategy implements ClassificationStrategy {
    isMatch(score: number): boolean {
        return score > 75;
    }

    getClassification(): string {
        return "Good";
    }
}