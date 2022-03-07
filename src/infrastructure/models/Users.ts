import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert, OneToMany} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {Notification} from './Notifications';
import {receivedNotes} from './ReceivedNotes';

@Entity('users')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    userId!: string;

    @Column()
    userName!: string;

    @Column()
    profilePic!: string;

    @Column()
    notifyMe!: boolean;

    @BeforeInsert()
    createUuid() {
        this.userId = uuid();
    }

    @OneToMany(() => Notification, (notification) => notification.notifyId)
    notification!: Notification;

    @OneToMany(() => receivedNotes, (receivedNotes) => receivedNotes.noteId)
    noteId!: receivedNotes;
}
