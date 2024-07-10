# MakeVideo

**EVERYTHING IS A VIDEO IF YOU TRY HARD ENOUGH!!!**

MakeVideo (*probably better as OOPS, ALL VIDEOS!*) lets you turn literally any file into a video through the **POWER OF FFMPEG**!!!

And yes I wrote it in JavaScript because I'm just like that.

## Prerequisites

* [Node.js](https://nodejs.org/)
* [ffmpeg](https://ffmpeg.org/)
* Some knowledge on how video and audio works

# How to use

1. Add a file to this folder and call it "**input**" (no file extension)
2. Use Node to run **makeVideo.js** (`node makeVideo.js`), and it will automatically convert "**input**" into "**output.mp4**"
3. Use [VLC Media Player](https://www.videolan.org/) to view the finished video since I can't get Windows to recognize the scuffed format

# Commands and arguments

There are actually some arguments built-in with this tiny script (there is more help menu code than actual conversion code since it uses ffmpeg).

MakeVideo comes with a few presets (mostly for turning audio into video), but you can also make your own formats, and MakeVideo will attempt to synchronize the audio (Larger resolutions will shorten runtime and "squish" the audio).

Use the `w` and `h` flags to set the size of the grid, and `fr` for the video framerate. `s` is the scale MakeVideo uses to scale up the grid to a more watchable resolution (so a 40x40 video can become a 960x960 video). MakeVideo adjusts the sample rate to sync the audio you hear with the video you see, but you can also set the audio sample rate manually if you change the sample format (in for whatever reason).

**Use the `help` argument to display up-to-date information.**

# Examples

[502 - Bad Gateway (by me!!!) as a video](https://youtu.be/E66mXkIZJ9c?si=HBURp6OF5YL2IrLE) (audio is messed up because of wrong sample format)
[Undertale's data.win file as a video, by Vortex (@vortexmeta)](https://www.youtube.com/watch?v=ENpQ376JHkA)
