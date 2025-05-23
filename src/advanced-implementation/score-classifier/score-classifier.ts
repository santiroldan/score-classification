import {ClassificationStrategy} from "./classification-strategy";
import {ClassificationStrategySet} from "./classification-strategy-set";

export class ScoreClassifier {
    private strategies: ClassificationStrategy[];

    constructor(strategySet: ClassificationStrategySet) {
        this.strategies = strategySet.getStrategies();
    }

    classify(score: number): string {
        const strategy = this.strategies.find(s => s.isMatch(score));

        if (!strategy) {
            throw new Error(`No strategy found for score: ${score}`);
        }

        return strategy.getClassification();
    }
}