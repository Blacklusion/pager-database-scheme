import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

/**
 * Stores the validation results of an seed / p2p validation
 */
@Entity()
export class NodeSeed {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 12})
    guild: String;

    @CreateDateColumn()
    validation_date: Date;

    @Column()
    p2p_endpoint: string;

    @Column()
    validation_is_mainnet: boolean;

    @Column({default: false})
    location_ok: boolean;

    @Column({default: false})
    all_checks_ok: boolean;

    @Column({default: false})
    p2p_endpoint_address_ok: boolean;

    @Column({default: false})
    p2p_connection_possible: boolean;

    @Column({default: null})
    p2p_connection_possible_message: string

    @Column({default: false})
    block_transmission_speed_ok: boolean;

    @Column({nullable: true})
    block_transmission_speed_ms: number;
}
