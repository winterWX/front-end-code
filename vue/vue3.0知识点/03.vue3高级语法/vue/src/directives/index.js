import timeFromat from "./time-format";
import inputFocus from "./inputFocus";

export default function registerDirective(app){
	timeFromat(app);
	inputFocus(app);
}