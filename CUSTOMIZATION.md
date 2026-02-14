# Quick Customization Guide

## Step 1: Personalize the Quiz Questions

Open `script.js` and find this section (around line 8):

```javascript
const quizQuestions = [
    {
        question: "What's my favorite color?",
        options: ["Blue", "Pink", "Green", "Purple"],
        correct: 1
    },
```

Replace with real questions about your girlfriend:

**Example:**
```javascript
const quizQuestions = [
    {
        question: "What's Tanisha's favorite color?",
        options: ["Blue", "Purple", "Green", "Pink"],
        correct: 1  // 0 = first option, 1 = second, etc.
    },
    {
        question: "What's our favorite restaurant?",
        options: ["Pizza Palace", "Spice Garden", "Burger King", "Sushi Place"],
        correct: 1
    },
    {
        question: "What's Tanisha's dream vacation?",
        options: ["Paris", "Tokyo", "Maldives", "New York"],
        correct: 2
    },
    {
        question: "How many years have we been together?",
        options: ["1 year", "2 years", "3 years", "4 years"],
        correct: 0
    },
    {
        question: "What's Tanisha's favorite season?",
        options: ["Spring", "Summer", "Fall", "Winter"],
        correct: 1
    },
    {
        question: "What's our song?",
        options: ["Song A", "Song B", "Song C", "Song D"],
        correct: 0
    }
];
```

**Important:** The `correct` value is the INDEX (starting from 0):
- 0 = First option
- 1 = Second option
- 2 = Third option
- 3 = Fourth option

## Step 2: Customize Wheel Options

Find this section (around line 95):

```javascript
const wheelOptions = [
    '💋 A sweet kiss',
    '🤗 A warm hug',
    '☕ Coffee date',
    '🍿 Movie night',
    '🎵 Romantic dinner',
    '🚶 Long walk together',
    '🧺 Picnic in the park',
    '💃 Dance together'
];
```

Add your favorite romantic activities:

```javascript
const wheelOptions = [
    '💋 A sweet kiss',
    '🤗 A tight hug',
    '☕ Coffee at our favorite cafe',
    '🍿 Movie marathon night',
    '🕯️ Candlelit dinner',
    '🚶 Long walk by the riverside',
    '🏖️ Beach day with sunset',
    '💃 Dance in the kitchen',
    '📚 Read together',
    '🎂 Bake something sweet'
];
```

## Step 3: Set Your Relationship Start Date

Find this section (around line 30 in `startCountdown` function):

```javascript
const startDate = new Date(2024, 1, 14); // Start date
```

Change to your actual start date:
```javascript
// Format: new Date(YEAR, MONTH-1, DAY)
// Note: Months are 0-indexed (0 = January, 11 = December)

const startDate = new Date(2023, 5, 15); // June 15, 2023
// const startDate = new Date(2022, 10, 20); // November 20, 2022
```

## Step 4: Personalize the Love Letter

Open `index.html` and find the "Love Letter" section (search for "A Letter to You"):

Replace the default text with your personal message:

```html
<div class="letter-content">
    <p>My Dearest Tanisha,</p>
    <p>
        Today, I want to take a moment to tell you how much you mean to me. 
        [Add your personal message here...]
    </p>
    <p>
        [Continue with your heartfelt words...]
    </p>
    <p class="letter-signature">Forever Yours,<br>❤️</p>
</div>
```

## Step 5: Update Our Story Section

Find the "Our Story" section in `index.html`:

```html
<div class="story-grid">
    <div class="story-card">
        <div class="story-number">01</div>
        <h3>The Beginning</h3>
        <p>It all started with a smile that made my heart skip a beat...</p>
    </div>
```

Personalize each story card:

```html
<div class="story-card">
    <div class="story-number">01</div>
    <h3>The Day We Met</h3>
    <p>I remember the exact moment I saw you. Your smile was mesmerizing...</p>
</div>

<div class="story-card">
    <div class="story-number">02</div>
    <h3>Falling in Love</h3>
    <p>Every day with you showed me what real love feels like...</p>
</div>

<div class="story-card">
    <div class="story-number">03</div>
    <h3>Forever Together</h3>
    <p>You are my greatest blessing and my happiest adventure...</p>
</div>
```

## Step 6: Customize Memory Gallery Labels

Find the gallery section in `index.html`:

```html
<div class="gallery-item">
    <div class="gallery-placeholder">📸</div>
    <p>Our First Adventure</p>
</div>
```

Change labels to match your memories:

```html
<div class="gallery-item">
    <div class="gallery-placeholder">📸</div>
    <p>First Coffee Date</p>
</div>

<div class="gallery-item">
    <div class="gallery-placeholder">🌅</div>
    <p>Beach Sunset</p>
</div>

<div class="gallery-item">
    <div class="gallery-placeholder">🎉</div>
    <p>Birthday Celebration</p>
</div>
```

## Step 7: Update the Surprise Message

Find the "Surprise" section in `index.html`:

```html
<div class="message-content">
    <p>You are the most amazing person I know.</p>
    <p>Every moment with you is precious.</p>
    <p>I can't wait for all our future adventures together.</p>
    <p>I love you more than words can express.</p>
    <p>Happy Valentine's Day! 💕</p>
</div>
```

Make it more personal:

```html
<div class="message-content">
    <p>Tanisha, you make my life complete.</p>
    <p>Your smile brightens even my darkest days.</p>
    <p>I fall more in love with you each day.</p>
    <p>Thank you for being my best friend and soulmate.</p>
    <p>I can't wait for forever with you. 💕</p>
</div>
```

## Step 8: (Optional) Add Photos to Gallery

1. Create a folder called `images` in the same directory
2. Add your photos (jpg, png, etc.)
3. Replace the gallery items in `index.html`:

```html
<div class="gallery-item">
    <img src="images/photo1.jpg" alt="Our First Adventure">
    <p>Our First Adventure</p>
</div>

<div class="gallery-item">
    <img src="images/photo2.jpg" alt="Beach Sunset">
    <p>Beach Sunset</p>
</div>
```

## Testing Your Changes

1. Save all files after making changes
2. Open `index.html` in your browser (refresh if it's already open)
3. Test all interactive features:
   - ✅ Play the quiz
   - ✅ Click heart game
   - ✅ Spin the wheel
   - ✅ Add messages
   - ✅ Check surprise button

## Color Customization

If you want to change colors, edit `styles.css` at the top:

```css
:root {
    --primary-color: #ff6b9d;      /* Change this for main color */
    --secondary-color: #c44569;    /* Change for secondary */
    --accent-color: #ffa07a;       /* Change for accents */
    --light-bg: #fff5f7;           /* Change background */
}
```

Popular color combinations:
```css
/* Rose Gold Theme */
--primary-color: #d4af37;
--secondary-color: #c9a961;

/* Deep Red Romance */
--primary-color: #8b0000;
--secondary-color: #dc143c;

/* Purple Love */
--primary-color: #9370db;
--secondary-color: #6a0dad;

/* Coral Pink */
--primary-color: #ff7f50;
--secondary-color: #ff6347;
```

## Need More Help?

- Check the main README.md for full feature documentation
- All code is commented for easy understanding
- Most changes are simple text replacements in HTML and JavaScript

**That's it! Your personalized Valentine's website is ready! 💕**

---

## Common Questions

**Q: Do I need internet to view the website?**
A: No! Just open index.html locally. Everything works offline.

**Q: Can I share this website?**
A: Yes! You can email the whole folder or upload to free hosting.

**Q: Will my messages be saved?**
A: Yes! Messages are saved in the browser's local storage. They persist unless you clear browser data.

**Q: Can I add real music?**
A: Yes! Create a "music" folder and add MP3 files, then modify script.js.

**Q: How do I add real photos?**
A: Create an "images" folder and add your photos, then update the HTML image tags.

Have fun creating! Your girlfriend will love it! 💕✨
