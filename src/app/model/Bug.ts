export interface Bug {
  id?: number
  title: string
  description: string
  status: number
  priority: number
  nbReport: number
  dueDate?: Date
  createdDate: Date
  fixedDate?: Date
}
