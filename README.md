# Events NextJs App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About App
Demo Application that handles filtering and showing events and events details!

## Built Using
- NextJs(SSG,SWR) 
- ReactJs
- CSS Module
- Firebase
## Note
Before cloning it make sure you create realtime Database in Firebase with this form:
  ```bash
  {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
  ```
 `ALSO`, Make sure to create in realtime database events.json
## Screenshots
### Home
![image](https://user-images.githubusercontent.com/102517583/187242595-72ffc836-a664-4a61-a813-7a357ba405d2.png)
## All Events
![image](https://user-images.githubusercontent.com/102517583/187242625-f69ff261-f4dd-4478-8621-729136f1e226.png)
## An Event
![image](https://user-images.githubusercontent.com/102517583/187242692-9ee56fbd-0063-439f-933a-9d73f4859e85.png)
