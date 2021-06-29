import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";

/**
 * Storing the information about a guild, found on chain
 * Usually stays unchanged during validation. Changes are only made to a guild, if the information on chain changes
 */
@Entity()
export class Guild {

    @PrimaryColumn({unique: true, length: 12})
    name: string;

    @Column()
    chain_id: String;

    @CreateDateColumn()
    tracked_since: Date;

    @Column({nullable: true})
    location: number;

    @Column({nullable: true})
    url: string;

    @Column({nullable: true})
    url_logo_256: string;

    @Column({nullable: true})
    last_validation_id: number;
}
