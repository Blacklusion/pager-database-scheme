import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany } from "typeorm";
import {Seed} from "./Seed";
import {Api} from "./Api";
import { Atomic } from "./Atomic";

/**
 * Stores the validation results of an organization validation
 * An organization validation contains all relations to corresponding Api and Seed validations
 */
@Entity()
export class Organization {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 12})
    guild: String;

    @Column()
    validation_is_mainnet: boolean;

    @CreateDateColumn()
    validation_date: Date;

    @Column({default: null})
    reg_location: number;

    @Column({default: false})
    reg_location_ok: boolean;

    @Column({default: false})
    reg_website_ok: boolean;

    @Column({nullable: true})
    reg_website_ms: number;

    @Column({default: null})
    reg_website_message: string

    @Column({default: false})
    chains_json_ok: boolean;

    @Column({nullable: true})
    chains_json_ms: number;

    @Column({default: null})
    chains_json_message: string

    @Column({default: false})
    chains_json_access_control_header_ok: boolean;

    @Column({default: false})
    bpjson_found: boolean;

    @Column({default: null})
    bpjson_found_message: string

    @Column({default: false})
    bpjson_producer_account_name_ok: boolean;

    @Column({default: null})
    bpjson_producer_account_name_message: string

    @Column({default: false})
    bpjson_candidate_name_ok: boolean;

    @Column({default: false})
    bpjson_website_ok: boolean;

    @Column({nullable: true})
    bpjson_website_ms: number;

    @Column({default: null})
    bpjson_website_message: string

    @Column({default: false})
    bpjson_code_of_conduct_ok: boolean;

    @Column({nullable: true})
    bpjson_code_of_conduct_ms: number;

    @Column({default: null})
    bpjson_code_of_conduct_message: string

    @Column({default: false})
    bpjson_ownership_disclosure_ok: boolean;

    @Column({nullable: true})
    bpjson_ownership_disclosure_ms: number;

    @Column({default: null})
    bpjson_ownership_disclosure_message: string

    @Column({default: false})
    bpjson_email_ok: boolean;

    @Column({default: null})
    bpjson_email_message: string

    @Column({default: false})
    bpjson_github_user_ok: boolean;

    @Column({default: null})
    bpjson_github_user_message: string

    @Column({default: false})
    bpjson_chain_resources_ok: boolean;

    @Column({default: null})
    bpjson_chain_resources_message: string

    @Column({default: false})
    bpjson_other_resources_ok: boolean;

    @Column({default: null})
    bpjson_other_resources_message: string

    @Column({default: false})
    bpjson_branding_ok: boolean;

    @Column({default: null})
    bpjson_branding_message: string

    @Column({default: false})
    bpjson_location_ok: boolean;

    @Column({default: false})
    bpjson_social_ok: boolean;

    @Column({default: false})
    bpjson_matches_onchain: boolean;

    @Column({default: false})
    nodes_producer_found: boolean;

    @ManyToMany(type => Seed, {eager: true})
    @JoinTable()
    nodes_seed: Seed[];

    @ManyToMany(type => Api, {eager: true})
    @JoinTable()
    nodes_api: Api[];

    @ManyToMany(type => History, {eager: true})
    @JoinTable()
    nodes_history: History[];

    @ManyToMany(type => Atomic, {eager: true})
    @JoinTable()
    nodes_atomic: Atomic[];
}
