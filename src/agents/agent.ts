
import base32Encode from 'base32-encode';
import { v4 as uuid4 } from 'uuid';


export class Agent {
  private agentId: String;
  public agentSource: String;
  public system: String;
  public messages: String[];
  // public tools: Tool[];
  // private LLMCLiment: LLMClient;
  // private onNetwork: boolean;
  // private networkURI: String;


  constructor(agentSource: String, system: String) {
    this.agentId = this.generateBase32EncodedUuid();
    this.agentSource = agentSource;
    this.system = system;
    this.messages = [];
    // this.tools = [];
  }
  
  calculateChecksum(bytes: Buffer) : number {
    const intValue = BigInt(`0x${bytes.toString('hex')}`);
    return Number(intValue % BigInt(37));
  }

  getChecksumCharacter(checksumValue: number) : string {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTVWXYZ*~$=U';
    return alphabet[Math.abs(checksumValue)];
  }

  generateBase32EncodedUuid(): String {
    const b = Buffer.alloc(16);
    uuid4(null,  b);
    const checksum = this.calculateChecksum(b);
    const checksumChar = this.getChecksumCharacter(checksum);
    return base32Encode(b,'Crockford') + checksumChar;
  }

}
