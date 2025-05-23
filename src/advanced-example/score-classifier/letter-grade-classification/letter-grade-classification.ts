import {ClassificationStrategy} from "../classification-strategy";
import {AStrategy} from "./strategies/a-strategy";
import {BStrategy} from "./strategies/b-strategy";
import {CStrategy} from "./strategies/c-strategy";
import {ClassificationStrategySet} from "../classification-strategy-set";

export class LetterGradeClassification implements ClassificationStrategySet {
    getStrategies(): ClassificationStrategy[] {
        return [
            new AStrategy(),
            new BStrategy(),
            new CStrategy()
        ];
    }
}