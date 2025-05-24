import {ScoreClassifier} from "./score-classifier/score-classifier";
import {LetterGradeClassification} from "./score-classifier/letter-grade-classification/letter-grade-classification";
import {StandardClassification} from "./score-classifier/standard-classification/standard-classification";

console.group('Standard Classification');
const classifier1 = new ScoreClassifier(new StandardClassification());
console.log('Score 92 -> ', classifier1.classify(92));
console.log('Score 85 -> ', classifier1.classify(85));
console.log('Score 70 -> ', classifier1.classify(70));
console.groupEnd();

console.log('----------------------------------------');

console.group('Letter Grade Classification');
const classifier2 = new ScoreClassifier(new LetterGradeClassification());
console.log('Score 92 -> ', classifier2.classify(92));
console.log('Score 85 -> ', classifier2.classify(85));
console.log('Score 70 -> ', classifier2.classify(70));
console.groupEnd();