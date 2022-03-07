import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from 'typeorm';
import {Notes} from './Notes';
import {Users} from './Users';

@Entity('notifications')
export class Notification extends BaseEntity {
    @PrimaryGeneratedColumn()
    notifyId!: number;

    @Column()
    title!: string;

    @Column()
    body!: string;

    @ManyToOne(() => Users, (userId) => userId.userId)
    userId!: string;

    @ManyToOne(() => Notes, (noteId) => noteId.noteId)
    noteId!: number;
}
