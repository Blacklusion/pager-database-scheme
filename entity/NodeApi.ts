import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import {NodeHistory} from "./NodeHistory";

/**
 * Stores the validation results of an NodeApi validation
 * An NodeApi validation contains a relation to a potential history validation
 */
@Entity()
export class NodeApi {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 12})
    guild: string;

    @CreateDateColumn()
    validation_date: Date;

    @Column({default: false})
    validation_is_mainnet: boolean;

    @Column({default: false})
    all_checks_ok: boolean

    @Column()
    api_endpoint: string;

    @Column({default: false})
    is_ssl: boolean

    @Column({default: false})
    ssl_ok: boolean

    @Column({default: null})
    ssl_message: string

    @Column({default: false})
    location_ok: boolean;

    @Column({default: false})
    get_info_ok: boolean;

    @Column({nullable: true})
    get_info_ms: number;

    @Column({default: null})
    get_info_message: string

    @Column({default: false})
    server_version_ok: boolean;

    @Column({nullable: true})
    server_version: string;

    @Column({default: false})
    correct_chain: boolean;

    @Column({default: false})
    head_block_delta_ok: boolean;

    @Column({nullable: true})
    head_block_delta_ms: number;

    @Column({default: null})
    head_block_delta_message: string

    @Column({default: false})
    block_one_ok: boolean;

    @Column({nullable: true})
    block_one_ms: number;

    @Column({default: null})
    block_one_message: string

    @Column({default: false})
    verbose_error_ok: boolean;

    @Column({nullable: true})
    verbose_error_ms: number;

    @Column({default: null})
    verbose_error_message: string

    @Column({default: false})
    abi_serializer_ok: boolean;

    @Column({nullable: true})
    abi_serializer_ms: number;

    @Column({default: null})
    abi_serializer_message: string

    @Column({default: false})
    basic_symbol_ok: boolean;

    @Column({nullable: true})
    basic_symbol_ms: number;

    @Column({default: null})
    basic_symbol_message: string

    @Column({default: false})
    producer_api_off: boolean;

    @Column({nullable: true})
    producer_api_ms: number;

    @Column({default: null})
    producer_api_message: string

    @Column({default: false})
    db_size_api_off: boolean;

    @Column({nullable: true})
    db_size_api_ms: number;

    @Column({default: null})
    db_size_api_message: string

    @Column({default: false})
    net_api_off: boolean;

    @Column({nullable: true})
    net_api_ms: number;

    @Column({default: null})
    net_api_message: string

    @Column({default: false})
    wallet_accounts_ok: boolean;

    @Column({nullable: true})
    wallet_accounts_ms: number;

    @Column({default: null})
    wallet_accounts_message: string

    @Column({default: false})
    wallet_keys_ok: boolean;

    @Column({nullable: true})
    wallet_keys_ms: number;

    @Column({default: null})
    wallet_keys_message: string

    @Column({default: false})
    wallet_all_checks_ok: boolean;

    @Column({default: false})
    bp_json_all_features_ok: boolean;

    @Column({default: null})
    bp_json_all_features_message: string


    @OneToOne(type => NodeHistory, {eager: true})
    @JoinColumn()
    history_validation: NodeHistory;
}
