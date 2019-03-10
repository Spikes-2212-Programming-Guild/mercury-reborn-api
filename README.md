# Mercury Reborn API

This is the api for the mercury scouting app.

<hr>

### Configuration

The general configuration for an instance of the mercury API is stored in config.json.
tweak this file to change the options like the database name and the event (from TBA) for your instance.

All the forms for the current instance are stored in a ./forms directory.

this folder has to hold an index.js file, which exports three forms, `filed`, `pit` and `spectator`.
in order for the system to work correctly all three of these have to be valid json objects, empty or otherwise.

<hr>

### Deployment

When deploying the API on a remote server make sure to run `yarn start` in a separate screen,
 so it won't exit after the ssh session is closed.
 
 