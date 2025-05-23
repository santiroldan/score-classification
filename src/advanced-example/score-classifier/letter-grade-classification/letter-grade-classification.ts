import {ClassificationStrategy} from "../classification-strategy";
import {AStrategy} from "./strategies/a-strategy";
import {BStrategy} from "./strategies/b-strategy";
import {CStrategy} from "./strategies/c-strategy";
import {StrategySet} from "../classification-strategy-set";

export class LetterGradeClassification implements StrategySet {
    getStrategies(): ClassificationStrategy[] {
        return [
            new AStrategy(),
            new BStrategy(),
            new CStrategy()
        ];
    }
}