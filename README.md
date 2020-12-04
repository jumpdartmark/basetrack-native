# mercury-native-code
This is a quick example app with react-native/expo
to be used as a code sample for a mercury studio interview.

##About(Functionality)
I decided to make a quick app that generates a standard gps file (.gpx).
Most GPSs save data in the form of a gpx file representing a **track**.
I personally want a way to generate a .gpx track file without requiring a stand-alone gps device.
This likely already exists but after I get the basics of this app functioning I would like to build a backend and authentication to allow for saving of these files in the cloud with comments.
Currently, Garmin and Navionics require a monthly subscription for you to do something like this.
Not to mention a newer expensive device compatible with the service.

**Expected functionality by screen/view**

- **status/controls**
    - view if a current track is being recorded or not
    - start or stop current track being recorded
    - export current track as file
- **raw view**
    - not sure yet if this will be the raw gpx xml or json to match the format of how i will store it  
- **summary view**
    - summary aggregate data
        - distance traveled
        - duration traveled
    - current status information
        - current lat/long
        - indicator if user is moving or not
        - direction moving
 - **map**(MAYBE... if I have time)
    - show indicator of current location and moving direction
    - show connected lines between all or every **n** position entries
    
##About(code)

**technology implemented with context and reasoning**

 - **react-native + expo + typescript**
    - I have a lot of react experience but not much or any real native experience so I wanted to leverage exp or bootstrap the app.
    I usually like to manage all the babel/webpack loaders/plugins, so I might try ejecting.
 
 - **debug profiles (pending verification)**
    - I enjoy being able to set breakpoints in my IDE so I usually try and add VSCode and IntelliJ debug profiles.
 
 - **react context api (pending)**
    - an adapter layer will be added between the react components and the gps functionality in the form of a ActiveTrack Context
    - the actual track data itself will likely be stored here as well for now unless I put it in redux if I find I need to store/memoize more data
    - if this functionality would be required by redux thunks or sagas, it would need to be abstracted in some sort of utility class that could be provided via middleware to redux and to the context to be used by the components.

 - **Unit tests (pending)**
    - as the components and functionality get flushed out I will have test files alongside each .tsx, .ts file
    - I used jasmine for years so I am a fan of Jest now, but I have yet to look in to any expo/jest libraries I might need
