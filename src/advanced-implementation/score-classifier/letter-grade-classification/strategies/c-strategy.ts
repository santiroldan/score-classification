import { ClassificationStrategy } from "../../classification-strategy";

export class CStrategy implements ClassificationStrategy {
    isMatch(_score: number): boolean {
        return true;
    }

    getClassification(): string {
        return "C";
    }
}