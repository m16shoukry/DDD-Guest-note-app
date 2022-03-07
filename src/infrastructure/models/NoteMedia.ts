import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from 'typeorm';
import {Notes} from './Notes';

@Entity('noteMedia')
export class NoteMedia extends BaseEntity {
    @PrimaryGeneratedColumn()
    noteMediaId!: number;

    @Column()
    file!: string;

    @ManyToOne(() => Notes, (note) => note.file)
    note!: Notes;
}
