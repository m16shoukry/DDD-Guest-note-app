import {Entity, BaseEntity, UpdateDateColumn, ManyToOne, ManyToMany} from 'typeorm';
import {Notes} from './Notes';
import {Users} from './Users';

@Entity('receivedNotes')
export class receivedNotes extends BaseEntity {
    @ManyToMany(() => Notes, (note) => note.noteId)
    noteId!: number;

    @ManyToOne(() => Users, (user) => user.userId)
    userId!: string;

    @UpdateDateColumn()
    deleteAt!: Date;
}
