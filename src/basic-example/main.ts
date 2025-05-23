import {ScoreClassifier} from "./score-classifier/score-classifier";

const classifier = new ScoreClassifier();

console.log('Score 95 -> ', classifier.classify(95));
console.log('Score 80 -> ', classifier.classify(80));
console.log('Score 60 -> ', classifier.classify(60));
