import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany} from 'typeorm';
import {Notes} from './Notes';

@Entity('noteType')
export class NoteType extends BaseEntity {
    @PrimaryGeneratedColumn()
    noteTypeId!: number;

    @Column()
    typeName!: string;

    @ManyToMany(() => Notes, (note) => note.noteId)
    noteId!: number;
}
