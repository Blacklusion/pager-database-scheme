import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";

/**
 * Stores the validation results of an Api validation
 * An Api validation contains a relation to a potential history validation
 */
@Entity()
export class Atomic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12 })
  guild: string;

  @CreateDateColumn()
  validation_date: Date;

  @Column({ default: false })
  validation_is_mainnet: boolean;

  @Column({ default: false })
  all_checks_ok: boolean

  @Column()
  api_endpoint: string;

  @Column({ default: false })
  is_ssl: boolean

  @Column({ default: false })
  ssl_ok: boolean

  @Column({ default: null })
  ssl_message: string

  @Column({default: false})
  location_ok: boolean;

  @Column({default: false})
  health_found: boolean

  @Column({default: null})
  health_found_message: string

  @Column({default: false})
  health_postgres_ok: boolean

  @Column({default: false})
  health_redis_ok: boolean

  @Column({default: false})
  health_chain_ok: boolean

  @Column({default: false})
  health_services_ok: boolean

  @Column({default: null})
  health_services_message: string

  @Column({default: false})
  health_total_indexed_blocks_ok: boolean

  @Column({default: null})
  health_total_indexed_blocks_message: string

  @Column({default: false})
  alive_ok: boolean

  @Column({default: null})
  alive_message: string

  @Column({default: false})
  assets_ok: boolean

  @Column({nullable: true})
  assets_ms: number;

  @Column({default: null})
  assets_message: string

  @Column({default: false})
  collections_ok: boolean

  @Column({nullable: true})
  collections_ms: number;

  @Column({default: null})
  collections_message: string

  @Column({default: false})
  schemas_ok: boolean

  @Column({nullable: true})
  schemas_ms: number;

  @Column({default: null})
  schemas_message: string
}
