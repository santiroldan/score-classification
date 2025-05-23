import {ClassificationStrategy} from "./classification-strategy";
import {StrategySet} from "./classification-strategy-set";

export class ScoreClassifier {
    private strategies: ClassificationStrategy[];

    constructor(strategySet: StrategySet) {
        this.strategies = strategySet.getStrategies();
    }

    classify(score: number): string {
        const strategy = this.strategies.find(s => s.isMatch(score)) ?? { getClassification: () => "Unknown" };
        return strategy.getClassification();
    }
}