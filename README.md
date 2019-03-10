# Mercury Reborn API

this is the api for the mercury scouting app.

### Configuration

The general configuration for an instance of the mercury API is stored in config.json.
tweak this file to change the options like the database name and the event (from TBA) for your instance.

All the forms for the current instance are stored in a ./forms directory.

this folder has to hold an index.js file, which exports three forms, `filed`, `pit` and `spectator`.
in order for the system to work correctly all three of these have to be valid json objects, empty or otherwise.
