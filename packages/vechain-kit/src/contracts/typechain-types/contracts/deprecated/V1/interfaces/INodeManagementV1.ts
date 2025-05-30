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

export interface INodeManagementV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "delegateNode"
      | "getNodeIds"
      | "getNodeLevel"
      | "getNodeManager"
      | "getUsersNodeLevels"
      | "initialize"
      | "isNodeManager"
      | "removeNodeDelegation"
      | "setVechainNodesContract"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NodeDelegated" | "VechainNodeContractSet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "delegateNode",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNodeIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNodeLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNodeManager",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUsersNodeLevels",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isNodeManager",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeNodeDelegation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVechainNodesContract",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "delegateNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNodeIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNodeLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNodeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUsersNodeLevels",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isNodeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeNodeDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVechainNodesContract",
    data: BytesLike
  ): Result;
}

export namespace NodeDelegatedEvent {
  export type InputTuple = [
    nodeId: BigNumberish,
    delegatee: AddressLike,
    delegated: boolean
  ];
  export type OutputTuple = [
    nodeId: bigint,
    delegatee: string,
    delegated: boolean
  ];
  export interface OutputObject {
    nodeId: bigint;
    delegatee: string;
    delegated: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VechainNodeContractSetEvent {
  export type InputTuple = [
    oldContractAddress: AddressLike,
    newContractAddress: AddressLike
  ];
  export type OutputTuple = [
    oldContractAddress: string,
    newContractAddress: string
  ];
  export interface OutputObject {
    oldContractAddress: string;
    newContractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface INodeManagementV1 extends BaseContract {
  connect(runner?: ContractRunner | null): INodeManagementV1;
  waitForDeployment(): Promise<this>;

  interface: INodeManagementV1Interface;

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

  delegateNode: TypedContractMethod<
    [delegatee: AddressLike],
    [void],
    "nonpayable"
  >;

  getNodeIds: TypedContractMethod<[user: AddressLike], [bigint[]], "view">;

  getNodeLevel: TypedContractMethod<[nodeId: BigNumberish], [bigint], "view">;

  getNodeManager: TypedContractMethod<[nodeId: BigNumberish], [string], "view">;

  getUsersNodeLevels: TypedContractMethod<
    [user: AddressLike],
    [bigint[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      vechainNodesContract: AddressLike,
      admin: AddressLike,
      upgrader: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isNodeManager: TypedContractMethod<
    [user: AddressLike, nodeId: BigNumberish],
    [boolean],
    "view"
  >;

  removeNodeDelegation: TypedContractMethod<[], [void], "nonpayable">;

  setVechainNodesContract: TypedContractMethod<
    [vechainNodesContract: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "delegateNode"
  ): TypedContractMethod<[delegatee: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getNodeIds"
  ): TypedContractMethod<[user: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getNodeLevel"
  ): TypedContractMethod<[nodeId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNodeManager"
  ): TypedContractMethod<[nodeId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getUsersNodeLevels"
  ): TypedContractMethod<[user: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      vechainNodesContract: AddressLike,
      admin: AddressLike,
      upgrader: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isNodeManager"
  ): TypedContractMethod<
    [user: AddressLike, nodeId: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeNodeDelegation"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVechainNodesContract"
  ): TypedContractMethod<
    [vechainNodesContract: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "NodeDelegated"
  ): TypedContractEvent<
    NodeDelegatedEvent.InputTuple,
    NodeDelegatedEvent.OutputTuple,
    NodeDelegatedEvent.OutputObject
  >;
  getEvent(
    key: "VechainNodeContractSet"
  ): TypedContractEvent<
    VechainNodeContractSetEvent.InputTuple,
    VechainNodeContractSetEvent.OutputTuple,
    VechainNodeContractSetEvent.OutputObject
  >;

  filters: {
    "NodeDelegated(uint256,address,bool)": TypedContractEvent<
      NodeDelegatedEvent.InputTuple,
      NodeDelegatedEvent.OutputTuple,
      NodeDelegatedEvent.OutputObject
    >;
    NodeDelegated: TypedContractEvent<
      NodeDelegatedEvent.InputTuple,
      NodeDelegatedEvent.OutputTuple,
      NodeDelegatedEvent.OutputObject
    >;

    "VechainNodeContractSet(address,address)": TypedContractEvent<
      VechainNodeContractSetEvent.InputTuple,
      VechainNodeContractSetEvent.OutputTuple,
      VechainNodeContractSetEvent.OutputObject
    >;
    VechainNodeContractSet: TypedContractEvent<
      VechainNodeContractSetEvent.InputTuple,
      VechainNodeContractSetEvent.OutputTuple,
      VechainNodeContractSetEvent.OutputObject
    >;
  };
}
