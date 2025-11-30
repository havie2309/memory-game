# 🎮 Memory Game

A fun and interactive browser-based memory matching game built with vanilla JavaScript, HTML, and CSS. Test your memory by matching pairs of adorable animal emoji cards before time runs out!

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Game Rules](#game-rules)

## ✨ Features

- **Card Preview**: 5-second preview of all cards at the start of each game
- **Timed Challenge**: 90-second countdown timer to complete the game
- **Move Counter**: Track your performance with a move counter
- **Smooth Animations**: Card flip animations with 3D effects
- **Responsive Design**: Works on various screen sizes
- **Visual Feedback**: Matched cards are highlighted in green
- **Random Shuffling**: Cards are randomly shuffled each game using Fisher-Yates algorithm
- **Restart Anytime**: Start a new game at any point with the restart button

## 🚀 Quick Start

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Click "Start Game" and start matching!

## 📦 Installation

### Option 1: Direct Download

1. Download the project files (or clone the repository):
```bash
git clone https://github.com/yourusername/memory-game.git
```

2. Navigate to the project directory:
```bash
cd memory-game
```

3. Open `index.html` in your preferred web browser

### Option 2: Live Server (Recommended for Development)

1. Install a live server extension in your code editor (e.g., Live Server for VS Code)
2. Right-click on `index.html` and select "Open with Live Server"

## 🎲 How to Use

### Starting the Game

1. Open the game in your browser
2. Click the **"Start Game"** button
3. You'll see all cards face-up for 5 seconds - memorize their positions!
4. After the preview, all cards flip face-down and the timer starts

### Playing the Game

1. Click on any card to flip it over
2. Click on a second card to find its match
3. If the cards match:
   - They turn green and stay face-up
   - Continue finding more pairs
4. If the cards don't match:
   - They flip back face-down after 1 second
   - Try to remember their positions!
5. Match all 10 pairs before the 90-second timer runs out

### Winning the Game

- Match all pairs before time runs out
- Try to complete the game in as few moves as possible
- Click "OK" on the victory screen to start a new game

### Restarting

- Click the **"Start Game"** button at any time to restart
- Your current progress will be lost (you'll be prompted to confirm)

## 📖 Game Rules

- **Objective**: Match all pairs of cards before the timer runs out
- **Time Limit**: 90 seconds
- **Preview Time**: 5 seconds at the start
- **Cards**: 10 unique pairs (20 cards total)
- **Scoring**: Lower move count = better performance
- **Matching**: Two cards match if they have the same emoji

---

**Enjoy the game! 🎉** If you like this project, please give it a ⭐!
