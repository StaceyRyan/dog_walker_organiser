# Dog Walker Organiser

A friend, LW, often uses a dog walker in place of doggy daycare for her canine baby but she finds the current process of contacting the walker and making the appointment tedious. 

LW has also mentioned that the walker finds it challenging to organise her dog pick-ups and drop-offs efficiently.

When we initially workshopped the idea of an "uber for dogs", we only really planned for booking dogs in and making an efficient route for pick ups and drop offs. After work had started on the app, LW mentioned that the dog walker was also having problems with her current invoicing system.  Future versions of the app will therefore include the ability for the walker to collect payments from her clients.

## Table of Contents

1. What does the app do now and what will it do?
2. The technical stuff - what is this app?
3. Setup.

# 1. What does the app do now and what will it do?

*At this point, users can*:
- create an account;
- nominate whether they are a dog parent or a dog walker;
- dog parents can create new dog profiles, edit the profiles and delete them;
- dog walkers can add new walks with start/finish times and and view existing walks.


*In the near future*:
- dog parents will be able to book their dogs into the available walks.
- dog parents will be able to upload a photo of their dog to assist with identification.
- dog walkers will be able to plot an efficient route for pick-ups and drop-offs.
- when a dog walker selects the start/finish time for a walk, it will calculate the cost of the walk and display it on the page.
- dog walkers will be able to generate an invoice
- dog parents will be able to pay for their walk


# 2. The technical stuff - what is this app?

*Technology used*:
- React
- Express.js
- Mongoose with MongoDB
- Node.js

# 3. Setup

- To explore functionality the simple way, run the app from Heroku [https://slrdogs.herokuapp.com/]
- Alternatively, you may download the files from this github. In the root folder, create a .env file in the backend directory.  Assign a PORT number to avoid clashes when you run the front and back end dev servers. Include a SECRET variable.
