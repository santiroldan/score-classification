import {ClassificationStrategy} from "./classification-strategy";

export interface ClassificationStrategySet {
    getStrategies(): ClassificationStrategy[];
}
