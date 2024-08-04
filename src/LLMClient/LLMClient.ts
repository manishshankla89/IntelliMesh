 import { CreateMLCEngine } from "@mlc-ai/web-llm";
 import { MLCEngine } from "@mlc-ai/web-llm";

abstract class LLMClient {
}

export enum ModelEnum {
    DEFAULT = "Llama-3.1-8B-Instruct-q4f32_1-MLC",
    CUSTOM = "customModel"
}

export class LocalLLMCLient extends LLMClient {
    public LLMModel : ModelEnum;
    public engine : MLCEngine | null;

    constructor(model : ModelEnum = ModelEnum.DEFAULT, engine: MLCEngine | null ) {
        super();
        this.LLMModel =  model;
        this.engine = engine;
    }

}

