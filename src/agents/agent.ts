import { LocalLLMCLient, ModelEnum } from '../LLMClient/LLMClient';
import { CreateMLCEngine, InitProgressReport, MLCEngine } from "@mlc-ai/web-llm";
import { generateBase32EncodedUuid } from "../helpers/helpers"
import * as webllm from "@mlc-ai/web-llm";

export class Agent {
  private agentId: String;
  public agentSource: String;
  public system: String;
  public messages: String[];
  public LLMClient: LocalLLMCLient | null;
  // public tools: Tool[];
  // private onNetwork: boolean;
  // private networkURI: String;

  constructor(agentSource: String, system: String, llmClient : LocalLLMCLient | null ) {
    this.agentId = generateBase32EncodedUuid();
    this.agentSource = agentSource;
    this.system = system;
    this.messages = [];
    this.LLMClient = null;
    // this.tools = [];
  }
  


}



