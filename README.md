# MakeVideo

**EVERYTHING IS A VIDEO IF YOU TRY HARD ENOUGH!!!**

MakeVideo (*probably better as OOPS, ALL VIDEOS!*) lets you turn literally any file into a video through the **POWER OF FFMPEG**!!!

And yes I wrote it in JavaScript because I'm just like that.

## Prerequisites

* [Node.js](https://nodejs.org/)
* [ffmpeg](https://ffmpeg.org/)
* Some knowledge on how video and audio works

# How to use

1. Add a file to this folder
2. Use Node to run **makeVideo.js** (`node makeVideo.js in=<input-filename>`), and it will automatically convert "**input-filename**" into "**output.mp4**"
   - Tip: use the "help" argument to view all options
   - If you do not supply an `in=` argument it will use the file **input**
3. Use [VLC Media Player](https://www.videolan.org/) to view the finished video since I can't get Windows to recognize the scuffed format

# Commands and arguments

There are actually some arguments built-in with this tiny script (there is more help menu code than actual conversion code since it uses ffmpeg).

MakeVideo comes with a few presets (mostly for turning audio into video), but you can also make your own formats, and MakeVideo will attempt to synchronize the audio (Larger resolutions will shorten runtime and "squish" the audio).

Use the `w` and `h` flags to set the size of the grid, and `fr` for the video framerate. `s` is the scale MakeVideo uses to scale up the grid to a more watchable resolution (so a 40x40 video can become a 960x960 video). MakeVideo adjusts the sample rate to sync the audio you hear with the video you see, but you can also set the audio sample rate manually if you change the sample format (in for whatever reason).

**Use the `help` argument to display up-to-date information.** (`node makeVideo.js help`)

# Examples

[502 - Bad Gateway (by me!!!) as a video](https://youtu.be/E66mXkIZJ9c?si=HBURp6OF5YL2IrLE) (audio is messed up because of wrong sample format)

Command:
```
node makeVideo.js preset=48000s abd=s16le s=48 fr=60
```

[Undertale's data.win file as a video, by Vortex (@vortexmeta)](https://www.youtube.com/watch?v=ENpQ376JHkA)

They didn't use MakeVideo I got the ffmpeg command from them.
