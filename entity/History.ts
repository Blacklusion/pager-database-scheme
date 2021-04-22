import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

/**
 * Store the validation results of a History validation
 */
@Entity()
export class History {

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
    accounts_message: string
}
