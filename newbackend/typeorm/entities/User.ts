import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column({unique:true})
    email!: string;

    @Column()
    contactnumber!: string;

    @Column({ type: "date" })
    dob!: Date;

    @Column()
    gender!: string;

    @Column({ name: "created_at", default: new Date(), type: 'timestamptz' })
    createdAt!: Date;

    @Column()
    password!: string;

    @Column({nullable:true})
    activation_token!: string;

    @Column({ default: false})
    is_active!: boolean;

    @Column({ default: false})
    is_deleted!: boolean;

    @Column({ name: "token_createdat",nullable:true, type: 'timestamptz' })
    token_createdAt!: Date;

    @Column({ name: "updated_at", default: new Date(), type: 'timestamptz' })
    updatedAt!: Date;

}
