const { exec } = require('child_process');
const path = require('path');

const audioPresets = {
    '8000s': {
        w: 20,
        h: 20,
        fr: 20,
        abr: 48,
        asr: 8000
    },
    '44100s': {
        w: 42,
        h: 42,
        fr: 25,
        abr: 128,
        asr: 44100
    },
    '48000s': {
        w: 40,
        h: 40,
        fr: 30,
        abr: 128,
        asr: 48000
    },
    '96000s': {
        w: 40,
        h: 40,
        fr: 60,
        abr: 192,
        asr: 96000
    }
};

if (process.argv.includes('help')) {
    console.log('Commands:')
    console.log('  help: shows this message');
    console.log('  list-presets: shows all available presets');
    console.log('Arguments:');
    console.log('  preset: Choose a preset to apply (other arguments can override this)')
    console.log('  w: width of each frame (default 42)');
    console.log('  h: height of each frame (default 42)');
    console.log('  s: scale of final video (e.g. s=4 makes a 40x40 grid 160x160 pixels) (default 24)');
    console.log('  fr: frame rate of video (default 25)');
    console.log('  vbr: maximum video bitrate, kb (default 50000)');
    console.log('  abr: audio bitrate (default 128)');
    console.log('  asr: audio sample rate (default 44100)');
    console.log('  abd: audio bit depth (default u8, use ffmpeg -formats to list, common values include u8, u16le, u16be, s8, s16le, s16be)');
    console.log('Tip: The sample rate should be equal to the width * height * framerate for the audio and video to be synced');
    console.log('  (changing the bit depth breaks this rule, 16-bit audio should multiply frame rate by 2)');
    return;
}

if (process.argv.includes('list-presets')) {
    console.log('Audio Presets (for "visualizing" audio):');
    for (const i in audioPresets) {
        console.log('  ' + i);
        console.log(`    w: ${audioPresets[i].w}, h: ${audioPresets[i].h}, fr: ${audioPresets[i].fr}, abr: ${audioPresets[i].abr}, asr: ${audioPresets[i].asr}`)
    }
    return;
}

const args = {};
process.argv.forEach((v) => {
    const s = v.split('=');
    if (s.length == 2) args[s[0]] = s[1];
});

if (audioPresets[args.preset] !== undefined) {
    console.log(`Using ${args.preset} preset`);
    const preset = audioPresets[args.preset];
    for (const i in preset) {
        if (args[i] == undefined) args[i] = preset[i];
    }
}
const width = args.w ?? 42;
const height = args.h ?? 42;
const scale = args.s ?? 24;
const framerate = args.fr ?? 25;
const videoBitrate = args.vbr ?? 50000;
const audioBitrate = args.abr ?? 128;
const audioSamplerate = args.asr ?? width * height * framerate; // sync video with audio by default
const audioBitDepth = args.abd ?? 'u8'; // changing the bit depth breaks default sample rate
const input = path.resolve(args.in ?? './input');

async function main() {
    const subprocess = exec(`ffmpeg -f ${audioBitDepth} -ar ${audioSamplerate} -ac 2 -i "${input}" -f rawvideo -pix_fmt rgb555 -r ${framerate} -s ${width}x${height} -i "${input}" -vf scale=w=${scale}*iw:h=${scale}*ih:sws_flags=neighbor -c:v h264 -b:v ${videoBitrate}k -c:a aac -ab ${audioBitrate}k output.mp4 -y`);
    subprocess.stdout?.pipe(process.stdout);
    subprocess.stderr?.pipe(process.stderr);
}

main();