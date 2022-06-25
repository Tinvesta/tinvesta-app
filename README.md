
# 💸 tinvesta-app 💸

Matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match.

## 📖 Table of Contents

- [🌐 Links](#user-content--links)
- [🎨 Architecture](#user-content--architecture)
- [✨ Getting started](#user-content--getting-started)
  - [Prerequisites](#prerequisites)
  - [Bootstrap](#bootstrap)
- [🏗️ Built With](#user-content--built-with)
- [🥅 Roadmap](#user-content--roadmap)
- [📚 Documentation](#user-content--documentation)
  - [Commit Message Guideline](#commit-message-guideline)

## 🌐 Links

- Application: https://www.tinvesta.io

## 🎨 Architecture

This is a mix of:

- atomic design pattern,
- clean architecture pattern,

Here is an explanation of how each layer depends on each other:
![image](https://michalzalecki.com/posts/elegant-frontend-architecture-layers@2x.png)

## ✨ Getting started

### Prerequisites

You need to have installed the following software:

- [nodejs](https://nodejs.org/en/) (>=16.15.0)
- [yarn](https://npmjs.com/) (>= 1.22.19)
- volta
  ```sh
  curl https://get.volta.sh | bash
  ```

### Bootstrap

1. Clone the repo
   ```sh
   git clone https://github.com/Tinvesta/tinvesta-app.git
   ```
2. Install proper yarn and node versions
   ```sh
   volta install node yarn
   ```
3. Install NPM packages
   ```sh
   yarn
   ```


## 🏗️ Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Emotion](https://emotion.sh/)
- [Supabase](https://supabase.com/)
- [Mui](https://mui.com/)
- [Vercel](https://vercel.com/)
- [Renovate](https://renovatebot.com/)
- [Fontsource](https://fontsource.org/)
- [Stripe](https://stripe.com/)
- [react-hook-form](https://react-hook-form.com/)
- [Mapbox](https://www.mapbox.com/)
- [TensorFlow](https://www.tensorflow.org/js)
- [x-state](https://xstate.js.org/)
- [framer-motion](https://www.framer.com/motion/)

## 🥅 Roadmap

- [ ] Reports / ban system
- [ ] Account verifiction
- [ ] Multiple language support
- [ ] Remove account function


## 📚 Documentation

### Commit Message Guideline

- For easier commit type recognition commit messages are used a commitlint convenction
- See available [commitlint.js.org](https://commitlint.js.org)
