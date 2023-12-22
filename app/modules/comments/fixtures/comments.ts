import { marvin } from "~/modules/users/fixtures/users";
import { Comment } from "../types";

export const comments: Comment[] = [
  {
    uuid: "c1",
    author: marvin,
    content: "This is an interesting topic!",
    date: new Date("2023-01-01T12:00:00"),
    replies: [
      {
        uuid: "r1",
        content: "I'm glad you find it interesting!",
        date: new Date("2023-01-01T12:05:00"),
        author: marvin,
      },
      {
        uuid: "r2",
        content: "What specifically caught your attention?",
        date: new Date("2023-01-01T12:10:00"),
        author: marvin,
      },
    ],
    positionX: 30,
    positionY: 40,
  },
  {
    uuid: "c2",
    author: marvin,
    content: "I have a different perspective on this issue.",
    date: new Date("2023-01-02T15:30:00"),
    replies: [
      {
        uuid: "r3",
        content: "I'd love to hear your perspective! What do you think?",
        date: new Date("2023-01-02T15:35:00"),
        author: marvin,
      },
      {
        uuid: "r4",
        content:
          "It's always good to have diverse opinions. Share your thoughts!",
        date: new Date("2023-01-02T15:40:00"),
        author: marvin,
      },
    ],
    positionX: 50,
    positionY: 60,
  },
  {
    uuid: "c3",
    author: marvin,
    content: "I completely agree with the main points raised here.",
    date: new Date("2023-01-03T18:45:00"),
    replies: [
      {
        uuid: "r5",
        content: "It's great to find like-minded individuals!",
        date: new Date("2023-01-03T18:50:00"),
        author: marvin,
      },
      {
        uuid: "r6",
        content: "What aspects of the discussion resonated with you the most?",
        date: new Date("2023-01-03T18:55:00"),
        author: marvin,
      },
    ],
    positionX: 70,
    positionY: 80,
  },
];
