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
}
