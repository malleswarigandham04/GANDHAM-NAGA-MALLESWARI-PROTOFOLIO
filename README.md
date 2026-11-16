# Naga Malleswari — Developer Portfolio

A responsive React + Vite portfolio starter with a dark charcoal/navy theme and golden-yellow accents. The visual direction follows the uploaded video: bold editorial typography, high-contrast headings, compact navigation, project panels, and experience/achievement sections.

## 1. Requirements

- Node.js (LTS recommended)
- npm
- Visual Studio Code

Check your installation in the VS Code terminal:

```bash
node -v
npm -v
```

## 2. Run the project

Open this folder in VS Code. Select **Terminal → New Terminal**, then run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## 3. Personalize before publishing

Open `src/data.js` and update the `profile` object:

- `email`: your professional email address
- `github`: your GitHub profile URL
- `linkedin`: your LinkedIn profile URL
- `resume`: keep `/resume.pdf` and place your PDF at `public/resume.pdf`, or change both consistently
- `photo`: keep `/profile.jpg` and place your own professional photograph at `public/profile.jpg`, or change both consistently

Also update:
- Exact branch name from your degree certificate
- Graduation year
- Internship start/end dates
- Skills to match your actual proficiency
- Project repository/demo URLs
- Project descriptions and contributions to match the work you completed

The project cards intentionally show disabled link labels when URLs are empty; they do not lead to fake destinations.

## 4. Add images

- Profile image: `public/profile.jpg`
- Resume: `public/resume.pdf`
- Project illustrations are starter SVGs in `public/projects/`. Replace them with your own screenshots if available, and update the matching `image` paths in `src/data.js`.

Use images you own or have permission to publish. Avoid including private dataset records, API keys, passwords, or confidential internship information.

## 5. Build and preview

```bash
npm run build
npm run preview
```

If the build completes, Vite creates the production site in `dist/`.

## 6. Publish with GitHub and Vercel

Create an empty GitHub repository, then run these commands in the VS Code terminal (replace the URL with your repository URL):

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Then:
1. Sign in at https://vercel.com/ using GitHub.
2. Choose **Add New → Project**.
3. Import your portfolio repository.
4. Keep the detected Vite settings. Build command: `npm run build`; output directory: `dist`.
5. Select **Deploy**.

After deployment, test the website on both desktop and mobile. Confirm your resume downloads, navigation works, and every external URL is correct.

## 7. Project structure

```text
malleswari-portfolio/
├── public/
│   ├── projects/
│   │   ├── fraud.svg
│   │   ├── housing.svg
│   │   ├── fingerprint.svg
│   │   └── travel.svg
│   ├── profile.jpg       # add your own photo
│   └── resume.pdf        # add your own resume
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Accuracy notes

- No personal email, social URL, graduation year, or exact branch has been invented.
- Project metrics and model performance figures are intentionally omitted.
- The fingerprint project description is phrased as a project exploration; only publish final claims that match your implemented and evaluated work.
- Update the skill list to remove technologies you cannot confidently explain in an interview.
