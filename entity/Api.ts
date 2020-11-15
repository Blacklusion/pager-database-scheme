import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import {History} from "./History";

/**
 * Stores the validation results of an Api validation
 * An Api validation contains a relation to a potential history validation
 */
@Entity()
export class Api {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 12})
    guild: string;

    @CreateDateColumn()
    validation_date: Date;

    @Column({default: false})
    all_checks_ok: boolean

    @Column()
    api_endpoint: string;

    @Column({default: false})
    is_ssl: boolean

    @Column({default: false})
    ssl_ok: boolean

    @Column({default: false})
    location_ok: boolean;

    @Column({default: false})
    get_info_ok: boolean;

    @Column({nullable: true})
    get_info_ms: number;

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

    @Column({default: false})
    block_one_ok: boolean;

    @Column({nullable: true})
    block_one_ms: number;

    @Column({default: false})
    verbose_error_ok: boolean;

    @Column({nullable: true})
    verbose_error_ms: number;

    @Column({default: false})
    abi_serializer_ok: boolean;

    @Column({nullable: true})
    abi_serializer_ms: number;

    @Column({default: false})
    basic_symbol_ok: boolean;

    @Column({nullable: true})
    basic_symbol_ms: number;

    @Column({default: false})
    producer_api_off: boolean;

    @Column({nullable: true})
    producer_api_ms: number;

    @Column({default: false})
    db_size_api_off: boolean;

    @Column({nullable: true})
    db_size_api_ms: number;

    @Column({default: false})
    net_api_off: boolean;

    @Column({nullable: true})
    net_api_ms: number;

    @Column({default: false})
    wallet_accounts_ok: boolean;

    @Column({nullable: true})
    wallet_accounts_ms: number;

    @Column({default: false})
    wallet_keys_ok: boolean;

    @Column({nullable: true})
    wallet_keys_ms: number;

    @Column({default: false})
    wallet_all_checks_ok: boolean

    @Column({default: false})
    bp_json_all_features_ok

    @OneToOne(type => History, {eager: true})
    @JoinColumn()
    history_validation: History;
}
