import * as Resources from "./openai";

export class Spending {
	openai: Resources.OpenAI = new Resources.OpenAI(this);
}
