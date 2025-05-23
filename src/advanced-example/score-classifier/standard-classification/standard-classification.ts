import {ClassificationStrategy} from "../classification-strategy";
import {ExcellentStrategy} from "./strategies/excellent-strategy";
import {GoodStrategy} from "./strategies/good-strategy";
import {AverageStrategy} from "./strategies/average-strategy";
import {StrategySet} from "../classification-strategy-set";

export class StandardClassification implements StrategySet {
    getStrategies(): ClassificationStrategy[] {
        return [
            new ExcellentStrategy(),
            new GoodStrategy(),
            new AverageStrategy()
        ];
    }
}