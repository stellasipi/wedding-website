# Wedding Website - Setup Instructions

A beautiful, bilingual single-page wedding website with RSVP functionality that saves responses to Google Sheets.

## Files in This Package

- **`wedding-website.html`** - the page structure and content
- **`styles.css`** - all visual styling (colors, fonts, layout)
- **`script.js`** - all interactivity (language switching, RSVP form logic, scroll effects)

These three files work together and must stay in the **same folder** with their original filenames — the HTML links to the other two by name. If you ever need to open the page locally, just double-click `wedding-website.html`; your browser will automatically load the other two from the same folder.

## Features

✨ **Single-page scrolling design** - Elegant, modern layout  
🌍 **Bilingual** - Hungarian and English with easy language switcher  
🎨 **Beautiful color palette** - White, porcelain, and honeydew green tones
📅 **Wedding date display** - Prominently featured  
🕐 **Schedule section** - Timeline of your special day  
📍 **Information cards** - Church location, reception venue, directions, accommodations, dress code, and gifts  
💌 **Smart RSVP form** - Saves directly to Google Sheets with automatic email confirmations
📱 **Fully responsive** - Looks great on all devices  
🎨 **Customizable** - Easy to change colors, fonts, and content

## Quick Start

### Step 1: Customize Your Website

Open `wedding-website.html` and your details are already filled in:

#### Wedding Details (Already Set)
- **Names**: Stella & Zsolti
- **Date**: 2027 július 3 (July 3, 2027 in English)
- **Church**: Kiskunmajsai Római Katolikus Templom, 6120 Kiskunmajsa, Petőfi tér 9
- **Reception**: Polyák Borbirtok, Kunszállás

### Design Customization (Optional)
To change colors, open `styles.css` and modify the CSS variables at the top (in the `:root` block):
```css
:root {
    --white: #FFFFFF;
    --dusty-olive: #547044;   /* main text, headings, borders, icons */
    --soft-linen: #DDE2D6;    /* subtle highlights (RSVP form, hover states) */
    --evergreen: #263526;     /* high-contrast footer & CTA button */
}
```

### Step 2: Set Up Google Sheets for RSVPs

1. **Create a new Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it something like "Stella & Zsolti Wedding RSVPs"

2. **Add the Apps Script**
   - In your Google Sheet, click **Extensions** → **Apps Script**
   - Delete any existing code
   - Copy all the code from `google-apps-script.js`
   - Paste it into the Apps Script editor
   - Click the **Save** icon (disk icon)

3. **Deploy as Web App**
   - Click **Deploy** → **New deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **Web app**
   - Fill in the settings:
     - **Description**: "Wedding RSVP Handler"
     - **Execute as**: Me
     - **Who has access**: Anyone
   - Click **Deploy**
   - Click **Authorize access** and follow the prompts
   - Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...`)

4. **Connect the Form to Google Sheets**
   - Open `wedding-website.html`
   - Find the line that says: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
   - Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web app URL
   - Save the file

### Step 3: Test Your RSVP Form

1. Open `wedding-website.html` in a web browser
2. Scroll to the Visszajelzés (RSVP) section
3. Fill out the form with test data:
   - Enter a name
   - Enter your email
   - Select "Igen" for attendance
   - For allergies: Select "Nincs" OR select "Van" and fill in the text box
   - Choose driver service preference
4. Click "Visszajelzés Küldése"
5. Check your Google Sheet - you should see a new row with the test data
6. Check your email - you should receive a confirmation email

If it works, congratulations! 🎉

### Step 4: Publish Your Website

The site is now three files that must be uploaded **together, in the same folder**: `wedding-website.html`, `styles.css`, and `script.js`. They reference each other by filename, so if you only upload the HTML file the page will load with no styling or interactivity.

You have several options to host your website:

#### Option A: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for a free account
3. Drag and drop the **folder** containing all three files (`wedding-website.html`, `styles.css`, `script.js`)
4. Get a free URL like `stella-zsolti.netlify.app`
5. Optional: Connect a custom domain

#### Option B: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all three files: `wedding-website.html`, `styles.css`, `script.js`
4. Rename `wedding-website.html` to `index.html`
5. Enable GitHub Pages in Settings
6. Your site will be at `username.github.io/repository-name`

#### Option C: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up for free
3. Upload the folder containing all three files
4. Get instant hosting

## RSVP Form Fields

The form collects the following information:

1. **Teljes Név** (Full Name) - Required text field
2. **Kiket regisztrálsz magadon kívül** (Additional Guests) - Optional text field for listing other guests by name
3. **E-mail** - Required email field with validation
4. **Részt tudsz/tudok venni?** (Will you attend?) - Required radio buttons:
   - Igen (Yes)
   - Sajnos nem (Unfortunately not)
5. **Ételallergiák** (Food Allergies) - Required radio buttons with smart validation:
   - Nincs (I don't have) - No additional info needed
   - Van (I have) - Text box appears and becomes mandatory
6. **Sofőrszolgáltatás** (Driver Service) - Required radio buttons:
   - Igen (Yes)
   - Nem (No)
   - Még nem tudom (Not sure yet)
7. **Egyéb** (Other) - Optional text area for additional comments

**Email Confirmation**: Guests automatically receive a confirmation email in their selected language (Hungarian or English) with all their RSVP details.

## Customization Guide

### Changing Fonts

Current fonts (embedded directly in `styles.css`, see the `@font-face` rules near the top):
- **Display font (names, headers)**: Elaris (your invitation's script font)
- **Body font**: Montserrat Light

To use different fonts instead:
1. Get the font files (or a Google Fonts `<link>` if you'd rather not embed them)
2. Replace the `@font-face` `src` in `styles.css`, or swap in a Google Fonts `<link>` tag in `wedding-website.html`'s `<head>`
3. Update the two `font-family` references in `styles.css` (`'WeddingSerif'` for headings, `'WeddingSans'` for body text) to match your new font's name

### Adding Photos

To add a background photo to the hero section, in `styles.css`:
```css
.hero {
    background-image: url('your-photo.jpg');
    background-size: cover;
    background-position: center;
}
```

### Customizing Language Content

The website is bilingual (Hungarian/English). To edit translations:

1. Open `script.js` and find the `translations` object near the top
2. Edit the Hungarian (`hu`) or English (`en`) text as needed
3. The default language is Hungarian - to change this, modify the line:
   ```javascript
   const savedLang = localStorage.getItem('preferredLanguage') || 'hu';
   ```
   Change `'hu'` to `'en'` if you want English as default

**Adding More Languages:**
1. Add a new language object in the `translations` section of `script.js`
2. Add a new button in the language switcher HTML (in `wedding-website.html`)
3. Follow the same pattern as Hungarian and English

### Email Notifications (Optional)

To receive an email notification when someone RSVPs (in addition to the guest confirmation):
1. Open `google-apps-script.js`
2. Find the commented section around line 67
3. Uncomment the code (remove the `/*` and `*/`)
4. Replace `'your-email@example.com'` with your email
5. Re-deploy the script

## Color Palette

- **#547044** - Dusty Olive - main text, headings, borders, icons (now also the border on schedule/info cards)
- **#FFFFFF** - White - main background, and the background of the schedule box & info cards
- **#DDE2D6** - Soft Linen - subtle highlights (RSVP form background, hover states)
- **#263526** - Evergreen - high-contrast elements: footer and the RSVP submit button

## Fonts & Logo

The website uses your actual invitation assets, embedded directly as data inside `styles.css` (fonts) and `wedding-website.html` (the favicon and hero logo) so no separate font/image files need to be uploaded anywhere:

- **Elaris Regular** - used for all headings (couple's names, section titles, schedule/info card titles)
- **Montserrat Light** - used for all body text, labels, and buttons
- **Monogram (Zs & S)** - displayed above your names in the hero section, and as the browser tab favicon

Because the fonts and logo are embedded as data, you still only need to manage the three code files (`wedding-website.html`, `styles.css`, `script.js`) — no separate `.otf`/`.ttf`/`.png` files to keep track of or upload alongside them.

**Note:** Only the Light weight of Montserrat was provided, so any bold/medium text (like form labels) is rendered by the browser's automatic "faux bold," which looks great in practice but isn't a distinct designed weight.

## Troubleshooting

### RSVP form not working?
- Check that you replaced the Google Apps Script URL correctly
- Make sure you authorized the script when deploying
- Check the browser console (F12) for error messages
- Try testing the script in Google Apps Script with the `testScript()` function

### Not receiving confirmation emails?
- Check your spam/junk folder
- Verify that the email address was entered correctly in the form
- Make sure the Google Apps Script has permission to send emails

### Allergy field validation issues?
- If "Van" (I have) is selected, the text box MUST be filled out
- If "Nincs" (I don't have) is selected, no additional info is needed
- The form will show an error if validation fails

### Website looks different on mobile?
- The site is designed to be responsive
- Test on actual devices if possible
- Try different browsers

### Colors not changing?
- Make sure you're editing the CSS variables in the `:root` section
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)

## Support

If you need help:
- Check the comments in the code files
- Review the setup steps carefully
- Test with the browser console open (F12)

## Credits

Design uses:
- Google Fonts (Cormorant Garamond & Montserrat)
- Vanilla JavaScript (no frameworks needed)
- CSS3 animations and transitions

---

**Gratulálunk az esküvőhöz! / Congratulations on your wedding!** 💑💚

Enjoy your beautiful new website!