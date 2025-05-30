/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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
} from "../../../../../common";

export interface GovernorDepositLogicV4Interface extends Interface {
  getEvent(
    nameOrSignatureOrTopic: "ProposalDeposit" | "ProposalWithdraw"
  ): EventFragment;
}

export namespace ProposalDepositEvent {
  export type InputTuple = [
    depositor: AddressLike,
    proposalId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    depositor: string,
    proposalId: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    depositor: string;
    proposalId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalWithdrawEvent {
  export type InputTuple = [
    withdrawer: AddressLike,
    proposalId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    withdrawer: string,
    proposalId: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    withdrawer: string;
    proposalId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GovernorDepositLogicV4 extends BaseContract {
  connect(runner?: ContractRunner | null): GovernorDepositLogicV4;
  waitForDeployment(): Promise<this>;

  interface: GovernorDepositLogicV4Interface;

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
    key: "ProposalDeposit"
  ): TypedContractEvent<
    ProposalDepositEvent.InputTuple,
    ProposalDepositEvent.OutputTuple,
    ProposalDepositEvent.OutputObject
  >;
  getEvent(
    key: "ProposalWithdraw"
  ): TypedContractEvent<
    ProposalWithdrawEvent.InputTuple,
    ProposalWithdrawEvent.OutputTuple,
    ProposalWithdrawEvent.OutputObject
  >;

  filters: {
    "ProposalDeposit(address,uint256,uint256)": TypedContractEvent<
      ProposalDepositEvent.InputTuple,
      ProposalDepositEvent.OutputTuple,
      ProposalDepositEvent.OutputObject
    >;
    ProposalDeposit: TypedContractEvent<
      ProposalDepositEvent.InputTuple,
      ProposalDepositEvent.OutputTuple,
      ProposalDepositEvent.OutputObject
    >;

    "ProposalWithdraw(address,uint256,uint256)": TypedContractEvent<
      ProposalWithdrawEvent.InputTuple,
      ProposalWithdrawEvent.OutputTuple,
      ProposalWithdrawEvent.OutputObject
    >;
    ProposalWithdraw: TypedContractEvent<
      ProposalWithdrawEvent.InputTuple,
      ProposalWithdrawEvent.OutputTuple,
      ProposalWithdrawEvent.OutputObject
    >;
  };
}
