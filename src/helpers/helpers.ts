

import base32Encode from 'base32-encode';
import { v4 as uuid4 } from 'uuid';


function calculateChecksum(bytes: Buffer) : number {
    const intValue = BigInt(`0x${bytes.toString('hex')}`);
    return Number(intValue % BigInt(37));
  }

function getChecksumCharacter(checksumValue: number) : string {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTVWXYZ*~$=U';
    return alphabet[Math.abs(checksumValue)];
  }

export function generateBase32EncodedUuid(): String {
    const b = Buffer.alloc(16);
    uuid4(null,  b);
    const checksum = calculateChecksum(b);
    const checksumChar = getChecksumCharacter(checksum);
    return base32Encode(b,'Crockford') + checksumChar;
  };
