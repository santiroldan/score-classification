import {ClassificationStrategy} from "./classification-strategy";
import {ExcellentStrategy} from "./strategies/excellent-strategy";
import {GoodStrategy} from "./strategies/good-strategy";
import {AverageStrategy} from "./strategies/average-strategy";

export class ScoreClassifier {
    private strategies: ClassificationStrategy[];

    constructor() {
        this.strategies = [
            new ExcellentStrategy(),
            new GoodStrategy(),
            new AverageStrategy()
        ];
    }

    classify(score: number): string {
        const strategy = this.strategies.find(s => s.isMatch(score)) ?? new AverageStrategy();
        
        return strategy.getClassification();
    }
}