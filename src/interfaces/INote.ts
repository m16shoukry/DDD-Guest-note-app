export default interface INote {
    noteId: number;
    title: string;
    body: string;
    typeName: string;
    noteMedia?: string[];
    createdAt?: string;
}
