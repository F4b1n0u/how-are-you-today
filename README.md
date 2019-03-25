# How are you today ?
<p align="center">
  <img src ="https://raw.githubusercontent.com/F4b1n0u/how-are-you-today/master/demo.gif" />
</p>

## how to run me
I did my best to provide you a up and running process, but to be fair, everything was already installed on my dev machine, so I really hope I didn't forget anything !!! if it is the case, there is a animated gif to show how tha app is working ! :)

### pre-requirements
#### Network
- the client and the server should be on the same network !!!
- note somewhere the IP of your server

#### Server
- `npm install -g json-server`
- move `./db.json` file outside of the root folder of the project, this is to prevent the watch to restart your app at any insertion in the DB

#### Client
- `npm install -g expo-cli`
- `npm install` on the root of the project
- update the `env.json` file with IP address of you server
- (optional) install expo on your mobile device if you want to test on a real phone

### launch the app
#### Server
- `json-server --watch db.json --host YOUR_IP --delay 1000`, feel free to change the delay to see how the app will behave ;)
- `npm start`

#### Client
- `npm test`, to be honest they are not real production like tests ! but just to show off a bit :)
- run on a simulator:
  - `expo start --ios` or
  - `expo start --android`
- run on a real device:
  - `expo start`
  - just scan the QRCode with you phone:
    - android: from the expo app
    - iOS: from your camera app
- enjoy !!!!

### Road map
here is how I approach the dev of this project:
- build something that works ! without paying attention how it looks like
- style the app to match the suggestion
- add some tests at the end just to showcase basic examples (test could be time consuming after all !)

This project is quite opinionated in term of choice of library !, but I am NOT !!!
for example, I used expo because it is easy to setup and speed up development, but in a real life production env, I doudt that I would use it, due to the limitation you can encounter when you wish to use a non pure JS library.

this app was tested on real devices:
- Apple Iphone X
- Android Lg nexus 5X
both to the latest OS versions

# Worth Mensionning
Due to the time limitation, I took the liberty to re-use one of my own project as a base so we have:
- basic unitary tests supported by Jest
- basic routing supported by react-navigation
- linting: I'm using my own rules here, but I'm comfortable using other ones.
- duckerized reducers: I'm used to this approach, but once again, I'm comfortable as well with the more classic way to split reducers/selector/action/action creator
- some balel aliases to help the imports of in-house files
- [styled components](https://www.styled-components.com) who are for me a very elegant way to deal with styling, with it you can have a proper separation of concern when it is about the styling !, it help having a very simple to read render function !
- support basic network concerned, like spinner ect, the app will not load if the server is down, you will be able to retry the submition of a check-in if it failed (try to turn off the server just before the submit :))
- due to the lack of time, I didn't commented my code properly, sorry about that. I mainly focused on good practices and also ensuring the it WORKS ! :)

# More about me
I really invite you to have a look at my 2 other RN apps that I already released on the appStore:

- [My Games](https://itunes.apple.com/us/app/my-games/id1279042862)
- [my magic lives](https://itunes.apple.com/us/app/my-magic-lives/id1357797050)

Please have a look at the source as well ! :)

- [My Games](https://github.com/F4b1n0u/my-games)
- [my magic lives](https://github.com/F4b1n0u/my-life)

I do actively work on a third project as well, which is still in progress but by all means [have a look !](https://expo.io/@f4b1n0u/gym-timer)
it is an assistant to help you do focus on your gym workout not on the clock while you are excercising !

if you have any question what so ever feel free to contact me !
