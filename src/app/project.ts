export interface Task {
  id: number;
  text: string;
  is_completed: boolean;
  project_id: number;
}

export interface Project {
  id: number;
  title: string;
  todos: Array<Task>;
}
