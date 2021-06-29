import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

/**
 * Store the validation results of a NodeHistory validation
 */
@Entity()
export class NodeHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 12})
    guild: string;

    @CreateDateColumn()
    validation_date: Date;

    @Column()
    chain_id: String;

    @Column({default: false})
    all_checks_ok: boolean

    @Column()
    api_endpoint: string;

    //todo: add endpoint url check

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
    key_accounts_message: string
}
