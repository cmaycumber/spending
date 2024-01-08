import type { Spending } from "./index";

export class APIResource {
	protected _client: Spending;

	constructor(client: Spending) {
		this._client = client;
	}
}
