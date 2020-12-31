import { transport } from '@coolwallet/core';
export type Transport = transport.default;

export type signTxType = {
  transport: Transport,
  appPrivateKey: string,
  appId: string,
  signatureBase: Buffer,
  transaction: object,
  protocol: PROTOCOL | undefined,
  confirmCB: Function | undefined,
  authorizedCB: Function | undefined,
}

export type versionByteNames = 'ed25519PublicKey' | 'ed25519SecretSeed' | 'preAuthTx' | 'sha256Hash';

export const path_bip44 = '328000002C8000009480000000'
export const path_slip0010 = '108000002C8000009480000000'
export const coinType = '94'

export enum COIN_SPECIES{
  XLM = 'XLM', KAU = 'KAU', KAG = 'KAG', 
}

export enum PROTOCOL {
  BIP44 = 'BIP44', SLIP0010 = 'SLIP0010'
}
