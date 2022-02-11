import {Bug} from './model/Bug'

export const BUGS: Bug[] = [
  {
    id: 1,
    title: "bug 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam lectus nisi, id faucibus ante placerat a. Phasellus tincidunt ac tellus id feugiat. Donec tempus eros sit amet arcu eleifend, vitae fermentum metus fringilla. Donec congue, justo sed egestas pulvinar, leo augue interdum dolor, id iaculis enim turpis et dui. Quisque non nisi porta, imperdiet turpis at, molestie mauris. Quisque sed magna ut neque rutrum vulputate non sit amet libero.",
    status: 1,
    priority: 1,
    nbReport: 15,
    dueDate: new Date(),
    createdDate: new Date()
  },
  {
    id: 2,
    title: "bug 2",
    description: "Pellentesque in felis vel metus dictum faucibus. Donec mattis ultrices sapien at luctus. Pellentesque non augue quam. In tristique, nunc quis laoreet pretium, justo erat iaculis libero, ut condimentum augue est semper elit. In ullamcorper quam a enim molestie sagittis. Vivamus ullamcorper neque leo, tincidunt pharetra diam gravida eget.",
    status: 1,
    priority: 3,
    nbReport: 1,
    dueDate: new Date(),
    createdDate: new Date()
  },
  {
    id: 3,
    title: "bug 3",
    description: "Sed felis ex, tempor ut metus eget, vestibulum posuere neque.",
    status: 1,
    priority: 2,
    nbReport: 3,
    dueDate: new Date(),
    createdDate: new Date()
  },
]
