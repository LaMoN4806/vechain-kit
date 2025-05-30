/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  FunctionFragment,
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
} from "../../../common";

export interface PassportDelegationLogicInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "DelegationCreated"
      | "DelegationPending"
      | "DelegationRevoked"
  ): EventFragment;
}

export namespace DelegationCreatedEvent {
  export type InputTuple = [delegator: AddressLike, delegatee: AddressLike];
  export type OutputTuple = [delegator: string, delegatee: string];
  export interface OutputObject {
    delegator: string;
    delegatee: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DelegationPendingEvent {
  export type InputTuple = [delegator: AddressLike, delegatee: AddressLike];
  export type OutputTuple = [delegator: string, delegatee: string];
  export interface OutputObject {
    delegator: string;
    delegatee: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DelegationRevokedEvent {
  export type InputTuple = [delegator: AddressLike, delegatee: AddressLike];
  export type OutputTuple = [delegator: string, delegatee: string];
  export interface OutputObject {
    delegator: string;
    delegatee: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PassportDelegationLogic extends BaseContract {
  connect(runner?: ContractRunner | null): PassportDelegationLogic;
  waitForDeployment(): Promise<this>;

  interface: PassportDelegationLogicInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "DelegationCreated"
  ): TypedContractEvent<
    DelegationCreatedEvent.InputTuple,
    DelegationCreatedEvent.OutputTuple,
    DelegationCreatedEvent.OutputObject
  >;
  getEvent(
    key: "DelegationPending"
  ): TypedContractEvent<
    DelegationPendingEvent.InputTuple,
    DelegationPendingEvent.OutputTuple,
    DelegationPendingEvent.OutputObject
  >;
  getEvent(
    key: "DelegationRevoked"
  ): TypedContractEvent<
    DelegationRevokedEvent.InputTuple,
    DelegationRevokedEvent.OutputTuple,
    DelegationRevokedEvent.OutputObject
  >;

  filters: {
    "DelegationCreated(address,address)": TypedContractEvent<
      DelegationCreatedEvent.InputTuple,
      DelegationCreatedEvent.OutputTuple,
      DelegationCreatedEvent.OutputObject
    >;
    DelegationCreated: TypedContractEvent<
      DelegationCreatedEvent.InputTuple,
      DelegationCreatedEvent.OutputTuple,
      DelegationCreatedEvent.OutputObject
    >;

    "DelegationPending(address,address)": TypedContractEvent<
      DelegationPendingEvent.InputTuple,
      DelegationPendingEvent.OutputTuple,
      DelegationPendingEvent.OutputObject
    >;
    DelegationPending: TypedContractEvent<
      DelegationPendingEvent.InputTuple,
      DelegationPendingEvent.OutputTuple,
      DelegationPendingEvent.OutputObject
    >;

    "DelegationRevoked(address,address)": TypedContractEvent<
      DelegationRevokedEvent.InputTuple,
      DelegationRevokedEvent.OutputTuple,
      DelegationRevokedEvent.OutputObject
    >;
    DelegationRevoked: TypedContractEvent<
      DelegationRevokedEvent.InputTuple,
      DelegationRevokedEvent.OutputTuple,
      DelegationRevokedEvent.OutputObject
    >;
  };
}
