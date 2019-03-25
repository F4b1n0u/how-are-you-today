# How are you today ?
<p align="center">
  <img src ="https://raw.githubusercontent.com/F4b1n0u/how-are-you-today/master/demo.gif" />
</p>

## How to run me
I did my best to provide you with an up and running process, but to be fair, everything was already installed on my dev machine, so I really hope I didn't forget anything !!! if that is the case, there is an animated gif to show you how the app is working ! :)

### Pre-requirements
#### Network
- The client and the server should be on the same network !!!
- Note somewhere the IP of your server

#### Server
- `npm install -g json-server`
- Move `./db.json` file outside of the root folder of the project. This is to prevent the watch to restart your app at any insertion in the DB

#### Client
- `npm install -g expo-cli`
- `npm install` on the root of the project
- Update the `env.json` file with IP address of your server
- (optional) install expo on your mobile device if you want to test on a real phone

### Launch the app
#### Server
- `json-server --watch db.json --host YOUR_IP --delay 1000`, feel free to change the delay to see how the app will behave ;)
- `npm start`

#### Client
- `npm test`, to be honest they are not real production-like tests ! but just to show off a bit :)
- Run on a simulator:
  - `expo start --ios` or
  - `expo start --android`
- Run on a real device:
  - `expo start`
  - Just scan the QRCode with you phone:
    - Android: from the expo app
    - IOS: from your camera app
- Enjoy !!!!

### Road map
here is how I approach the dev of this project:
- Build something that works ! without paying attention to how it looks 
- Style the app to match the suggestion
- Add some tests at the end just to showcase basic examples (test writing can be time consuming after all !)

This project is quite opinionated in terms of choice of library !, but I am NOT !!!
for example, I used expo because it is easy to setup and speed up development, but in a real life production env, I doubt that I would use it, due to the limitations you can encounter when you wish to use a non-pure JS library.

This app was tested on real devices:
- Apple Iphone X
- Android Lg nexus 5X
both to the latest OS versions.

# Worth Mentioning
Due to the time limitation, I took the liberty to re-use one of my own projects as a base so we have:
- Basic unitary tests supported by Jest
- Basic routing supported by react-navigation
- Linting: I'm using my own rules here, but I'm comfortable using other ones.
- Duckerized reducers: I'm used to this approach, but once again, I'm comfortable as well with the more classic way to split reducers/selector/action/action creator
- Some Babel aliases to help the imports of in-house files
- [styled components](https://www.styled-components.com) This library, for me, is a very elegant way to deal with styling. With it you can have a proper separation of concern when it is about the styling ! it helps to have a very simple-to-read style-free render function !
- Support basic network concerns, for instance:
  - Async UX with spinner;
  - App loading (splash screen) which depends on the server state;
  - The possibility to retry the submission of a check-in if it fails (try to turn off the server just before the submit :));
- I didn't add comments to my code properly; sorry about that. I mainly focused on good practices and also ensuring that it WORKS ! :)

# More about me
I really invite you to have a look at my 2 other RN apps that I have already released on the appStore:

- [My Games](https://itunes.apple.com/us/app/my-games/id1279042862)
- [my magic lives](https://itunes.apple.com/us/app/my-magic-lives/id1357797050)

Please have a look at the source as well ! :)

- [My Games](https://github.com/F4b1n0u/my-games)
- [my magic lives](https://github.com/F4b1n0u/my-life)

I do actively work on a third project as well, which is still in progress but by all means [have a look !](https://expo.io/@f4b1n0u/gym-timer)
it assists you to focus on your workout and not on the clock while you are exercising !

if you have any question whatsoever feel free to contact me !
