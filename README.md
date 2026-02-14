# 💕 Valentine's Day Website

A beautiful, interactive, and fully functional website created with love for your special someone!

## Features

### 🌟 Main Features
- **Hero Section** - Beautiful animated landing page with floating hearts
- **Our Story** - Share your love story in 3 meaningful sections
- **Days Counter** - Countdown timer showing how long you've been together
- **Memory Gallery** - Display your favorite photos and memories
- **Love Messages Wall** - Add and display love messages (saved locally)
- **Interactive Games**:
  - 💖 **Love Match Quiz** - Test knowledge about your partner
  - 💗 **Heart Clicker Game** - Fast-paced clicking game
  - 🎡 **Spin the Wheel** - Random romantic ideas
- **Music Player** - Playlist section (can be customized with real music)
- **Surprise Button** - Special surprise with confetti animation
- **Love Letter** - A heartfelt letter section
- **Responsive Design** - Works perfectly on mobile and desktop
- **Smooth Animations** - Beautiful transitions and effects throughout

## How to Use

### 1. **Open the Website**
Simply open `index.html` in your web browser. No installation or server needed!

### 2. **Customize the Content**

#### Edit "Our Story" Section
In `index.html`, find the "Our Story" section and modify the story cards:
```html
<div class="story-card">
    <div class="story-number">01</div>
    <h3>The Beginning</h3>
    <p>Your story here...</p>
</div>
```

#### Edit Quiz Questions
In `script.js`, modify the `quizQuestions` array with real questions about your girlfriend:
```javascript
const quizQuestions = [
    {
        question: "What's her favorite color?",
        options: ["Blue", "Pink", "Green", "Purple"],
        correct: 1  // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

#### Customize Wheel Options
In `script.js`, modify the `wheelOptions` array:
```javascript
const wheelOptions = [
    '💋 A sweet kiss',
    '🤗 A warm hug',
    '☕ Coffee date',
    // Add your own romantic activities...
];
```

#### Set the Relationship Start Date
In `script.js`, find the `startCountdown()` function and change the date:
```javascript
const startDate = new Date(2024, 1, 14); // Change to your start date
// Format: new Date(YEAR, MONTH-1, DAY)
```

#### Add a Love Letter
In `index.html`, edit the love letter section with your personal message:
```html
<div class="letter-content">
    <p>Your personal message here...</p>
</div>
```

### 3. **Add Photos to Gallery**
The gallery currently shows emoji placeholders. To add real photos:
1. Create an `images` folder in the website directory
2. Add your photos there
3. Edit the gallery items in `index.html` to use image tags instead of emoji

Example:
```html
<div class="gallery-item">
    <img src="images/photo1.jpg" alt="Memory">
    <p>Our First Adventure</p>
</div>
```

### 4. **Add Real Music**
To add actual music to the music player:
1. Create a `music` folder
2. Add your favorite songs there
3. Modify the music player in `script.js` to play actual files

## Features Breakdown

### 💌 Love Messages Wall
- Write and add messages
- Messages are saved in browser (localStorage)
- Persists even after closing the browser
- Beautiful card-based display

### 🎮 Love Match Quiz
- Tests knowledge about your partner
- Customizable with 6 questions
- Shows score and personalized messages
- Try again button

### 💗 Heart Clicker Game
- 10-second game
- Click hearts as fast as possible
- Track your score
- Fun and interactive

### 🎡 Spin the Wheel
- 8 different romantic options
- Smooth spinning animation
- Displays result clearly
- Great for date ideas

### 🎁 Surprise Button
- Reveals a heartfelt message
- Confetti animation
- Creates magical moment
- Fully customizable message

## Customization Tips

### Colors
Change the color scheme in `styles.css`:
```css
:root {
    --primary-color: #ff6b9d;      /* Main pink */
    --secondary-color: #c44569;    /* Dark pink */
    --accent-color: #ffa07a;       /* Light salmon */
    --light-bg: #fff5f7;           /* Light background */
}
```

### Fonts
Modify font families in `styles.css`:
```css
body {
    font-family: 'Your Font Here', sans-serif;
}
```

### Animations
All animations are in `styles.css`. Look for `@keyframes` to customize speeds and effects.

## Technical Details

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks needed
- **LocalStorage** - Messages saved locally (no server needed)
- **Responsive** - Mobile-friendly design

## File Structure
```
valentines_website/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # Interactive features
├── images/         # (Optional) For photos
├── music/          # (Optional) For songs
└── README.md       # This file
```

## Browser Compatibility
Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Tips for Best Experience

1. **Full Screen** - Open in full screen for best experience
2. **Dark Mode** - Website works on both light and dark themes
3. **Mobile** - Test on mobile before showing (fully responsive)
4. **Customization** - The more personal touches, the more special!
5. **Add Music** - Background music makes it even more romantic

## Ideas for Enhancement

- Add real photos to the gallery
- Add real music to the music player
- Create a guestbook section
- Add video message section
- Create a timeline of your relationship
- Add more games
- Include favorite quotes
- Create a wish list
- Add a date ideas generator
- Include memories with descriptions

## Troubleshooting

**Messages not saving?**
- Check if localStorage is enabled in your browser
- Clear cache and reload

**Animations not smooth?**
- Update your browser to the latest version
- Check GPU acceleration is enabled

**Images not showing?**
- Ensure images are in the correct folder
- Use correct file paths
- Check file formats (jpg, png, gif, webp)

## Final Notes

This website is completely self-contained. You don't need a web server - just open the HTML file in any browser. Share it with your girlfriend by:
- Emailing the folder
- Creating a link (using services like GitHub Pages)
- Burning to USB drive
- Uploading to a free hosting service

Most importantly, have fun and make it personal! Add inside jokes, favorite memories, and heartfelt messages. The personal touches make it truly special. 💕

---

**Made with ❤️ for the one you love** ✨
