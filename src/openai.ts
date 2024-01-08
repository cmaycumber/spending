const models = {
	"gpt-3.5-turbo-1106": {
		inputTokenPrice: 0.001 / 1000,
		outputTokenPrice: 0.002 / 1000,
	},
};

type Model = keyof typeof models;

export const openai = {
	/** Calculate the cost of a given input */
	cost(params: {
		model: Model;
		promptTokens: number;
		completionTokens: number;
	}) {
		const { model } = params;

		const modelInfo = models[model];

		if (!modelInfo) {
			throw new Error(`Invalid model: ${model}`);
		}

		const { inputTokenPrice, outputTokenPrice } = modelInfo;

		const inputCost = inputTokenPrice * params.promptTokens;
		const outputCost = outputTokenPrice * params.completionTokens;

		return {
			inputCost,
			outputCost,
			totalCost: inputCost + outputCost,
		};
	},
};
