# Audio Not Working on Vercel - Solutions

## Problem
The audio.mpeg file (~14.3 MB) may not work on Vercel due to:
1. **File size**: Large files slow down deployment and streaming
2. **Deployment limits**: Vercel free tier has a 100 MB total limit
3. **Streaming performance**: Large audio files need proper compression

## Solutions

### Option 1: Compress the Audio File (Recommended)

Reduce the audio file size to under 5 MB for optimal performance:

#### Using FFmpeg (Best Quality):
```bash
# Install FFmpeg from https://ffmpeg.org/download.html
# Then run:
ffmpeg -i audio.mpeg -b:a 128k -ar 44100 audio-compressed.mpeg
```

#### Using Online Tools:
- https://www.freeconvert.com/audio-compressor
- https://www.mp3smaller.com/
- https://www.media.io/audio-compressor.html

**Steps:**
1. Compress audio.mpeg to under 5 MB
2. Replace the original file
3. Redeploy to Vercel

### Option 2: Host Audio Externally

Use a CDN or cloud storage service:

#### Cloudflare R2 (Free tier available):
1. Create account at https://dash.cloudflare.com/
2. Upload audio.mpeg to R2 bucket
3. Get public URL
4. Update dashboard.html:
```html
<source src="https://your-bucket.r2.dev/audio.mpeg" type="audio/mpeg">
```

#### AWS S3:
1. Upload to S3 bucket
2. Make object public
3. Use the public URL

#### GitHub LFS (For GitHub repos):
1. Install Git LFS: `git lfs install`
2. Track audio: `git lfs track "*.mpeg"`
3. Use raw GitHub URL in your code

### Option 3: Use a Smaller Audio File

Replace with a smaller background music file (recommended: 2-5 MB, 128kbps bitrate)

## Recommended Settings for Web Audio

- **Bitrate**: 128-192 kbps (good quality, smaller size)
- **Sample Rate**: 44.1 kHz
- **Format**: MP3 or OGG (better compression than MPEG)
- **File Size**: Under 5 MB ideal, 10 MB maximum

## Testing Locally

After making changes, test locally:
```bash
python server.py
```
Then visit http://localhost:8000/dashboard.html

## Vercel Deployment

After fixing the audio:
```bash
git add .
git commit -m "Fix audio file size"
git push
```

Vercel will automatically redeploy if connected to GitHub.

## Alternative: Multiple Audio Sources

Provide fallback audio sources in different formats:
```html
<audio id="backgroundAudio" loop>
    <source src="audio.opus" type="audio/ogg; codecs=opus">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

## Vercel Configuration

The `vercel.json` file has been created with proper audio file support including:
- Correct MIME types for audio files
- Accept-Ranges header for audio streaming
- Proper routing for static assets
