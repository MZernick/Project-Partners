# ProPairs
[ProPairs](https://pro-pairs.herokuapp.com/)  
Version 1.0  
Deployment Date: March 15, 2023

# Table of Contents
- [Description](#description)
- [Getting Started](#getting-started)
- [Instructions](#instructions)
- [Technologies Used](#technologies-used)
- [Authors](#authors)
- [Original Idea](#original-idea)
- [IceBox](#icebox)
- [License](#license)

# Description

[ProPairs](https://pro-pairs.herokuapp.com/) is a web application that matches compatible teammates for group projects based on their Myers-Briggs personality types. The application suggests potential partners with similar interests, values, and communication styles, and allows users to see their compatibility rating as a pair and as a team. The application is hosted on a secure server and can be accessed from any device with an internet connection.  

*Features*
- Compatibility: See one-on-one compatibility ratings.
- Team Compatibility:  Model predicted compatibility of up to five team members.
- User Authentication: Create a personal account and log in to access the application's features.

![image](https://user-images.githubusercontent.com/120350675/225492786-b6d5632d-1ad2-451b-99f3-c9bfd08a7928.png)


# Getting Started

To get started,  visit [the website](https://pro-pairs.herokuapp.com/) to sign up for an account.  You'll need your MBTI. If you know it, great! If not, take a [quick quiz](https://www.16personalities.com/free-personality-test) to discover your personality type. 

# Instructions

1. Once signed in, view your your profile. See your teams and user details. Is something not quite right? Update your username, email, or password. 
2. Build a team: Enter a project title and description. Add two to five team members. Include yourself on the team, or not.
3. Search users: Search by personality type, name, or email. Navigate to profile page of a user you're interested in.
4. Manage teams: View project details, team compatibility. We know projects pivot and needs change- update project title, description, and members as needed.
5. Log out when you're done!

# Technologies Used

**React.js** for building user interfaces.
**React Bootstrap**, **CSS**, and **Material UI** for styling.
**Node.js** and **Express.js** for building a GraphQL API.
**MongoDB** as the database management system.
**Mongoose** ODM for modeling data in MongoDB.
**bcrypt** for password hashing and JSON Web Token (JWT) for authentication.
**Heroku** and **MongoDB Atlas** for deployment.

# Authors

* Magdalene Zernick: https://github.com/MZernick
* Anita Banh: https://github.com/AnitaBanh
* Josh Goeke: https://github.com/joshuagoeke
* Dominique Nix: https://github.com/Dominique216
* Jeremy Crouthamel: https://github.com/Leyden05

# Original Idea
**Early Concept**

![image](https://user-images.githubusercontent.com/120350675/225497060-983142c7-17b7-4127-bbf1-98a1d3211859.png) ![image](https://user-images.githubusercontent.com/120350675/225497270-2518fa13-5ca1-4061-838e-7f0c823753ff.png)


**Logic**
![Compatibility JG](https://user-images.githubusercontent.com/120350675/225496933-ea5cff68-d85c-47ec-a7bd-8f9438d23e2c.jpg)


**User Flow**
![image](https://user-images.githubusercontent.com/120350675/225496309-37b01fb2-8b3a-4285-a94f-f47a6f9bddb9.png)


# IceBox
Ideas pending for future development:
1. Integrate personality test.
2. Facilitate team and user communication via chat.
3. Add user profile picture or avatar.
4. Improve mobile friendliness.

# License

MIT License

Copyright (c) 2023 Magdalene Zernick

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
