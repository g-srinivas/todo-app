export class ToDoItem {
  readonly id: number;
  readonly title: string;
  readonly complete: boolean;
  constructor({
    id,
    title,
    complete
  }: {
    id: number;
    title: string;
    complete: boolean;
  }) {
    this.id = id;
    this.title = title;
    this.complete = complete;
  }
}
