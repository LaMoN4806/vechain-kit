/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface IX2EarnRewardsPoolV3Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "availableFunds"
      | "buildProof"
      | "deposit"
      | "distributeReward"
      | "distributeRewardDeprecated"
      | "distributeRewardWithProof"
      | "version"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "NewDeposit"
      | "RegisterActionFailed"
      | "RewardDistributed"
      | "TeamWithdrawal"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "availableFunds",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "buildProof",
    values: [string[], string[], string[], BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeReward",
    values: [BytesLike, BigNumberish, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeRewardDeprecated",
    values: [BytesLike, BigNumberish, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeRewardWithProof",
    values: [
      BytesLike,
      BigNumberish,
      AddressLike,
      string[],
      string[],
      string[],
      BigNumberish[],
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "availableFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buildProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributeReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeRewardDeprecated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeRewardWithProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace NewDepositEvent {
  export type InputTuple = [
    amount: BigNumberish,
    appId: BytesLike,
    depositor: AddressLike
  ];
  export type OutputTuple = [amount: bigint, appId: string, depositor: string];
  export interface OutputObject {
    amount: bigint;
    appId: string;
    depositor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegisterActionFailedEvent {
  export type InputTuple = [reason: string, lowLevelData: BytesLike];
  export type OutputTuple = [reason: string, lowLevelData: string];
  export interface OutputObject {
    reason: string;
    lowLevelData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardDistributedEvent {
  export type InputTuple = [
    amount: BigNumberish,
    appId: BytesLike,
    receiver: AddressLike,
    proof: string,
    distributor: AddressLike
  ];
  export type OutputTuple = [
    amount: bigint,
    appId: string,
    receiver: string,
    proof: string,
    distributor: string
  ];
  export interface OutputObject {
    amount: bigint;
    appId: string;
    receiver: string;
    proof: string;
    distributor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TeamWithdrawalEvent {
  export type InputTuple = [
    amount: BigNumberish,
    appId: BytesLike,
    teamWallet: AddressLike,
    withdrawer: AddressLike,
    reason: string
  ];
  export type OutputTuple = [
    amount: bigint,
    appId: string,
    teamWallet: string,
    withdrawer: string,
    reason: string
  ];
  export interface OutputObject {
    amount: bigint;
    appId: string;
    teamWallet: string;
    withdrawer: string;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IX2EarnRewardsPoolV3 extends BaseContract {
  connect(runner?: ContractRunner | null): IX2EarnRewardsPoolV3;
  waitForDeployment(): Promise<this>;

  interface: IX2EarnRewardsPoolV3Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  availableFunds: TypedContractMethod<[appId: BytesLike], [bigint], "view">;

  buildProof: TypedContractMethod<
    [
      proofTypes: string[],
      proofValues: string[],
      impactCodes: string[],
      impactValues: BigNumberish[],
      description: string
    ],
    [string],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [amount: BigNumberish, appId: BytesLike],
    [boolean],
    "nonpayable"
  >;

  distributeReward: TypedContractMethod<
    [
      appId: BytesLike,
      amount: BigNumberish,
      receiver: AddressLike,
      proof: string
    ],
    [void],
    "nonpayable"
  >;

  distributeRewardDeprecated: TypedContractMethod<
    [
      appId: BytesLike,
      amount: BigNumberish,
      receiver: AddressLike,
      proof: string
    ],
    [void],
    "nonpayable"
  >;

  distributeRewardWithProof: TypedContractMethod<
    [
      appId: BytesLike,
      amount: BigNumberish,
      receiver: AddressLike,
      proofTypes: string[],
      proofValues: string[],
      impactCodes: string[],
      impactValues: BigNumberish[],
      description: string
    ],
    [void],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [amount: BigNumberish, appId: BytesLike, reason: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "availableFunds"
  ): TypedContractMethod<[appId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "buildProof"
  ): TypedContractMethod<
    [
      proofTypes: string[],
      proofValues: string[],
      impactCodes: string[],
      impactValues: BigNumberish[],
      description: string
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [amount: BigNumberish, appId: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributeReward"
  ): TypedContractMethod<
    [
      appId: BytesLike,
      amount: BigNumberish,
      receiver: AddressLike,
      proof: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributeRewardDeprecated"
  ): TypedContractMethod<
    [
      appId: BytesLike,
      amount: BigNumberish,
      receiver: AddressLike,
      proof: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributeRewardWithProof"
  ): TypedContractMethod<
    [
      appId: BytesLike,
      amount: BigNumberish,
      receiver: AddressLike,
      proofTypes: string[],
      proofValues: string[],
      impactCodes: string[],
      impactValues: BigNumberish[],
      description: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [amount: BigNumberish, appId: BytesLike, reason: string],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "NewDeposit"
  ): TypedContractEvent<
    NewDepositEvent.InputTuple,
    NewDepositEvent.OutputTuple,
    NewDepositEvent.OutputObject
  >;
  getEvent(
    key: "RegisterActionFailed"
  ): TypedContractEvent<
    RegisterActionFailedEvent.InputTuple,
    RegisterActionFailedEvent.OutputTuple,
    RegisterActionFailedEvent.OutputObject
  >;
  getEvent(
    key: "RewardDistributed"
  ): TypedContractEvent<
    RewardDistributedEvent.InputTuple,
    RewardDistributedEvent.OutputTuple,
    RewardDistributedEvent.OutputObject
  >;
  getEvent(
    key: "TeamWithdrawal"
  ): TypedContractEvent<
    TeamWithdrawalEvent.InputTuple,
    TeamWithdrawalEvent.OutputTuple,
    TeamWithdrawalEvent.OutputObject
  >;

  filters: {
    "NewDeposit(uint256,bytes32,address)": TypedContractEvent<
      NewDepositEvent.InputTuple,
      NewDepositEvent.OutputTuple,
      NewDepositEvent.OutputObject
    >;
    NewDeposit: TypedContractEvent<
      NewDepositEvent.InputTuple,
      NewDepositEvent.OutputTuple,
      NewDepositEvent.OutputObject
    >;

    "RegisterActionFailed(string,bytes)": TypedContractEvent<
      RegisterActionFailedEvent.InputTuple,
      RegisterActionFailedEvent.OutputTuple,
      RegisterActionFailedEvent.OutputObject
    >;
    RegisterActionFailed: TypedContractEvent<
      RegisterActionFailedEvent.InputTuple,
      RegisterActionFailedEvent.OutputTuple,
      RegisterActionFailedEvent.OutputObject
    >;

    "RewardDistributed(uint256,bytes32,address,string,address)": TypedContractEvent<
      RewardDistributedEvent.InputTuple,
      RewardDistributedEvent.OutputTuple,
      RewardDistributedEvent.OutputObject
    >;
    RewardDistributed: TypedContractEvent<
      RewardDistributedEvent.InputTuple,
      RewardDistributedEvent.OutputTuple,
      RewardDistributedEvent.OutputObject
    >;

    "TeamWithdrawal(uint256,bytes32,address,address,string)": TypedContractEvent<
      TeamWithdrawalEvent.InputTuple,
      TeamWithdrawalEvent.OutputTuple,
      TeamWithdrawalEvent.OutputObject
    >;
    TeamWithdrawal: TypedContractEvent<
      TeamWithdrawalEvent.InputTuple,
      TeamWithdrawalEvent.OutputTuple,
      TeamWithdrawalEvent.OutputObject
    >;
  };
}
