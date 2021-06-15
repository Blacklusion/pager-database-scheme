import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

/**
 * Store the validation results of a Hyperion validation
 */
@Entity()
export class Hyperion {
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
  health_found: boolean

  @Column({default: null})
  health_found_message: string

  @Column({default: false})
  health_version_ok: boolean

  @Column({default: false})
  health_host_ok: boolean

  @Column({default: false})
  health_query_time_ok: boolean

  @Column({nullable: true})
  health_query_time_ms: number

  @Column({default: null})
  health_query_time_message: string

  @Column({default: false})
  health_all_features_ok: boolean

  @Column({default: null})
  health_all_features_message: string

  @Column({default: false})
  health_elastic_ok: boolean

  @Column({default: false})
  health_rabbitmq_ok: boolean

  @Column({default: false})
  health_nodeosrpc_ok: boolean

  @Column({default: null})
  health_nodeosrpc_message: string

  @Column({default: false})
  health_total_indexed_blocks_ok: boolean

  @Column({default: null})
  health_total_indexed_blocks_message: string

  @Column({default: null})
  health_missing_blocks: number

  @Column({default: false})
  transaction_ok: boolean

  @Column({nullable: true})
  transaction_ms: number

  @Column({default: null})
  transaction_message: string

  @Column({default: false})
  actions_ok: boolean

  @Column({nullable: true})
  actions_ms: number

  @Column({default: null})
  actions_message: string

  @Column({default: false})
  key_accounts_ok: boolean

  @Column({nullable: true})
  key_accounts_ms: number

  @Column({default: null})
  key_accounts_message: string
}