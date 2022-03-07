import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, OneToMany} from 'typeorm';
import {NoteMedia} from './NoteMedia';
import {Notification} from './Notifications';

@Entity('notes')
export class Notes extends BaseEntity {
    @PrimaryGeneratedColumn()
    noteId!: number;

    @Column()
    title!: string;

    @Column()
    body!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => NoteMedia, (file) => file.file)
    file!: NoteMedia[];

    @OneToMany(() => Notification, (notification) => notification.noteId)
    notification!: Notification;
}
