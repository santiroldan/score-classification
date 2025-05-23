import {ClassificationStrategy} from "./classification-strategy";

export interface StrategySet {
    getStrategies(): ClassificationStrategy[];
}
